'use strict'

import { expect } from 'chai'
import * as day08 from '../src/day_08'

describe('Day 08', function() {
  describe('Part 1', function() {
    let inputs = [
      '""',
      '"abc"',
      '"aaa\\"aaa"',
      '\"\\x27\"'
    ]

    it(`Passes ${inputs.join(', ')}`, () => {
      expect(day08.part1(inputs.join("\n"))).to.equal(12)
    })
  })

  describe('Part 2', function() {
    let inputs = [
      '""',
      '"abc"',
      '"aaa\\"aaa"',
      '\"\\x27\"'
    ]

    it(`Passes ${inputs.join(', ')}`, () => {
      expect(day08.part2(inputs.join("\n"))).to.equal(19)
    })
  })
})
