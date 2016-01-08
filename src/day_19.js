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

let dfs_reverse = (start, target, replacements, level = 0) => {
  if (start === target)
    return level

  for (let [from, to] of replacements) {
    let index = start.indexOf(to)

    if (index >= 0) {
      let next         = start.slice(0, index) + from  + start.slice(index + to.length)
      let target_level = dfs_reverse(next, target, replacements, level + 1)

      if (target_level)
        return target_level
    }
  }
}

export let part1 = (input) => run_replacements(parse_replacements(input)).length

export let part2 = (input) => {
  let [start, replacements] = parse_replacements(input)

  return dfs_reverse(start, 'e', _.sortBy(replacements, ([from, to]) => {
    return to.length
  }).reverse())
}
