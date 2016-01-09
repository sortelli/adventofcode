'use strict'

import { expect } from 'chai'
import * as day20 from '../src/day_20'

describe('Day 20', function() {
  describe('Part 1', function() {
    [
      {input: '10',  output: 1, house: 1},
      {input: '30',  output: 2, house: 2},
      {input: '40',  output: 3, house: 3},
      {input: '70',  output: 4, house: 4},
      {input: '60',  output: 4, house: 5},
      {input: '120', output: 6, house: 6},
      {input: '80',  output: 6, house: 7},
      {input: '150', output: 8, house: 8},
      {input: '130', output: 8, house: 9}
    ].forEach(({input, output, house}) => {
      it(`presents(${house}) => ${input}`, () => {
        expect(day20.presents(house)).to.equal(parseInt(input, 10))
      })

      it(`passes ${input} => ${output}`, () => {
        expect(day20.part1(input)).to.equal(output)
      })
    })
  })

  describe('Part 2', function() {
    [
      {input: '11',  output: 1, house: 1},
      {input: '33',  output: 2, house: 2},
      {input: '33',  output: 2, house: 3},
      {input: '66',  output: 4, house: 4},
      {input: '55',  output: 4, house: 5},
      {input: '99',  output: 6, house: 6},
      {input: '77',  output: 6, house: 7},
      {input: '132', output: 8, house: 8},
      {input: '99',  output: 6, house: 9}
    ].forEach(({input, output, house}) => {
      it(`presents(${house}) => ${input}`, () => {
        expect(day20.presents(house, 2)).to.equal(parseInt(input, 10))
      })

      it(`passes ${input} => ${output}`, () => {
        expect(day20.part2(input, 2)).to.equal(output)
      })
    })
  })
})
