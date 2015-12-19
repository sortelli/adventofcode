'use strict'

import util from 'util'
import _    from 'lodash'

let total = function(dimensions, feet_to_order) {
  return dimensions
    .split("\n")
    .map(line => line.split('x').map(s => parseInt(s, 10)))
    .map(feet_to_order)
    .reduce((sum, size) => sum + size)
}

export let part1 = function(dimensions) {
  return total(dimensions, ([l, w, h]) => {
    return 2 * l * w + 2 * w * h + 2 * l * h + _.min([l * w, w * h, l * h])
  })
}

export let part2 = function(dimensions) {
  return total(dimensions, ([l, w, h]) => {
    return _.min([2 * (l + w), 2 * (w + h), 2 * (l + h)]) + (l * w * h)
  })
}
