'use strict'

import { expect } from 'chai'
import * as day18 from '../src/day_18'

describe('Day 18', function() {
  let input = [
    '.#.#.#',
    '...##.',
    '#....#',
    '..#...',
    '#.#..#',
    '####..'
  ].join("\n")

  describe('Part 1', function() {
    it('passes sample input', () => {
      expect(day18.part1(input, 4)).to.equal(4)
      expect(day18.part1(input)).is.a('number')
    })
  })
})
