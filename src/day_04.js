'use strict'

import md5 from 'md5'

export let part1 = (secret) => {
  for (let n = 1; true; ++n) {
    if (md5(secret + n).startsWith('00000'))
      return n
  }
}
