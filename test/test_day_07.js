'use strict'

import _          from 'lodash'
import { expect } from 'chai'
import * as day07 from '../src/day_07'

describe('Day 07', function() {
  describe('eval_circuit()', function() {
    it('simple input', () => {
      expect(day07.eval_circuit("456 -> x")).to.have.property('x', 456)
      expect(day07.eval_circuit("456 -> x\nx -> y")).to.have.property('y', 456)
      expect(day07.eval_circuit("NOT 456 -> x")).to.have.property('x', 65079)
      expect(day07.eval_circuit("123 -> x\nNOT x -> y")).to.have.property('y', 65412)
      expect(day07.eval_circuit("123->x\n456->y\nx AND y -> z")).to.have.property('z', 123 & 456)
      expect(day07.eval_circuit("123->x\n456->y\nx OR y -> z")).to.have.property('z', 123 | 456)
      expect(day07.eval_circuit("123->x\n2->y\nx LSHIFT y -> z")).to.have.property('z', 123 << 2)
      expect(day07.eval_circuit("65530->x\n2->y\nx LSHIFT y -> z")).to.have.property('z', 65512)
      expect(day07.eval_circuit("123->x\n2->y\nx RSHIFT y -> z")).to.have.property('z', 123 >> 2)
      expect(() => day07.eval_circuit("123 FOO x -> z")).to.throw(/Unknown circuit/)
    })
  })

  describe('Part 1', function() {
    let input, output

    before(() => {
      input = `123 -> x
               789 -> z
               x AND y -> a
               456 -> y
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

  describe('Part 2', function() {
    it('can rewire circuit', () => {
      let input = `123 -> c
                   456 -> b
                   b AND c -> d
                   NOT d -> a`

      expect(day07.part2(input)).to.equal(65484)
    })
  })
})
