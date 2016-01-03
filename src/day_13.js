'use strict'

import _     from 'lodash'
import perms from 'array-permutation'

let permutate_people = (people) => Array.from(perms.permutation(Array.from(people)))
let total_happiness  = (people, links) => {
  return _.reduce(people.slice(1).concat(people.slice(0, 1)), (prev, person) => {
    return {
      person: person,
      sum:    prev.sum + links[[person, prev.person]] + links[[prev.person, person]]
    }
  },
    {person: people.slice(0, 1), sum: 0}
  ).sum
}

let max_happiness = (input) => {
  let data = _.reduce(input.split("\n"), (data, line) => {
    let match = line.trim().match(/^(\w+) .* (gain|lose) (\d+) .* (\w+)\.$/)
    let happiness = (match[2] === 'gain' ? 1 : -1) * parseInt(match[3], 10)
    let [person, neighbor] = [match[1], match[4]]

    data.people.add(person)
    data.people.add(neighbor)
    data.links[[person, neighbor]] = happiness

    return data
  },
    {people: new Set(), links: {}}
  )

  return _.max(_.map(permutate_people(data.people), (people) => {
    return total_happiness(people, data.links)
  }))
}

export let part1 = (input) => max_happiness(input)
