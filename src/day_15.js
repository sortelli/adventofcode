'use strict'

import _ from 'lodash'

let parse_ingredients = (input) => {
  return _.map(input.split("\n"), (line) => {
    let name = line.substring(0, line.indexOf(':'))
    let [capacity, durability, flavor, texture, calories] =
      _.map(line.match(/(-?\d+)/g), (n) => parseInt(n, 10))

    return {name, capacity, durability, flavor, texture, calories}
  })
}

export let all_recipes = (width, count) => {
  if (width == 1)
    return [[count]]

  let is_new_recipe = (() => {
    let seen = new Set()

    return (recipe) => {
      let key = recipe.join(',')

      if (seen.has(key))
        return false

      seen.add(key)
      return true
    }
  })()

  let new_recipes = []

  all_recipes(width - 1, count).forEach((recipe) => {
    _.times(count + 1, (i) => {
      _.times(recipe.length, (j) => {
        if (recipe[j] - i >= 0) {
          let tmp = recipe.slice(0)
          tmp[j] = tmp[j] - i
          let new_recipe = [i].concat(tmp)
          if (is_new_recipe(new_recipe))
            new_recipes.push(new_recipe)
        }
      })
    })
  })

  return new_recipes
}

export let part1 = (input) => {
  let ingredients = parse_ingredients(input)
  let recipes     = all_recipes(ingredients.length, 100)
  let params      = ['capacity', 'durability', 'flavor', 'texture']

  return _.reduce(recipes, (max_score, recipe) => {
    let score = _.zip(..._.map(recipe, (count, index) => {
      let ingredient = ingredients[index]
      return _.map(params, (param) => ingredient[param] * count)
    }))
    .map((totals) => _.reduce(totals, (sum, total) => sum + total))
    .map((total) => total < 0 ? 0 : total)
    .reduce((product, total) => product * total)

    return max_score > score ? max_score : score
  }, 0)
}
