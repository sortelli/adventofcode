'use strict'

import _ from 'lodash'

let parse_replacements = (input) => {
  let replacements = input.split("\n")
  let start = replacements.pop()
  replacements.pop()

  return [
    start,
    replacements.map((replacement) => replacement.split(' => '))
  ]
}

let run_replacements = ([start, replacements]) => {
  return _(replacements).map(([from, to]) => {
    return _.map(start, (c, index) => {
      if (start.substr(index).startsWith(from)) {
        return start.slice(0, index) + to + start.slice(index + from.length)
      }
    })
  }).flatten().compact().uniq().value()
}

export let part1 = (input) => run_replacements(parse_replacements(input)).length

export let part2 = () => null
