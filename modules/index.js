'use strict'

/**
 * LeoNodeUtils global module.
 * @module LeoNodeUtils
 */

const { createTicker } = require('./ticker')
const { createLogger } = require('./logger')

/**
 * LeoNodeUtils module exports.
 * @property {module:Ticker~createTicker} createTicker
 * @property {module:Logger~createLogger} createLogger
 */
module.exports = {
  createTicker,
  createLogger,
}
