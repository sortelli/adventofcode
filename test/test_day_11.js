'use strict'

import { expect } from 'chai'
import * as day11 from '../src/day_11'

describe('Day 11', function() {
  describe('Part 1', function() {
    it('Passes simple input', () => {
      expect(day11.valid_password('hijklmmn')).to.be.false
      expect(day11.valid_password('abbceffg')).to.be.false
      expect(day11.valid_password('abbcegjk')).to.be.false
      expect(day11.valid_password('hijklmm')).to.be.false

      expect(day11.valid_password('abcdffaa')).to.be.true
      expect(day11.valid_password('ghjaabcc')).to.be.true

      expect(day11.part1('abcdefgh')).to.equal('abcdffaa')
      expect(day11.part1('ghjaaaaa')).to.equal('ghjaabcc')
    })
  })

  describe('Part 2', function() {
    this.timeout(10000)
    it('Calls part1 twice', () => {
      expect(day11.part2('aabbc')).to.equal('bbcdd')
    })
  })
})
