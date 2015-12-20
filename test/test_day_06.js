'use strict'

import util       from 'util'
import { expect } from 'chai'
import * as day06 from '../src/day_06'

describe('Day 06', function() {
  describe('Part 1', function() {
     let a = 'turn on 0,0 through 999,999';
     let b = 'toggle 0,0 through 999,0';
     let c = 'turn off 499,499 through 500,500';
     let d = 'turn on 500,500 through 499,499';

    [
      {input: a,                  output: 1000000       },
      {input: b,                  output: 1000          },
      {input: `${a}\n${b}`,       output: 1000000 - 1000},
      {input: c,                  output: 0             },
      {input: d,                  output: 4             },
      {input: `${a}\n${c}`,       output: 1000000 - 4   },
      {input: `${a}\n${c}\n${d}`, output: 1000000       }
    ].forEach(({input: input, output: output}) => {
      it(`passes ${util.inspect(input)} => ${output}`, () => {
        expect(day06.part1(input)).to.equal(output)
      })
    })
  })
})
