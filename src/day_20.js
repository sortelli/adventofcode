'use strict'

export let presents = (house) => {
  let out = 0

  for (let h = house; h > 0; --h) {
    if (house % h == 0)
      out += 10 * h
  }

  return out
}

export let part1 = (input) => {
  let target = parseInt(input, 10)

  for (let house = 1; ; ++house) {
    let out = presents(house)

    if (out >= target)
      return house
  }
}
