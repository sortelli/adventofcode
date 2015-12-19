'use strict'

import { expect } from 'chai'
import * as day01 from '../src/day_01'

describe('Day 01', function() {
  describe('Part 1', function() {
    [
      {input: '(())',    output:  0},
      {input: '()()',    output:  0},
      {input: '(((',     output:  3},
      {input: '(()(()(', output:  3},
      {input: '))(((((', output:  3},
      {input: '())',     output: -1},
      {input: '))(',     output: -1},
      {input: ')))',     output: -3},
      {input: ')())())', output: -3}
    ].forEach(({input: input, output: output}) => {
      it(`passes ${input} => ${output}`, () => {
        expect(day01.part1(input)).to.equal(output)
      })
    })
  })

  describe('Part 2', function() {
    [
      {input: ')',     output:  1},
      {input: '()())', output:  5}
    ].forEach(({input: input, output: output}) => {
      it(`passes ${input} => ${output}`, () => {
        expect(day01.part2(input)).to.equal(output)
      })
    })
  })
})
