'use strict'

let floors = function(instructions) {
  return instructions.split('')
    .reduce((floors, instruction) => {
      return floors.concat(floors[floors.length - 1] + (instruction == '(' ? 1 : -1))
    }, [0])
}

export let part1 = function(instructions) {
  return floors(instructions).pop()
}

export let part2 = function(instructions) {
  return floors(instructions).indexOf(-1)
}
