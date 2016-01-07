'use strict'

import { expect } from 'chai'
import * as day17 from '../src/day_17'

describe('Day 17', function() {
  let input = ['20', '15', '10', '5', '5'].join("\n")

  describe('Part 1', function() {
    it('passes sample input', () => {
      expect(day17.part1(input, 25)).to.equal(4)
      expect(day17.part1(input)).to.equal(0)
    })
  })

  describe('Part 2', function() {
    it('passes sample input', () => {
      expect(day17.part2(input, 25)).to.equal(3)
    })
  })
})
