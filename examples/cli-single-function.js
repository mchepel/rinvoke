'use strict'

function sayHello (req, reply) {
  reply(null, 'hello!')
}

module.exports = sayHello
module.exports.procedure = 'hello'
