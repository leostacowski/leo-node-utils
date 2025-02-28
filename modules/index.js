'use strict'

const { Ticker } = require('./ticker')
const { Logger } = require('./logger')

module.exports = {
  Ticker,
  Logger,
}

const logger = new Logger('test')

logger.log('Hello World!')
logger.space()
logger.info('Hello World!')
logger.space('-')
logger.success('Hello World!')
logger.space('-', 10)
logger.error('Hello World!')
logger.space('+')
logger.warn('Hello World!')
