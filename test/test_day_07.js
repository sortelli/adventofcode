'use strict'

import _          from 'lodash'
import { expect } from 'chai'
import * as day07 from '../src/day_07'

describe('Day 07', function() {
  describe('Part 1', function() {
    let input, output

    before(() => {
      input = `123 -> x
               456 -> y
               789 -> z
               x AND y -> a
               x OR y -> e
               x LSHIFT 2 -> f
               y RSHIFT 2 -> g
               NOT x -> h
               NOT y -> i`

      output = day07.eval_circuit(input)
    }) 

    it("evalute_circuit() sample returns object", () => {
      expect(output).to.be.an('object')
    })

    _.forIn({
      a: 72,    e: 507,   f: 492, g: 114,
      h: 65412, i: 65079, x: 123, y: 456, z: 789
    }, (v, k) => {
      it(`evalute_circuit() sample returns ${k} -> ${v}`, () => {
        expect(output).to.have.property(k, v)
      })
    })

    it("part1() returns circuit 'a'", () => {
      expect(day07.part1(input)).to.equal(72)
    })
  })
})
