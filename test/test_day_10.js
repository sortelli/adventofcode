'use strict'

import { expect } from 'chai'
import * as sinon from 'sinon'
import * as day10 from '../src/day_10'

describe('Day 10', function() {
  describe('Part 1 & 2', function() {
    [
      {input:      '1', output:     '11'},
      {input:     '11', output:     '21'},
      {input:     '21', output:   '1211'},
      {input:   '1211', output: '111221'},
      {input: '111221', output: '312211'}
    ].forEach(({input: input, output: output}, index) => {
      it(`passes ${input} => ${output}`, () => {
        expect(day10.look_and_say(input)).to.equal(output)
        expect(day10.part1('1', index + 1)).to.equal(output.length)
        expect(day10.part2('1', index + 1)).to.equal(output.length)
      })
    })

    it('has correct default arguments', () => {
      let stub = sinon.stub(day10.internals, 'look_and_say_n').returns([1,2,3])
      try {
        expect(day10.part1('foobar')).to.equal(3)
        expect(stub.calledOnce).to.be.true
        expect(stub.calledWith('foobar', 40)).to.be.true
        stub.reset()
        expect(day10.part2('foobar')).to.equal(3)
        expect(stub.calledOnce).to.be.true
        expect(stub.calledWith('foobar', 50)).to.be.true
      } finally {
        stub.restore()
      }
    })
  })
})
