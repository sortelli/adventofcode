'use strict'

import { expect } from 'chai'
import * as day12 from '../src/day_12'

describe('Day 12', function() {
  describe('sum_numbers()', () => {
    it('Works with undefined', () => {
      expect(day12.sum_numbers(void 0)).to.equal(0)
    })
  })

  describe('Part 1', function() {
    [
      {input: '[1,2,3]',                   output: 6},
      {input: '{"a":2,"b":4}',             output: 6},
      {input: '[[[3]]]',                   output: 3},
      {input: '{"a":{"b":4},"c":-1}',      output: 3},
      {input: '{"a":[-1,1]}',              output: 0},
      {input: '[-1,{"a":1}]',              output: 0},
      {input: '[]',                        output: 0},
      {input: '{}',                        output: 0},
      {input: '{"a": "b", "c": {"d": 5}}', output: 5}
    ].forEach(({input: input, output: output}) => {
      it(`passes ${input} => ${output}`, () => {
        expect(day12.part1(input)).to.equal(output)
      })
    })
  })

  describe('Part 2', function() {
    [
      {input: '[1,2,3]',                         output: 6},
      {input: '[1,{"c":"red","b":2},3]',         output: 4},
      {input: '{"d":"red","e":[1,2,3,4],"f":5}', output: 0},
      {input: '[1,"red",5]',                     output: 6}
    ].forEach(({input: input, output: output}) => {
      it(`passes ${input} => ${output}`, () => {
        expect(day12.part2(input)).to.equal(output)
      })
    })
  })
})
