'use strict'

import _ from 'lodash'
import { expect } from 'chai'
import * as day15 from '../src/day_15'

describe('Day 15', function() {
  let input = [
    'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8',
    'Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3'
  ].join("\n")

  describe('all_recipies()', function() {
    it('works with 3 types chose 4', () => {
      let recipes = day15.all_recipes(3, 4)
      expect(recipes.length).to.equal(15)
      expect(_.map(recipes, (recipe) => recipe.join(',')).sort()).to.deep.equal([
	"0,0,4", "0,1,3", "0,2,2", "0,3,1", "0,4,0", "1,0,3",
	"1,1,2", "1,2,1", "1,3,0", "2,0,2", "2,1,1", "2,2,0",
	"3,0,1", "3,1,0", "4,0,0"
      ])
    })
  })

  describe('Part 1', function() {
    it('passes sample input', () => {
      expect(day15.part1(input)).to.equal(62842880)
    })
  })

  describe('Part 2', function() {
    it('passes sample input', () => {
      expect(day15.part2(input)).to.equal(57600000)
    })
  })
})
