function LCS(x, y) {
  const re1 = CS(x, y)
  const re2 = CS(y, x)
  return (re1.length >= re2.length) ? re1 : re2
}

function CS(x, y, re = '') {
  if (!x || !y) return re

  const idx = x.indexOf(y[0])
  if (idx >= 0) {
    return CS(x.slice(idx + 1), y.slice(1), re.concat(y[0]))
  } else {
    return CS(x, y.slice(1), re)
  }
}

module.exports = LCS
