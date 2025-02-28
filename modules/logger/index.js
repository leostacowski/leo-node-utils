/**
 * LOG Event name.
 *  @constant {String} LOG_EVENT='log'
 */
const LOG_EVENT = 'log'

/**
 * INFO Event name.
 *  @constant {String} INFO_EVENT='info'
 */
const INFO_EVENT = 'info'

/**
 * SUCCESS Event name.
 *  @constant {String} SUCCESS_EVENT='success'
 */
const SUCCESS_EVENT = 'success'

/**
 * ERROR Event name.
 *  @constant {String} ERROR_EVENT='error'
 */
const ERROR_EVENT = 'error'

/**
 * WARN Event name.
 *  @constant {String} WARN_EVENT='warn'
 */
const WARN_EVENT = 'warn'

/**
 * Current process PID.
 *  @constant {String} PROCESS_PID=process.pid
 */
const PROCESS_PID = process.pid

/**
 * Class that defines a Logger instance.
 * @param {String} [loggerId] - The ID of the Logger instance.
 * @example
 * // Creates a new Logger instance.
 * const logger = new Logger();
 * @example
 * // Creates a new Logger instance with an ID of "Logger".
 * const logger = new Logger('Logger');
 */
class Logger {
  /**
   * The current Logger ID.
   * @private
   * @property {String}
   */
  loggerId = ''

  /**
   * Creates a new Logger instance.
   * @constructor
   */
  constructor(loggerId = '') {
    if (loggerId && typeof loggerId !== 'string')
      throw new Error('The logger ID must be a string.')

    this.loggerId = loggerId
  }

  /**
   * Given a type, returns a console color. Otherwhise returns a "reset" color code.
   * @private
   * @param {String} [type]
   * @returns {String} The console color.
   */
  getLogColor(type) {
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
   * @param {*} messageContent.content - The content to be formatted.
   * @param {String} messageContent.type - The type of the content to be formatted.
   * @returns {String} The formatted message.
   */
  getFormattedMessage({ content, type } = { content: '', type: '' }) {
    let targetContent = content

    if (typeof content !== 'string') targetContent = JSON.stringify(content)

    const color = this.getLogColor(type)
    const resetColor = this.getLogColor()
    const loggerId = this.loggerId?.length ? ` @${this.loggerId}` : ''

    return `${color}<${PROCESS_PID}> [${type.toUpperCase()}]${loggerId}:${resetColor}\n${targetContent}`
  }

  /**
   * Given a content, emits a log message to the console.
   * @param {*} content - The content to be emitted.
   * @returns {String} The formatted message.
   * @example
   * // Emitts a formatted message to the console.
   * logger.log('Hello World!');
   * // Outputs:
   * // '[LOG_COLOR]<[PROCESS_PID]> [LOG_TYPE] [LOGGER_ID]:[RESET_COLOR]\n[MESSAGE_CONTENT]'
   */
  log(content) {
    const message = this.getFormattedMessage({ content, type: LOG_EVENT })

    console.log(message)

    return message
  }

  /**
   * Given a content, emits a info message to the console.
   * @param {*} content - The content to be emitted.
   * @returns {String} The formatted message.
   * @example
   * // Emitts a formatted message to the console.
   * logger.info('Hello World!');
   * // Outputs:
   * // '[INFO_COLOR]<[PROCESS_PID]> [LOG_TYPE] [LOGGER_ID]:[RESET_COLOR]\n[MESSAGE_CONTENT]'
   */
  info(content) {
    const message = this.getFormattedMessage({ content, type: INFO_EVENT })

    console.info(message)

    return message
  }

  /**
   * Given a content, emits a success message to the console.
   * @param {*} content - The content to be emitted.
   * @returns {String} The formatted message.
   * @example
   * // Emitts a formatted message to the console.
   * logger.success('Hello World!');
   * // Outputs:
   * // '[SUCCESS_COLOR]<[PROCESS_PID]> [LOG_TYPE] [LOGGER_ID]:[RESET_COLOR]\n[MESSAGE_CONTENT]'
   */
  success(content) {
    const message = this.getFormattedMessage({ content, type: SUCCESS_EVENT })

    console.log(message)

    return message
  }

  /**
   * Given a content, emits an error message to the console.
   * @param {*} content - The content to be emitted.
   * @returns {String} The formatted message.
   * @example
   * // Emitts a formatted message to the console.
   * logger.error('Hello World!');
   * // Outputs:
   * // '[ERROR_COLOR]<[PROCESS_PID]> [LOG_TYPE] [LOGGER_ID]:[RESET_COLOR]\n[MESSAGE_CONTENT]'
   */
  error(content) {
    const message = this.getFormattedMessage({ content, type: ERROR_EVENT })

    console.error(message)

    return message
  }

  /**
   * Given a content, emits a warn message to the console.
   * @param {*} content - The content to be emitted.
   * @returns {String} The formatted message.
   * @example
   * // Emitts a formatted message to the console.
   * logger.warn('Hello World!');
   * // Outputs:
   * // '[WARN_COLOR]<[PROCESS_PID]> [LOG_TYPE] [LOGGER_ID]:[RESET_COLOR]\n[MESSAGE_CONTENT]'
   */
  warn(content) {
    const message = this.getFormattedMessage({ content, type: WARN_EVENT })

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
  space(spacer, spacerLength = 40) {
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
  clear() {
    console.clear()

    return true
  }
}

module.exports = { Logger }
