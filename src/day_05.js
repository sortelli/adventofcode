'use strict'

let is_nice_string = (string) => {
  string = string.toLowerCase()

  return string.match(/[aeiou].*[aeiou].*[aeiou]/) &&
         string.match(/(.)\1/)                     &&
        !string.match(/(ab|cd|pq|xy)/)
}

export let part1 = (strings) => {
  return strings.split("\n").filter(is_nice_string).length
}
