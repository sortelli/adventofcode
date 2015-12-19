'use strict'

import util from 'util'
import _    from 'lodash'

export let part1 = function(dimensions) {
  return dimensions.split("\n").map((line) => line.split('x')).map(([l, w, h]) => {
    return 2*l*w + 2*w*h + 2*l*h + _.min([l*w, w*h, l*h])
  }).reduce((sum, size) => sum + size)
}
