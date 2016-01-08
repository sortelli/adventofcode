'use strict'

import { expect } from 'chai'
import * as day19 from '../src/day_19'

describe('Day 19', function() {
  let input = [
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
    })
  })
})
