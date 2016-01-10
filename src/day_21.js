'use strict'

import combinatorics from 'js-combinatorics'
import _ from 'lodash'

let item_shop = {
  weapons: [
    {cost:  8, damage: 4, armor: 0}, //Dagger
    {cost: 10, damage: 5, armor: 0}, //Shortsword
    {cost: 25, damage: 6, armor: 0}, //Warhammer
    {cost: 40, damage: 7, armor: 0}, //Longsword
    {cost: 74, damage: 8, armor: 0}  //Greataxe
  ],
  armor: [
    {cost:  13, damage: 0, armor: 1}, //Leather
    {cost:  31, damage: 0, armor: 2}, //Chainmail
    {cost:  53, damage: 0, armor: 3}, //Splintmail
    {cost:  75, damage: 0, armor: 4}, //Bandedmail
    {cost: 102, damage: 0, armor: 5}  //Platemail
  ],
  rings: [
    {cost:  25,  damage: 1, armor: 0}, //Damage +1
    {cost:  50,  damage: 2, armor: 0}, //Damage +2
    {cost: 100,  damage: 3, armor: 0}, //Damage +3
    {cost:  20,  damage: 0, armor: 1}, //Defense +1
    {cost:  40,  damage: 0, armor: 2}, //Defense +2
    {cost:  80,  damage: 0, armor: 3}  //Defense +3
  ]
}

let damage_delt = (damage, armor) => damage > armor ? damage - armor : 1

let attack = (attacker, defender) => {
  return {
    hit_points: defender.hit_points - damage_delt(attacker.damage, defender.armor),
    damage: defender.damage,
    armor: defender.armor
  }
}

let item_combinations = (shop) => {
  let combos = []

  shop.weapons.forEach((weapon) => {
    [null].concat(shop.armor).forEach((armor) => {
      combinatorics.combination(
        [null, null].concat(shop.rings), 2
      ).toArray().forEach((rings) => {
        combos.push([weapon].concat([armor], rings))
      })
    })
  })

  return combos.map(_.compact)
}

let parse_boss = (input) => {
  let [hit_points, damage, armor] = input.split("\n")
    .map((s) => parseInt(s.replace(/.*: /, ''), 10))

  return {hit_points, damage, armor}
}

let calc_costs = (input, hit_points = 100, shop = item_shop) => {
  let boss = parse_boss(input)

  return _(item_combinations(shop)).map((items) => {
    let player = {
      hit_points,
      damage: _.sum(items, 'damage'),
      armor:  _.sum(items, 'armor')
    }

    return {cost: _.sum(items, 'cost'), won: player_will_win({player, boss})}
  })
}

export let player_will_win = ({player, boss}) => {
  while (true) {
    if ((boss   = attack(player, boss  )).hit_points <= 0) return true
    if ((player = attack(boss,   player)).hit_points <= 0) return false
  }
}

export let part1 = (input, hit_points = 100, shop = item_shop) =>
  calc_costs(input, hit_points, shop).filter('won').min('cost').cost

export let part2 = (input, hit_points = 100, shop = item_shop) =>
  calc_costs(input, hit_points, shop).reject('won').max('cost').cost
