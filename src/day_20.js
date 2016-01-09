'use strict'

export let presents = (house) => {
  let out  = 0
  let sqrt = Math.floor(Math.sqrt(house))

  for (let h = 1; h <= sqrt; ++h) {
    if (house % h == 0) {
      let root = house / h
      out += h + (root == h ? 0 : root)
    }
  }

  return out * 10
}

export let part1 = (input) => {
  let target = parseInt(input, 10)
  let house

  for (house = 1; presents(house) < target; ++house);

  return house
}

export let part2 = () => null
