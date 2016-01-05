'use strict'

import { expect } from 'chai'
import * as day16 from '../src/day_16'

describe('Day 16', function() {
  let input = [
    'Sue 1: goldfish: 6, trees: 9, akitas: 0',
    'Sue 2: goldfish: 7, trees: 1, akitas: 0',
    'Sue 3: cars: 10, akitas: 6, perfumes: 7'
  ].join("\n")

  describe('parse_aunts()', function() {
    it('parses input', () => {
      expect(day16.parse_aunts(input)).to.deep.equal([
        {goldfish: 6, trees: 9, akitas: 0},
        {goldfish: 7, trees: 1, akitas: 0},
        {cars: 10, akitas: 6, perfumes: 7}
      ])
    })
  })

  describe('Part 1', function() {
    it('returns an int', () => {
      expect(day16.part1(input)).to.be.a('number')
    })
  })
})
