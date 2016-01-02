'use strict'

import _ from 'lodash'

export let sum_numbers = (obj, skip_obj = () => false) => {
  if (typeof obj == 'object')
    if (skip_obj(obj))
      return 0
    else
      return _.reduce(obj, (sum, value) => sum + sum_numbers(value, skip_obj), 0)
  else if (typeof obj == 'number')
    return obj
  else
    return 0
}

export let part1 = (json) => sum_numbers(JSON.parse(json))

export let part2 = (json) => sum_numbers(JSON.parse(json), (obj) => {
  return !(obj instanceof Array) && _.includes(_.values(obj), 'red')
})
