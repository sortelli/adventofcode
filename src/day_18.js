'use strict'

import _ from 'lodash'

let parse_grid = (input) => {
  return input
    .split("\n")
    .map((line) => line.split('').map((light) => light === '#'))
}

let on_neighbors = (grid, x, y) => {
  return [
    [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
    [x - 1, y    ],             [x + 1, y    ],
    [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
  ].filter(([x, y]) => y >= 0 && y < grid.length && x >= 0 && x < grid[0].length)
   .filter(([x, y]) => grid[y][x])
   .length
}

let next_state = (grid) => {
  let next = grid.slice().map((lights) => lights.slice())

  for (let y = 0; y < grid.length; ++y) {
    for (let x = 0; x < grid[0].length; ++x) {
      let neighbors = on_neighbors(grid, x, y)
      if (grid[y][x] && neighbors != 2 && neighbors != 3)
        next[y][x] = false
      if (!grid[y][x] && neighbors == 3)
        next[y][x] = true
    }
  }

  return next
}

export let part1 = (input, steps = 100) => {
  let initial = parse_grid(input)
  let state   = _.reduce(Array(steps), next_state, initial)

  return state
    .map((lights) => lights.filter(_.identity).length)
    .reduce((sum, count) => sum + count)
}

export let part2 = () => null
