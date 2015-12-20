'use strict'

import util from 'util'

let parse_input = (strings) => strings.split("\n").map((s) => s.trim())

let size = (input, sizer) => input.map(sizer).reduce((sum, length) => sum + length)

export let part1 = (strings) => {
  let input   = parse_input(strings)
  let on_disk = size(input, (s) => s.length)
  let in_mem  = size(input, (s) => eval(s).length)

  return on_disk - in_mem
}

export let part2 = (strings) => {
  let input   = parse_input(strings)
  let on_disk = size(input, (s) => s.length)
  let encoded = size(input, (s) => s.replace(/[\\"]/g, '\\$&').length + 2)

  return encoded - on_disk
}
