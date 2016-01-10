'use strict'

import { expect } from 'chai'
import * as day21 from '../src/day_21'

describe('Day 21', function() {
  describe('Part 1', function() {
    let input = "Hit Points: 12\nDamage: 7\nArmor: 2\n"

    it('returns a number', () => {
      expect(day21.part1(input)).is.a('number')
    })

    it('passes sample input', () => {
      let shop = {
        weapons: [
          {damage: 1,   armor: 0, cost: 1   },
          {damage: 4,   armor: 0, cost: 10  },
          {damage: 100, armor: 0, cost: 1000}
        ],
        armor: [
          {damage: 0, armor: 1,   cost: 1   },
          {damage: 0, armor: 4,   cost: 10  },
          {damage: 0, armor: 100, cost: 1000}
        ],
        rings: [
          {damage: -1,  armor: 0,   cost: 1   },
          {damage: 0,   armor: -1,  cost: 1   },
          {damage: 1,   armor: 0,   cost: 10  },
          {damage: 0,   armor: 1,   cost: 10  },
          {damage: 100, armor: 0,   cost: 1000},
          {damage: 0,   armor: 100, cost: 1000}
        ]
      }

      expect(day21.part1(input, 8, shop)).to.equal(40)
    })

    it('player_will_win() passes sample input', () => {
      expect(day21.player_will_win({
        player: {hit_points:  8, armor: 5, damage: 5},
        boss:   {hit_points: 12, armor: 2, damage: 7}
      })).to.be.true

      expect(day21.player_will_win({
        player: {hit_points:  6, armor: 5, damage: 5},
        boss:   {hit_points: 12, armor: 9, damage: 7}
      })).to.be.false
    })
  })
})
