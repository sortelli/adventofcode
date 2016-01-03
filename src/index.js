'use strict'

import fs from 'fs'
import _  from 'lodash'

let day_name = (n) => 'day_' + _.padLeft(n, 2, '0')

let days = _.compact(_.times(25, (i) => {
  try {
    return require('./' + day_name(i))
  } catch (e) {
  }
}))

let get_input = function(file) {
  return fs.readFileSync(`${__dirname}/../data/${file}`, {encoding: 'utf-8'}).trim()
}

let run_day = (day_num) => {
  day_num = parseInt(day_num, 10)

  let input = get_input(`${day_name(day_num)}_input.txt`);

  ['part1', 'part2'].forEach((part) => {
    let day = days[day_num - 1]

    if (day && typeof day[part] == 'function')
      console.log(`Day ${day_name(day_num)} ${part}() = ${day[part](input)}`)
  })
}

let args = process.argv.length > 2 ? process.argv.slice(2) : days.map((d, n) => n + 1)

args.forEach((day_num) => {
  run_day(day_num)
})
