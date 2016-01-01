'use strict'

import _ from 'lodash'

export let sum_numbers = (obj) => {
  if (typeof obj == 'object')
    return _.reduce(obj, (sum, value) => sum + sum_numbers(value), 0)
  else if (typeof obj == 'number')
    return obj
  else
    return 0
}

export let part1 = (json) => sum_numbers(JSON.parse(json))
