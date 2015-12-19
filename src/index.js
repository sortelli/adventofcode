'use strict'

import fs         from 'fs'
import * as day01 from './day_01'
import * as day02 from './day_02'

let get_input = function(file) {
  return fs.readFileSync(`${__dirname}/../data/${file}`, {encoding: 'utf-8'}).trim()
}

let day_01_input = get_input('day_01_input.txt')
console.log(`Day 01 part 1 solution: ${day01.part1(day_01_input)}`)
console.log(`Day 01 part 2 solution: ${day01.part2(day_01_input)}`)

let day_02_input = get_input('day_02_input.txt')
console.log(`Day 02 part 1 solution: ${day02.part1(day_02_input)}`)
