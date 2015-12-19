'use strict'

import { expect } from 'chai'
import * as day04 from '../src/day_04'

describe('Day 04', function() {
  describe('Part 1', function() {
    this.timeout(10000);

    [
      {input: 'abcdef',  output:  609043},
      {input: 'pqrstuv', output: 1048970}
    ].forEach(({input: input, output: output}) => {
      it(`passes ${input} => ${output}`, () => {
        expect(day04.part1(input)).to.equal(output)
      })
    })
  })
})
