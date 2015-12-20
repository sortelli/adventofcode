'use strict'

import _ from 'lodash'

let once = (func) => {
  let value

  return () => {
    if (typeof(value) != 'undefined')
      return value

    return value = func()
  }
}

let read = function(wires, name) {
  if (name.match(/^\d+$/))
    return parseInt(name, 10)

  return wires[name]()
}

let parsers = [
  [/^(\w+)\s*->\s*(\w+)$/,                  (wires, a, b)    => wires[b] = once(() => read(wires, a)                            )],
  [/^NOT\s+(\w+)\s*->\s*(\w+)$/,            (wires, a, b)    => wires[b] = once(() => (65535 - read(wires, a))                  )],
  [/^(\w+)\s+AND\s+(\w+)\s*->\s*(\w+)$/,    (wires, a, b, c) => wires[c] = once(() => (read(wires, a) &  read(wires, b))        )],
  [/^(\w+)\s+OR\s+(\w+)\s*->\s*(\w+)$/,     (wires, a, b, c) => wires[c] = once(() => (read(wires, a) |  read(wires, b))        )],
  [/^(\w+)\s+LSHIFT\s+(\w+)\s*->\s*(\w+)$/, (wires, a, b, c) => wires[c] = once(() => (read(wires, a) << read(wires, b)) & 65535)],
  [/^(\w+)\s+RSHIFT\s+(\w+)\s*->\s*(\w+)$/, (wires, a, b, c) => wires[c] = once(() => (read(wires, a) >> read(wires, b))        )]
]

let set_wires = (wires, str) => {
  return ([regex, setter]) => {
    let match = str.match(regex)
    if (match)
      setter(wires, match[1], match[2], match[3])
    return match
  }
}

let parse_circuit = (wires, str) => {
  if (!_.some(parsers, set_wires(wires, str)))
    throw new Error('Unknown circuit: ' + str)
  return wires
}

let wire_circuit = (circuit) => circuit.split("\n").map((s) => s.trim()).reduce(parse_circuit, {})

export let eval_circuit = (circuit) => {
  return _.transform(wire_circuit(circuit) , (wires, value, key) => {
      wires[key] = value()
  })
}

export let part1 = (circuit) => eval_circuit(circuit).a

export let part2 = (circuit) => {
  let a     = part1(circuit)
  let wires = wire_circuit(circuit)
  wires['b'] = () => a
  return wires['a']()
}
