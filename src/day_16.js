'use strict'

import _ from 'lodash'

let analysis = {
  children: 3, cats:        7,
  samoyeds: 2, pomeranians: 3,
  akitas:   0, vizslas:     0,
  goldfish: 5, trees:       3,
  cars:     2, perfumes:    1
}

export let parse_aunts = (input) => {
  return _.map(input.split("\n"), (line) => {
    let params = line.substring(line.indexOf(':') + 2).match(/\w+: \d+/g)
    return _.reduce(params, (aunt, param) => {
      let [name, value] = param.split(': ')
      aunt[name] = parseInt(value, 10)
      return aunt
    }, {})
  })
}

export let part1 = (input) => {
  let aunts = parse_aunts(input)

  for (let i = 0; i < aunts.length; ++i) {
    if (_.all(aunts[i], (value, name) => analysis[name] === value))
      return i + 1
  }
}

export let part2 = () => null
