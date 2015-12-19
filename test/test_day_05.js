'use strict'

import util       from 'util'
import { expect } from 'chai'
import * as day05 from '../src/day_05'

describe('Day 05', function() {
  describe('Part 1', function() {
    [
      {input: 'ugknbfddgicrmopn',                        output: 1},
      {input: 'aaa',                                     output: 1},
      {input: 'jchzalrnumimnmhp',                        output: 0},
      {input: "aaa\njchzalrnumimnmhp",                   output: 1},
      {input: "haegwjzuvuyypxyu\naaa\naaa",              output: 2},
      {input: "ugknbfddgicrmopn\ndvszwmarrgswjxmb\naaa", output: 2}
    ].forEach(({input: input, output: output}) => {
      it(`passes ${util.inspect(input)} => ${output}`, () => {
        expect(day05.part1(input)).to.equal(output)
      })
    })
  })
})
