'use strict'

let shop = {
  weapons: [
    {cost: 4, damage:  8, armor: 0}, //Dagger
    {cost: 5, damage: 10, armor: 0}, //Shortsword
    {cost: 6, damage: 25, armor: 0}, //Warhammer
    {cost: 7, damage: 40, armor: 0}, //Longsword
    {cost: 8, damage: 74, armor: 0}  //Greataxe
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

export let player_will_win = () => null

export let part1 = () => null
