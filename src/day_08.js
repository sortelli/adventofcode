'use strict'

let size = (input, sizer) => input.map(sizer).reduce((sum, length) => sum + length)

export let part1 = (strings) => {
  let input   = strings.split("\n").map((s) => s.trim())
  let on_disk = size(input, (s) => s.length      )
  let in_mem  = size(input, (s) => eval(s).length)

  return on_disk - in_mem
}
