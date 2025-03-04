'use strict'

/**
 * Logger module.
 * @module Logger
 */

/**
 * LOG Event name.
 *  @readonly
 *  @constant {String} LOG_EVENT='log'
 */
const LOG_EVENT = 'log'

/**
 * INFO Event name.
 *  @readonly
 *  @constant {String} INFO_EVENT='info'
 */
const INFO_EVENT = 'info'

/**
 * SUCCESS Event name.
 *  @readonly
 *  @constant {String} SUCCESS_EVENT='success'
 */
const SUCCESS_EVENT = 'success'

/**
 * ERROR Event name.
 *  @readonly
 *  @constant {String} ERROR_EVENT='error'
 */
const ERROR_EVENT = 'error'

/**
 * WARN Event name.
 *  @readonly
 *  @constant {String} WARN_EVENT='warn'
 */
const WARN_EVENT = 'warn'

/**
 * Current process PID.
 *  @readonly
 *  @constant {String} PROCESS_PID=process.pid
 */
const PROCESS_PID = process.pid

/**
 * Function that creates a new Logger instance.
 * @param {String} [loggerId=''] - The ID of the Logger instance.
 * @example
 * // Creates a new Logger instance.
 * const logger = createLogger();
 * @example
 * // Creates a new Logger instance with an ID of "Logger".
 * const logger = createLogger('Logger');
 */
