'use strict'

import { expect } from 'chai'
import * as day19 from '../src/day_19'

describe('Day 19', function() {
  let input = [
    'e => H',
    'e => O',
    'H => HO',
    'H => OH',
    'O => HH',
    '',
    'HOH'
  ].join("\n")

  describe('Part 1', function() {
    it('passes sample input', () => {
      expect(day19.part1(input)).to.equal(4)
      expect(day19.part1(`${input}OHO`)).to.equal(7)
      expect(day19.part1("Ha => Ho\na => o\n\nHa")).to.equal(1)
    })
  })

  describe('Part 2', function() {
    it('passes sample input', () => {
      expect(day19.part2(input)).to.equal(3)
      expect(day19.part2(`${input}OHO`)).to.equal(6)
    })
  })
})
