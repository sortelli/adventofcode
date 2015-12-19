'use strict'

let point_key = ([x, y]) => `(${x},${y})`

let next_point = ([x, y], direction) => {
  switch (direction) {
    case '^': return [x, y + 1]
    case '>': return [x + 1, y]
    case 'v': return [x, y - 1]
    case '<': return [x - 1, y]
  }

  throw new Error(`Unknown direction: ${direction}`)
}

let visit = (houses, direction) => {
  let next = next_point(houses.current, direction)

  return {
    current: next,
    visited: houses.visited.concat([point_key(next)])
  }
}

export let part1 = function(directions) {
  let start  = [0, 0]
  let houses = {
    current: start,
    visited: [point_key(start)]
  }

  return new Set(directions.split('').reduce(visit, houses).visited).size
}

export let part2 = () => null
