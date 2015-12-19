import { expect } from 'chai'
import day01      from '../src/day_01.js'

describe('Day 01', function() {
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
      expect(day01(input)).to.equal(output)
    })
  })
})
