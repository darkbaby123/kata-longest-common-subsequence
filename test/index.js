const LCS = require('../lib/index')

describe('LCS', () => {
  function testCase(x, y, re, focus = false) {
    const text = `${x} and ${y}`
    const fn = () => {
      expect(LCS(x, y)).toEqual(re)
    }
    focus ? it(text, fn) : it.only(text, fn)
  }

  testCase('a', 'b', '')
  testCase('a', 'a', 'a')
  testCase('abcdef', 'ace', 'ace')
  testCase('abcdef', 'abc', 'abc')
  testCase('anothertest', 'notatest', 'nottest')
  testCase('132535365', '123456789', '12356')
  testCase('finaltest', 'zzzfinallyzzz', 'final')
})
