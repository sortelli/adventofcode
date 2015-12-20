'use strict'

import _         from 'lodash'
import perms     from 'array-permutation'
import each_cons from 'each-cons'

let key          = (city_a, city_b)                      => `${city_a},${city_b}`
let get_distance = (distances, city_a, city_b)           => distances[key(city_a, city_b)]
let put_distance = (distances, city_a, city_b, distance) => distances[key(city_a, city_b)] = distance

let parse_input = (input) => {
  return input
    .split("\n")
    .map((line) => line.trim())
    .reduce((city_graph, line) => {
      let match = line.match(/^(\w+)\s+to\s+(\w+)\s+=\s+(\d+)$/)
      if (match) {
        let distance = parseInt(match[3], 10)
        let city_a   = match[1]
        let city_b   = match[2]
        city_graph.cities.add(city_a)
        city_graph.cities.add(city_b)
        put_distance(city_graph.distances, city_a, city_b, distance)
        put_distance(city_graph.distances, city_b, city_a, distance)
      }
      return city_graph
    }, {cities: new Set(), distances: {}})
}

let permutate_cities = (cities) => Array.from(perms.permutation(Array.from(cities)))

export let part1 = (input) => {
  let city_graph = parse_input(input)
  let distances = permutate_cities(city_graph.cities).map((cities) => {
    return each_cons(cities, 2)
      .map(([city_a, city_b]) => get_distance(city_graph.distances, city_a, city_b))
      .reduce((sum, distance) => sum + distance, 0)
  })
  return _.min(distances)
}
