'use strict'

let increment_string = (string) => {
  return ((parseInt(string, 36) + 1).toString(36)).replace(/[01]/g, 'a')
}

let increasing_straights_regex = (() => {
  let straights = []

  for (let s = 'abc'; s != 'yzaa'; s = s.substring(1) + increment_string(s.substring(2)))
    straights.push(s)

  return new RegExp(straights.join('|'))
})()

export let valid_password = (password) => {
  return !!(!password.match(/[iol]/) &&
            password.match(increasing_straights_regex) &&
            [...new Set(password.match(/(.)\1/g))].length > 1)
}

export let part1 = (password) => {
  while (true) {
    password = increment_string(password)
    if (valid_password(password))
      return password
  }
}

export let part2 = (password) => part1(part1(password))
