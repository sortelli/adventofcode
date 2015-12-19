'use strict'

import util       from 'util'
import { expect } from 'chai'
import * as day02 from '../src/day_02'

describe('Day 02', function() {
  describe('Part 1', function() {
    [
      {input: '2x3x4',         output:   58},
      {input: '1x1x10',        output:   43},
      {input: "2x3x4\n1x1x10", output:  101},
      {input: '3x4x2',         output:   58},
      {input: '1x10x1',        output:   43},
      {input: "3x4x2\n10x1x1", output:  101}
    ].forEach(({input: input, output: output}) => {
      it(`passes ${util.inspect(input)} => ${output}`, () => {
        expect(day02.part1(input)).to.equal(output)
      })
    })
  })
})
