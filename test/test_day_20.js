'use strict'

import { expect } from 'chai'
import * as day20 from '../src/day_20'

describe('Day 20', function() {
  let input = [
    {input: '10',  output: 1, house: 1},
    {input: '30',  output: 2, house: 2},
    {input: '40',  output: 3, house: 3},
    {input: '70',  output: 4, house: 4},
    {input: '60',  output: 4, house: 5},
    {input: '120', output: 6, house: 6},
    {input: '80',  output: 6, house: 7},
    {input: '150', output: 8, house: 8},
    {input: '130', output: 8, house: 9}
  ]

  describe('Part 1', function() {
    input.forEach(({input, output, house}) => {
      it(`presents(${house}) => ${input}`, () => {
        expect(day20.presents(house)).to.equal(parseInt(input, 10))
      })

      it(`passes ${input} => ${output}`, () => {
        expect(day20.part1(input)).to.equal(output)
      })
    })
  })
})
