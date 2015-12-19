'use strict'

import { expect } from 'chai'
import * as day03 from '../src/day_03'

describe('Day 03', function() {
  describe('Part 1', function() {
    [
      {input: '>',          output: 2},
      {input: '^>v<',       output: 4},
      {input: '^v^v^v^v^v', output: 2}
    ].forEach(({input: input, output: output}) => {
      it(`passes ${input} => ${output}`, () => {
        expect(day03.part1(input)).to.equal(output)
      })
    })
  })
})
