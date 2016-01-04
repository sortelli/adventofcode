'use strict'

import { expect } from 'chai'
import * as day15 from '../src/day_15'

describe('Day 15', function() {
  let input = [
    'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8',
    'Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3'
  ].join("\n")

  describe('Part 1', function() {
    it('passes sample input', () => {
      expect(day15.part1(input)).to.equal(62842880)
    })
  })
})
