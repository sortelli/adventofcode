'use strict'

let count_nice = (strings, is_nice) => {
  return strings.split("\n").filter(is_nice).length
}

export let part1 = (strings) => {
  return count_nice(strings, (string) => {
    return string.match(/[aeiou].*[aeiou].*[aeiou]/) &&
           string.match(/(.)\1/)                     &&
          !string.match(/(ab|cd|pq|xy)/)
  })
}

export let part2 = (strings) => {
  return count_nice(strings, (string) => {
    return string.match(/(..).*\1/) &&
           string.match(/(.).\1/)
  })
}
