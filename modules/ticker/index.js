'use strict'

/**
 * Ticker module.
 * @module Ticker
 */

/** Ticker's EventEmitter instance.
 * @private
 * @constant {NodeJS.EventEmitter} EVENT_EMITTER
 */
const EVENT_EMITTER = require('events')

/**
 * The default beat of the Ticker (In milisseconds).
 * @readonly
 * @constant {Number} TICK_BEAT_MS=500
 */
const TICK_BEAT_MS = 500

/**
 * The event name 'tick' of the Module.
 * @readonly
 * @constant {String} TICK_EVENT='tick'
 */
const TICK_EVENT = 'tick'

/**
 * The event name 'second' of the Module.
 * @readonly
 * @constant {String} SECOND_EVENT='second'
 */
const SECOND_EVENT = 'second'

/**
 * The event name 'minute' of the Module.
 * @readonly
 * @constant {String} MINUTE_EVENT='minute'
 */
const MINUTE_EVENT = 'minute'

/**
 * The event name 'hour' of the Module.
 * @readonly
 * @constant {String} HOUR_EVENT='hour'
 */
const HOUR_EVENT = 'hour'

/**
 * The event name 'day' of the Module.
 * @readonly
 * @constant {String} DAY_EVENT='day'
 */
const DAY_EVENT = 'day'

/**
 * Function that creates new Ticker instances.
 * @param {Number} [beatMs=TICK_BEAT_MS] - [Optional] The beat of the Ticker (In milisseconds).
 * @returns {Object} The Ticker instance.
 * @example
 * // Creates a new Ticker instance.
 * const ticker = createTicker();
 * @example
 * // Creates a new Ticker instance with a default beat of 2 seconds.
 * const ticker = createTicker(2000);
 */
const createTicker = (beatMs = TICK_BEAT_MS) => {
  if (!Number.isInteger(beatMs) || beatMs < 1)
    throw new Error('The beat milissecond value must be an integer greater than 0.')

  /**
   * The event eventEmitter instance of the Ticker.
   * @private
   * @type {NodeJS.EventEmitter}
   */
  const emitter = new EVENT_EMITTER()

  /**
   * The current date information.
   * @private
   * @type {Object}
   * @property {Number} [seconds=new Date().getSeconds()] - The current date' second.
   * @property {Number} [minutes=new Date().getMinutes()]  - The current date's minute.
   * @property {Number} [hours=new Date().getHours()]  - The current date's hour.
   * @property {Number} [days=new Date().getDate()]  - The current date's day.
   */
  const currentDate = {
    seconds: new Date().getSeconds(),
    minutes: new Date().getMinutes(),
    hours: new Date().getHours(),
    days: new Date().getDate(),
  }

  /**
   * The interval instance of the Ticker.
   * @private
   * @type {Number|NodeJS.Timeout}
   */
  let interval

  /**
   * The list of unique active events.
   * @private
   * @type {Array}
   */
  let activeEvents = []

  /**
   * On a predefined beat interval, emmits ticking events.
   * @private
   * @returns {undefined}
   */
  const tick = () => {
    interval = setInterval(() => {
      if (!activeEvents.length) return

      if (activeEvents.includes('tick')) {
        emitter.emit('tick')
      }

      if (activeEvents.includes('second')) {
        const seconds = new Date().getSeconds()

        if (currentDate.seconds !== seconds) {
          emitter.emit('second')
          currentDate.seconds = seconds
        }
      }

      if (activeEvents.includes('minute')) {
        const minutes = new Date().getMinutes()

        if (currentDate.minutes !== minutes) {
          emitter.emit('minute')
          currentDate.minutes = minutes
        }
      }

      if (activeEvents.includes('hour')) {
        const hours = new Date().getHours()

        if (currentDate.hours !== hours) {
          emitter.emit('hour')
          currentDate.hours = hours
        }
      }

      if (activeEvents.includes('day')) {
        const days = new Date().getDate()

        if (currentDate.days !== days) {
          emitter.emit('day')
          currentDate.days = days
        }
      }
    }, beatMs)
  }

  /**
   * The callback function to be called on each interval beat.
   * @memberof module:Ticker~createTicker~onEach
   * @callback beatCallback
   * @param {Function} [onFinish] - Must be invoked to disable the callback's event listener/emitter.
   * @returns {undefined}
   */

  /**
   * Given a desired beat interval, executes a callback function on each interval beat.
   * @param {TICK_EVENT | SECOND_EVENT | MINUTE_EVENT | HOUR_EVENT | DAY_EVENT} beatEvent - The desired beat interval.
   * @param {beatCallback} callback - The function to be called on each interval beat.
   * @returns {undefined}
   * @example
   * // Executes a callback function on each tick.
   *
   * const callback = (onFinish) => {
   *   console.log('tick');
   *   onFinish();
   * };
   *
   * ticker.onEach('tick', callback);
   */
  const onEach = (beatEvent, callback) => {
    const BEAT_EVENTS = [TICK_EVENT, SECOND_EVENT, MINUTE_EVENT, HOUR_EVENT, DAY_EVENT]

    if (typeof beatEvent !== 'string' || !BEAT_EVENTS.includes(beatEvent))
      throw new Error(
        `The beat interval must be one of ${BEAT_EVENTS.map(
          (interval) => `'${interval}'`,
        ).join(', ')}.`,
      )

    if (callback instanceof Function !== true)
      throw new Error('The callback must be a function.')

    if (!activeEvents.includes(beatEvent)) activeEvents.push(beatEvent)

    const callbackFunc = () => {
      const onFinish = () => {
        emitter.removeListener(beatEvent, callbackFunc)
        activeEvents = activeEvents.filter((event) => event !== beatEvent)
      }

      return callback(onFinish)
    }

    emitter.on(beatEvent, callbackFunc)
  }

  /**
   * Finishes the ticking instance.
   * @returns {undefined}
   * @example
   * // Finishes the ticking instance.
   * ticker.die()
   */
  const die = () => {
    clearInterval(interval)
    emitter.removeAllListeners()
  }

  tick()

  /**
   * The Ticker instance.
   * @property {module:Ticker~createTicker~onEach} onEach
   * @property {module:Ticker~createTicker~die} die
   */
  return {
    onEach,
    die,
  }
}

module.exports = { createTicker }
