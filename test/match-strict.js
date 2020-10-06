const t = require('tap')
const compare = require('../')
const matchStrict = (t, a, b) => {
  const m = compare.matchStrict(a, b)
  t.matchSnapshot(m.diff)
  return m.match
}

t.ok(matchStrict(t, {a:1, b:2}, {a: 1}))
t.notOk(matchStrict(t, {a:1, b:2}, {b:'2'}))
