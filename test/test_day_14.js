'use strict'

import { expect } from 'chai'
import * as day14 from '../src/day_14'

describe('Day 14', function() {
  describe('Part 1', function() {
    let input = [
      'Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.',
      'Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.'
    ].join("\n")

    it('passes sample input', () => {
      expect(day14.part1(input)).to.equal(1120)
    })
  })
})
