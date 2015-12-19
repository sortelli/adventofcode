'use strict'

export default function(instructions) {
  return instructions.split('')
    .reduce((floor, instruction) => {
      return floor + (instruction == '(' ? 1 : -1)
    }, 0)
}
