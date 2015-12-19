'use strict'

import fs         from 'fs'
import * as day01 from './day_01'
import * as day02 from './day_02'
import * as day03 from './day_03'
import * as day04 from './day_04'

let get_input = function(file) {
  return fs.readFileSync(`${__dirname}/../data/${file}`, {encoding: 'utf-8'}).trim()
}

let day_01_input = get_input('day_01_input.txt')
console.log(`Day 01 part 1 solution: ${day01.part1(day_01_input)}`)
console.log(`Day 01 part 2 solution: ${day01.part2(day_01_input)}`)

let day_02_input = get_input('day_02_input.txt')
console.log(`Day 02 part 1 solution: ${day02.part1(day_02_input)}`)
console.log(`Day 02 part 2 solution: ${day02.part2(day_02_input)}`)

let day_03_input = get_input('day_03_input.txt')
console.log(`Day 03 part 1 solution: ${day03.part1(day_03_input)}`)
console.log(`Day 03 part 2 solution: ${day03.part2(day_03_input)}`)

let day_04_input = get_input('day_04_input.txt')
console.log(`Day 04 part 1 solution: ${day04.part1(day_04_input)}`)
