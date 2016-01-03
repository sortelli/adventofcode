'use strict'

import { expect } from 'chai'
import * as sinon from 'sinon'
import * as day14 from '../src/day_14'

describe('Day 14', function() {
  let input = [
    'Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.',
    'Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.'
  ].join("\n")

  describe('Part 1', function() {
    it('passes sample input', () => {
      expect(day14.part1(input, 1000)).to.equal(1120)
    })

    it('defaults to asking for 2503 seconds', () => {
      let race_stub = sinon.stub(day14.internals, 'race_reindeers').returns({distance: 3})
      try {
        expect(day14.part1(input)).to.equal(3)
        expect(race_stub.calledOnce).to.be.true
        expect(race_stub.calledWith(sinon.match.array, 2503)).to.be.true
      } finally {
        race_stub.restore()
      }
    })
  })

  describe('Part 2', function() {
    it('passes sample input', () => {
      expect(day14.part2(input, 1000)).to.equal(689)
    })
  })
})