const createLogger = (loggerId = '') => {
  if (loggerId && typeof loggerId !== 'string')
    throw new Error('The logger ID, if provided, must be a string.')

  /**
   * The current Logger ID.
   * @private
   * @readonly
   * @property {String}
   */
  const id = loggerId || ''

  /**
   * Given a type, returns a console color. Otherwhise returns a "reset" color code.
   * @private
   * @param {String|undefined} [type]
   * @returns {String} The console color.
   */
  const getLogColor = (type) => {
    switch (type) {
      case LOG_EVENT:
        return '\x1b[90m'
      case INFO_EVENT:
        return '\x1b[36m'
      case SUCCESS_EVENT:
        return '\x1b[32m'
      case ERROR_EVENT:
        return '\x1b[31m'
      case WARN_EVENT:
        return '\x1b[33m'
      default:
        return '\x1b[0m'
    }
  }

  /**
   * Given a content, returns a formatted message.
   * @private
   * @param {Object} messageContent
   * @param {String|undefined} [messageContent.identifier] - The content to be formatted.
   * @param {*} messageContent.content - The content to be formatted.
   * @param {String} messageContent.type - The type of the content to be formatted.
   * @returns {String} The formatted message.
   */
  const getFormattedMessage = (data = { identifier: '', content: '', type: '' }) => {
    const { identifier, content, type } = data
    let targetContent = content

    if (typeof content !== 'string') targetContent = JSON.stringify(content)

    const color = getLogColor(type)
    const resetColor = getLogColor()
    const loggerId = id?.length ? ` @${id}` : ''
    const contentId = identifier?.length ? `.${identifier}` : ''

    return `${color}<${PROCESS_PID}> [${type.toUpperCase()}]${loggerId}${contentId}:${resetColor}\n${targetContent}`
  }

  /**
   * Given an array of content, returns a formatted ([id = '', messageContent = *]) version of it.
   * @private
   * @param {Array<*>} arrayData
   * @returns {Object} The formatted version of the array.
   */
  const getContentFromArray = (arrayData = []) => {
    if (arrayData?.length > 1) {
      const [identifier, ...content] = arrayData

      if (identifier && typeof identifier === 'string') {
        return {
          identifier,
          messageContent: content.join('\n'),
        }
      }
    }

    return {
      messageContent: arrayData.join('\n'),
    }
  }

  /**
   * Given a content, emits a log message to the console.
   * @param {...*} rawContent - The content to be emitted.
   * @returns {String} The formatted message.
   * @example
   * // Emmits a formatted message to the console.
   * logger.log('Hello World!');
   * // Outputs:
   * // '<PID> [LOG] @LOGGER_ID:\nHello World!'
   * @example
   * // Emmits a formatted message to the console with an identifier.
   * logger.log('myLogIdentifier', 'Hello World!');
   * // Outputs:
   * // '<PID> [LOG] @LOGGER_ID.myLogIdentifier:\nHello World!'
   */
  const log = (...rawContent) => {
    const { identifier, messageContent } = getContentFromArray(rawContent)

    const message = getFormattedMessage({
      identifier,
      content: messageContent,
      type: LOG_EVENT,
    })

    console.log(message)

    return message
  }

  /**
   * Given a content, emits a info message to the console.
   * @param {...*} rawContent - The content to be emitted.
   * @returns {String} The formatted message.
   * @example
   * // Emmits a formatted message to the console.
   * logger.info('Hello World!');
   * // Outputs:
   * // '<PID> [INFO] @LOGGER_ID:\nHello World!'
   * @example
   * // Emmits a formatted message to the console with an identifier.
   * logger.info('myLogIdentifier', 'Hello World!');
   * // Outputs:
   * // '<PID> [INFO] @LOGGER_ID.myLogIdentifier:\nHello World!'
   */
  const info = (...rawContent) => {
    const { identifier, messageContent } = getContentFromArray(rawContent)

    const message = getFormattedMessage({
      identifier,
      content: messageContent,
      type: INFO_EVENT,
    })

    console.info(message)

    return message
  }

  /**
   * Given a content, emits a success message to the console.
   * @param {...*} rawContent - The content to be emitted.
   * @returns {String} The formatted message.
   * @example
   * // Emmits a formatted message to the console.
   * logger.success('Hello World!');
   * // Outputs:
   * // '<PID> [SUCCESS] @LOGGER_ID:\nHello World!'
   * @example
   * // Emmits a formatted message to the console with an identifier.
   * logger.success('myLogIdentifier', 'Hello World!');
   * // Outputs:
   * // '<PID> [SUCCESS] @LOGGER_ID.myLogIdentifier:\nHello World!'
   */
  const success = (...rawContent) => {
    const { identifier, messageContent } = getContentFromArray(rawContent)

    const message = getFormattedMessage({
      identifier,
      content: messageContent,
      type: SUCCESS_EVENT,
    })

    console.log(message)

    return message
  }

  /**
   * Given a content, emits an error message to the console.
   * @param {...*} rawContent - The content to be emitted.
   * @returns {String} The formatted message.
   * @example
   * // Emmits a formatted message to the console.
   * logger.error('Hello World!');
   * // Outputs:
   * // '<PID> [ERROR] @LOGGER_ID:\nHello World!'
   * @example
   * // Emmits a formatted message to the console with an identifier.
   * logger.error('myLogIdentifier', 'Hello World!');
   * // Outputs:
   * // '<PID> [ERROR] @LOGGER_ID.myLogIdentifier:\nHello World!'
   */
  const error = (...rawContent) => {
    const { identifier, messageContent } = getContentFromArray(rawContent)

    const message = getFormattedMessage({
      identifier,
      content: messageContent,
      type: ERROR_EVENT,
    })

    console.error(message)

    return message
  }

  /**
   * Given a content, emits a warn message to the console.
   * @param {...*} rawContent - The content to be emitted.
   * @returns {String} The formatted message.
   * @example
   * // Emmits a formatted message to the console.
   * logger.warn('Hello World!');
   * // Outputs:
   * // '<PID> [WARN] @LOGGER_ID:\nHello World!'
   * @example
   * // Emmits a formatted message to the console with an identifier.
   * logger.warn('myLogIdentifier', 'Hello World!');
   * // Outputs:
   * // '<PID> [WARN] @LOGGER_ID.myLogIdentifier:\nHello World!'
   */
  const warn = (...rawContent) => {
    const { identifier, messageContent } = getContentFromArray(rawContent)

    const message = getFormattedMessage({
      identifier,
      content: messageContent,
      type: WARN_EVENT,
    })

    console.warn(message)

    return message
  }

  /**
   * Adds a space to the console.
   * @param {String} [spacer] - A custom spacer string to add to the space.
   * @param {Number} [spacerLength] - A custom spacer length to add to the space (defaults to 40).
   * @returns {String} Returns the spacer string logged to the console.
   * @example
   * // Adds a space to the console.
   * logger.space();
   * // Outputs:
   * // ''
   * @example
   * // Adds '=' spacers to the console.
   * logger.space('=');
   * // Outputs:
   * // ''
   * // '========================================'
   * // ''
   * @example
   * // Adds 10 '-' spacers to the console.
   * logger.space('-', 10);
   * // Outputs:
   * // ''
   * // '----------'
   * // ''
   */
  const space = (spacer, spacerLength = 40) => {
    const content = ['']
    let spacerString = ''

    if (spacer) {
      if (typeof spacer !== 'string')
        throw new Error('The spacer value must be a valid string.')

      if (Number.isNaN(spacerLength) || spacerLength <= 0)
        throw new Error('The spacer length must be an integer greater than 0.')

      spacerString = spacer.repeat(spacerLength)

      content.push(spacerString)
      content.push('')
    }

    content.forEach((entry) => console.log(entry))

    return spacerString
  }

  /**
   * Clears the console (Alias for console.clear()).
   * @returns {Boolean} Returns true if the console was cleared.
   * @example
   * // Clears the console.
   * logger.clear();
   */
  const clear = () => {
    console.clear()

    return true
  }

  /**
   * The Logger instance.
   * @property {module:Logger~createLogger~info} info
   * @property {module:Logger~createLogger~success} success
   * @property {module:Logger~createLogger~error} error
   * @property {module:Logger~createLogger~warn} warn
   * @property {module:Logger~createLogger~log} log
   * @property {module:Logger~createLogger~space} space
   * @property {module:Logger~createLogger~clear} clear
   */
  return {
    info,
    success,
    error,
    warn,
    log,
    space,
    clear,
  }
}

module.exports = { createLogger }
