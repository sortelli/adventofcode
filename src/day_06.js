'use strict'

import _ from 'lodash'

let size = 1000

let index_at_point = (x, y) => x * size + y

let parse_command = (action) => {
  return (command) => {
    let m = command.match(/(turn on|turn off|toggle)\s+(\d+),(\d+)\s+through\s+(\d+),(\d+)/)

    if (!m)
      throw new Error('Could not parse command: ' + command)

    return {
      action:  action(m[1]),
      point_a: [parseInt(m[2], 10), parseInt(m[3], 10)],
      point_b: [parseInt(m[4], 10), parseInt(m[5], 10)]
    }
  }
}

let corner = (a, b, comparator) => [comparator([a[0], b[0]]), comparator([a[1], b[1]])]

let perform_command = (lights, command) => {
  let lower_left  = corner(command.point_a, command.point_b, _.min)
  let upper_right = corner(command.point_a, command.point_b, _.max)

  lights = lights.slice(0)

  for (let x = lower_left[0]; x <= upper_right[0]; ++x) {
    for (let y = lower_left[1]; y <= upper_right[1]; ++y) {
      let i = index_at_point(x, y)
      lights[i] = command.action(lights[i])
    }
  }

  return lights
}

let count_lights = (commands, actions) => {
  return commands.split("\n")
    .map(parse_command(actions))
    .reduce(perform_command, [])
    .reduce((sum, count) => sum + count)
}

export let part1 = (commands) => {
  return count_lights(commands, (name) => {
    switch (name) {
      case 'turn on':  return () => 1
      case 'turn off': return () => 0
      default:         return (light) => (light || 0) == 0 ? 1 : 0
    }
  })
}

export let part2 = (commands) => {
  return count_lights(commands, (name) => {
    switch (name) {
      case 'turn on':  return (light) => (light || 0) + 1
      case 'turn off': return (light) => { let l = (light || 0) - 1; return l < 0 ? 0 : l}
      default:         return (light) => (light || 0) + 2
    }
  })
}
