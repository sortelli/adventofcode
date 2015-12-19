'use strict'

import _ from 'lodash'

let floors = function(instructions) {
  return instructions.split('')
    .reduce((floors, instruction) => {
      return floors.concat(_.last(floors) + (instruction == '(' ? 1 : -1))
    }, [0])
}

export let part1 = (instructions) => floors(instructions).pop()
export let part2 = (instructions) => floors(instructions).indexOf(-1)
