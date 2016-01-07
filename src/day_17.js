'use strict'

import _ from 'lodash'
import combinatorics from 'js-combinatorics'

let parse_containers = (input) => input.split("\n").map((line) => parseInt(line, 10))

let find_combinations = (input, target) => {
  return combinatorics
    .power(parse_containers(input))
    .filter((cans) => cans.reduce((sum, can) => sum + can, 0) == target)
}

let count_fewest = (combinations) => {
  let lengths = combinations
    .map((cans) => cans.length)
    .reduce((lengths, length) => {
      lengths[length] = (lengths[length] || 0) + 1
      return lengths
    }, {})

  let fewest = Object.keys(lengths).map((k) => parseInt(k, 10)).sort()[0]

  return lengths[fewest]
}

export let part1 = (input, target = 150) => find_combinations(input, target).length

export let part2 = (input, target = 150) => count_fewest(find_combinations(input, target))
