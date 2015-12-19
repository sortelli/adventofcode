'use strict'

import { expect } from 'chai'
import * as day04 from '../src/day_04'
import sinon from 'sinon'

describe('Day 04', function() {
  it('Part 1', function() {
    let md5_stub = sinon.stub(day04.hasher, 'md5')
    md5_stub.withArgs('abcdef12').returns('00000xyz')
    md5_stub.returns('0xyz')
    expect(day04.part1('abcdef')).to.equal(12)
    expect(md5_stub.callCount).to.equal(12)
    md5_stub.restore()
  })

  it('Part 2', function() {
    let md5_stub = sinon.stub(day04.hasher, 'md5')
    md5_stub.withArgs('foo14').returns('000000xyz')
    md5_stub.returns('00000xyz')
    expect(day04.part2('foo')).to.equal(14)
    expect(md5_stub.callCount).to.equal(14)
    md5_stub.restore()
  })
})
