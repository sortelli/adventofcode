'use strict'

import { expect } from 'chai'
import * as day03 from '../src/day_03'

describe('Day 03', function() {
  describe('Part 1', function() {
    it('fails on bad input', () => {
      expect(() => day03.part1('^X>')).to.throw('Unknown direction: X')
    });

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

  describe('Part 3', function() {
    it('fails on bad input', () => {
      expect(() => day03.part1('^X>')).to.throw('Unknown direction: X')
    });

    [
      {input: '^v',         output:  3},
      {input: '^>v<',       output:  3},
      {input: '^v^v^v^v^v', output: 11}
    ].forEach(({input: input, output: output}) => {
      it(`passes ${input} => ${output}`, () => {
        expect(day03.part2(input)).to.equal(output)
      })
    })
  })
})
