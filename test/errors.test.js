'use strict'

const t = require('tap')
const test = t.test
const Server = require('../lib/server')

test('server assertions', t => {
  t.plan(3)
  const server = Server()

  try {
    server.register(null, () => {})
    t.fail()
  } catch (e) {
    t.is(e.message, 'key must be a string')
  }

  try {
    server.register('', null)
    t.fail()
  } catch (e) {
    t.is(e.message, 'fn must be a function')
  }

  try {
    server.listen(null)
    t.fail()
  } catch (e) {
    t.is(e.message, 'port should be a number')
  }
})
