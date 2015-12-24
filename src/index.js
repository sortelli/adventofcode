'use strict'

import fs from 'fs'
import _  from 'lodash'

import * as day_01 from './day_01'
import * as day_02 from './day_02'
import * as day_03 from './day_03'
import * as day_04 from './day_04'
import * as day_05 from './day_05'
import * as day_06 from './day_06'
import * as day_07 from './day_07'
import * as day_08 from './day_08'
import * as day_09 from './day_09'
import * as day_10 from './day_10'

let days = [
  day_01,
  day_02,
  day_03,
  day_04,
  day_05,
  day_06,
  day_07,
  day_08,
  day_09,
  day_10
]

let get_input = function(file) {
  return fs.readFileSync(`${__dirname}/../data/${file}`, {encoding: 'utf-8'}).trim()
}

let run_day = (day_num) => {
  day_num = parseInt(day_num, 10)

  let day_str = _.padLeft(day_num, 2, '0')
  let input   = get_input(`day_${day_str}_input.txt`);

  ['part1', 'part2'].forEach((part) => {
    let day = days[day_num - 1]

    if (day && typeof day[part] == 'function')
      console.log(`Day ${day_str} ${part}() = ${day[part](input)}`)
  })
}

let args = process.argv.length > 2 ? process.argv.slice(2) : days.map((d, n) => n + 1)

args.forEach((day_num) => {
  run_day(day_num)
})
