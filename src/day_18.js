'use strict'

import _ from 'lodash'

let parse_state = (input) => {
  return input
    .split("\n")
    .map((line) => line.split('').map((light) => light === '#'))
}

let copy_state = (state) => state.slice().map((lights) => lights.slice())

let on_neighbors = (state, x, y) => {
  return [
    [x - 1, y - 1], [x, y - 1], [x + 1, y - 1],
    [x - 1, y    ],             [x + 1, y    ],
    [x - 1, y + 1], [x, y + 1], [x + 1, y + 1]
  ].filter(([x, y]) => y >= 0 && y < state.length && x >= 0 && x < state[0].length)
   .filter(([x, y]) => state[y][x])
   .length
}

let next_state = (state) => {
  let next = copy_state(state)

  for (let y = 0; y < state.length; ++y) {
    for (let x = 0; x < state[0].length; ++x) {
      let neighbors = on_neighbors(state, x, y)
      if (state[y][x] && neighbors != 2 && neighbors != 3)
        next[y][x] = false
      if (!state[y][x] && neighbors == 3)
        next[y][x] = true
    }
  }

  return next
}

let state_override = (always_on) => {
  return (state) => {
    let new_state = copy_state(state)

    for (let y = 0; y < state.length; ++y) {
      for (let x = 0; x < state[0].length; ++x) {
        if (always_on(state, x, y))
          new_state[y][x] = true
      }
    }

    return new_state
  }
}

let count_lights = (input, steps, always_on) => {
  let override      = state_override(always_on)
  let initial_state = override(parse_state(input))
  let override_next = (state) => override(next_state(state))
  let final_state   = _.reduce(Array(steps), override_next, initial_state)

  return final_state
    .map((lights) => lights.filter(_.identity).length)
    .reduce((sum, count) => sum + count)
}

export let part1 = (input, steps = 100) => count_lights(input, steps, () => false)

export let part2 = (input, steps = 100) => count_lights(input, steps, (state, x, y) => {
  let h = state.length - 1
  let w = state[0].length - 1
  return (x == 0 && y == 0) || (x == 0 && y == h) ||
         (x == w && y == 0) || (x == w && y == h)
})
