'use strict'

import _ from 'lodash'

let parse_reindeers = (input) => {
  return _.map(input.split("\n"), (line) => {
    let match = line.match(/^(\w+) .* (\d+) .* (\d+) .* (\d+)/)
    let [name, speed, fly_time, sleep_time] = [
      match[1],
      parseInt(match[2], 10),
      parseInt(match[3], 10),
      parseInt(match[4], 10)
    ]

    return {
      name,
      speed,
      fly_time,
      sleep_time,
      state:    fly_time,
      distance: 0
    }
  })
}

let next_state = (reindeers) => {
  return _.map(reindeers, (reindeer) => {
    let new_state

    if (reindeer.state > -reindeer.sleep_time + 1)
      new_state = reindeer.state - 1
    else
      new_state = reindeer.fly_time

    return _.assign({}, reindeer, {
      state:    new_state,
      distance: reindeer.distance + (reindeer.state > 0 ? reindeer.speed : 0)
    })
  })
}

export let internals = {
  race_reindeers:  (initial_state, seconds) => {
    let state = _.reduce(Array(seconds), next_state, initial_state)
    let max   = _.max(_.pluck(state, 'distance'))
    return _.find(state, (reindeer) => reindeer.distance == max)
  }
}

export let part1 = (input, seconds = 2503) => {
  return internals.race_reindeers(parse_reindeers(input), seconds).distance
}
