'use strict'

import { expect } from 'chai'
import * as day09 from '../src/day_09'

describe('Day 09', function() {
  describe('Part 1', function() {
    let inputs = [
      'London to Dublin = 464',
      'London to Belfast = 518',
      'Dublin to Belfast = 141'
   ]

    it(`Passes ${inputs.join(', ')}`, () => {
      expect(day09.part1(inputs.join("\n"))).to.equal(605)
    })
  })
})
