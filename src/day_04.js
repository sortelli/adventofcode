'use strict'

import md5 from 'md5'

let find_md5_with_prefix = (secret, prefix) => {
  for (let n = 1; true; ++n) {
    if (md5(secret + n).startsWith(prefix))
      return n
  }
}

export let part1 = (secret) => find_md5_with_prefix(secret,  '00000')
export let part2 = (secret) => find_md5_with_prefix(secret, '000000')
