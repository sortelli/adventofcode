'use strict'

import { expect } from 'chai'
import * as day12 from '../src/day_12'

describe('Day 12', function() {
  describe('Part 1', function() {
    [
      {input: '[1,2,3]',              output: 6},
      {input: '{"a":2,"b":4}',        output: 6},
      {input: '[[[3]]]',              output: 3},
      {input: '{"a":{"b":4},"c":-1}', output: 3},
      {input: '{"a":[-1,1]}',         output: 0},
      {input: '[-1,{"a":1}]',         output: 0},
      {input: '[]',                   output: 0},
      {input: '{}',                   output: 0}
    ].forEach(({input: input, output: output}) => {
      it(`passes ${input} => ${output}`, () => {
        expect(day12.part1(input)).to.equal(output)
      })
    })
  })
})
