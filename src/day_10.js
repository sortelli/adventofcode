'use strict'

export let look_and_say = (str) => {
  let data = str.split('').splice(1).reduce((data, chr) => {
    if (chr == data.last) {
      data.count++
    } else {
      data.output.push(data.count + data.last)
      data.count = 1
      data.last  = chr
    }

    return data
  }, {last: str.substring(0, 1), count: 1, output: []})

  data.output.push(data.count + data.last)

  return data.output.join('')
}

export let internals = {
  look_and_say_n: (str, count) => {
    if (count == 1)
      return look_and_say(str)

    return internals.look_and_say_n(look_and_say(str), count - 1)
  }
}

export let part1 = (str, count = 40) => internals.look_and_say_n(str, count).length
export let part2 = (str, count = 50) => part1(str, count)
