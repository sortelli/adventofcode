'use strict'

export let internals = {}

internals.presents = (house, multiplier = 10, stop_num = null) => {
  let out  = 0
  let sqrt = Math.floor(Math.sqrt(house))

  for (let rootA = 1; rootA <= sqrt; ++rootA) {
    if (house % rootA == 0) {
      let rootB = house / rootA

      if (!stop_num || rootB <= stop_num)
        out += rootA

      if ((!stop_num || rootA <= stop_num) && rootA != rootB)
        out += rootB
    }
  }

  return out * multiplier
}

let find_house = (input, multiplier, stop_num = null) => {
  let target = parseInt(input, 10)
  let house

  for (house = 1; internals.presents(house, multiplier, stop_num) < target; ++house);

  return house
}

export let part1 = (input               ) => find_house(input, 10)
export let part2 = (input, stop_num = 50) => find_house(input, 11, stop_num)
