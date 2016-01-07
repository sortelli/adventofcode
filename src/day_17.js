'use strict'

import _ from 'lodash'
import combinatorics from 'js-combinatorics'

let parse_containers = (input) => _.map(input.split("\n"), (line) => parseInt(line, 10))

let count_combinations = (containers, target) => {
  return combinatorics
    .power(containers)
    .filter((cans) => cans.reduce((sum, can) => sum + can, 0) == target)
    .length
}

export let part1 = (input, target = 150) => count_combinations(parse_containers(input), target)
