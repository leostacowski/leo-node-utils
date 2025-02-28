const Emitter = require('events')

/**
 * The default beat of the Ticker (in milisseconds).
 * @constant {Number} TICK_BEAT=500
 */
const TICK_BEAT = 500

/**
 * Available beat intervals.
 * @constant {Array.<String>} BEAT_EVENTS=['tick', 'second', 'minute', 'hour', 'day']
 */
const BEAT_EVENTS = ['tick', 'second', 'minute', 'hour', 'day']

/**
 * Class that defines a Ticker instance.
 * @param {Number} [beat=TICK_BEAT] - The beat of the Ticker (in milisseconds).
 * @example
 * // Creates a new Ticker instance.
 * const ticker = new Ticker();
 * @example
 * // Creates a new Ticker instance with a beat of 2 seconds.
 * const ticker = new Ticker(2000);
 */
class Ticker {
  /**
   * The current second.
   * @private
   * @type {Number}
   */
  seconds = new Date().getSeconds()

  /**
   * The current minute.
   * @private
   * @type {Number}
   */
  minutes = new Date().getMinutes()

  /**
   * The current hour.
   * @private
   * @type {Number}
   */
  hours = new Date().getHours()

  /**
   * The current day.
   * @private
   * @type {Number}
   */
  days = new Date().getDate()

  /**
   * The current beat of the Ticker (in milisseconds).
   * @private
   * @type {Number}
   */
  targetBeat = TICK_BEAT

  /**
   * The interval instance of the Ticker.
   * @private
   * @type {Number|NodeJS.Timeout}
   */
  interval

  /**
   * The event emitter instance of the Ticker.
   * @private
   * @type {Emitter}
   */
  emitter = new Emitter()

  /**
   * The list of unique active events.
   * @private
   * @type {Array}
   */
  activeEvents = []

  /**
   * Creates a new Ticker instance.
   * @constructor
   */
  constructor(beat = TICK_BEAT) {
    if (!Number.isInteger(beat) || beat < 1)
      throw new Error('The beat must be an integer greater than 0.')

    this.targetBeat = beat
    this.tick()
  }

  /**
   * On a predefined beat interval, emmits ticking events.
   * @private
   * @returns {undefined}
   */
  tick() {
    this.interval = setInterval(() => {
      if (!this.activeEvents.length) return

      if (this.activeEvents.includes('tick')) {
        this.emitter.emit('tick')
      }

      if (this.activeEvents.includes('second')) {
        const seconds = new Date().getSeconds()

        if (seconds !== this.seconds) {
          this.emitter.emit('second')
          this.seconds = seconds
        }
      }

      if (this.activeEvents.includes('minute')) {
        const minutes = new Date().getMinutes()

        if (minutes !== this.minutes) {
          this.emitter.emit('minute')
          this.minutes = minutes
        }
      }

      if (this.activeEvents.includes('hour')) {
        const hours = new Date().getHours()

        if (hours !== this.hours) {
          this.emitter.emit('hour')
          this.hours = hours
        }
      }

      if (this.activeEvents.includes('day')) {
        const days = new Date().getDate()

        if (days !== this.days) {
          this.emitter.emit('day')
          this.days = days
        }
      }
    }, this.targetBeat)
  }

  /**
   * The callback function to be called on each interval beat.
   * @memberof Ticker.onEach
   * @callback beatCallback
   * @param {Function} [onFinish] - Must be invoked to disable the callback's event listener/emitter.
   * @returns {undefined}
   */

  /**
   * Given a desired beat interval, executes a callback function on each interval beat.
   * @memberof Ticker
   * @param {'tick' | 'second' | 'minute' | 'hour' | 'day'} beatEvent - The desired beat interval.
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
  onEach(beatEvent, callback) {
    if (typeof beatEvent !== 'string' || !BEAT_EVENTS.includes(beatEvent))
      throw new Error(
        `The beat interval must be one of ${BEAT_EVENTS.map(
          (interval) => `'${interval}'`,
        ).join(', ')}.`,
      )

    if (callback instanceof Function !== true)
      throw new Error('The callback must be a function.')

    if (!this.activeEvents.includes(beatEvent)) this.activeEvents.push(beatEvent)

    const callbackFunc = () => {
      const onFinish = () => {
        this.emitter.removeListener(beatEvent, callbackFunc)
        this.activeEvents = this.activeEvents.filter((event) => event !== beatEvent)
      }

      return callback(onFinish)
    }

    this.emitter.on(beatEvent, callbackFunc)
  }

  /**
   * Finishes the ticking instance.
   * @memberof Ticker
   * @returns {undefined}
   * @example
   * // Finishes the ticking instance.
   * ticker.die()
   */
  die() {
    clearInterval(this.interval)
    this.emitter.removeAllListeners()
  }
}

module.exports = { Ticker }
