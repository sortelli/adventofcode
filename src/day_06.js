'use strict'

import _ from 'lodash'

let size = 1000

let index_at_point = (x, y) => x * size + y

let action = (name) => {
  switch (name) {
    case 'turn on':
       return () => true
    case 'turn off':
       return () => false
    default:
       return (light) => !light
  }
}

let parse_command = (command) => {
  let m = command.match(/(turn on|turn off|toggle)\s+(\d+),(\d+)\s+through\s+(\d+),(\d+)/)

  if (!m)
    throw new Error('Could not parse command: ' + command)

  return {
    action:  action(m[1]),
    point_a: [parseInt(m[2], 10), parseInt(m[3], 10)],
    point_b: [parseInt(m[4], 10), parseInt(m[5], 10)]
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

export let part1 = (commands) => {
  return commands.split("\n").map(parse_command).reduce(perform_command, []).filter((x) => !!x).length
}
