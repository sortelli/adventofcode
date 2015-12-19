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

let count_houses = (directions, starting_points) => {
  let houses = directions.split('').reduce((houses, direction) => {
    let curr = houses.posistions[0]
    let next = next_point(curr, direction)

    return {
      posistions: houses.posistions.slice(1).concat([next]),
      visited:    houses.visited.concat([point_key(next)])
    }
  }, {
    posistions: starting_points,
    visited:    starting_points.map((point) => point_key(point))
  })

  return new Set(houses.visited).size
}

export let part1 = (directions) => count_houses(directions, [[0, 0]])
export let part2 = (directions) => count_houses(directions, [[0, 0], [0, 0]])
