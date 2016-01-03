'use strict'

import { expect } from 'chai'
import * as day13 from '../src/day_13'

describe('Day 13', function() {
  let input = [
    'Alice would gain 54 happiness units by sitting next to Bob.',
    'Alice would lose 79 happiness units by sitting next to Carol.',
    'Alice would lose 2 happiness units by sitting next to David.',
    'Bob would gain 83 happiness units by sitting next to Alice.',
    'Bob would lose 7 happiness units by sitting next to Carol.',
    'Bob would lose 63 happiness units by sitting next to David.',
    'Carol would lose 62 happiness units by sitting next to Alice.',
    'Carol would gain 60 happiness units by sitting next to Bob.',
    'Carol would gain 55 happiness units by sitting next to David.',
    'David would gain 46 happiness units by sitting next to Alice.',
    'David would lose 7 happiness units by sitting next to Bob.',
    'David would gain 41 happiness units by sitting next to Carol.'
  ].join("\n")

  describe('Part 1', function() {
    it('passes sample input', () => {
      expect(day13.part1(input)).to.equal(330)
    })
  })

  describe('Part 2', function() {
    it('passes sample input', () => {
      expect(day13.part2(input)).to.equal(286)
    })
  })
})
