import fs    from 'fs'
import day01 from './day_01'

let get_input = function(file) {
  return fs.readFileSync(`${__dirname}/../data/${file}`, {encoding: 'utf-8'}).trim()
}

console.log(`Day 01 solution: ${day01(get_input('day_01_input.txt'))}`)
