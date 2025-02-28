<div align="center">

# 🤓 leo-node-utils 🤓

A collection of useful Node.js functions (**For me** 😉).

</div>

## Classes

<dl>
<dt><a href="#Logger">Logger</a></dt>
<dd><p>Class that defines a Logger instance.</p>
</dd>
<dt><a href="#Ticker">Ticker</a></dt>
<dd><p>Class that defines a Ticker instance.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#LOG_EVENT">LOG_EVENT</a> : <code>String</code></dt>
<dd><p>LOG Event name.</p>
</dd>
<dt><a href="#INFO_EVENT">INFO_EVENT</a> : <code>String</code></dt>
<dd><p>INFO Event name.</p>
</dd>
<dt><a href="#SUCCESS_EVENT">SUCCESS_EVENT</a> : <code>String</code></dt>
<dd><p>SUCCESS Event name.</p>
</dd>
<dt><a href="#ERROR_EVENT">ERROR_EVENT</a> : <code>String</code></dt>
<dd><p>ERROR Event name.</p>
</dd>
<dt><a href="#WARN_EVENT">WARN_EVENT</a> : <code>String</code></dt>
<dd><p>WARN Event name.</p>
</dd>
<dt><a href="#PROCESS_PID">PROCESS_PID</a> : <code>String</code></dt>
<dd><p>Current process PID.</p>
</dd>
<dt><a href="#TICK_BEAT">TICK_BEAT</a> : <code>Number</code></dt>
<dd><p>The default beat of the Ticker (in milisseconds).</p>
</dd>
<dt><a href="#BEAT_EVENTS">BEAT_EVENTS</a> : <code>Array.&lt;String&gt;</code></dt>
<dd><p>Available beat intervals.</p>
</dd>
</dl>

<a name="Logger"></a>

## Logger
Class that defines a Logger instance.

**Kind**: global class  

* [Logger](#Logger)
    * [new Logger([loggerId])](#new_Logger_new)
    * [.log(content)](#Logger+log) ⇒ <code>String</code>
    * [.info(content)](#Logger+info) ⇒ <code>String</code>
    * [.success(content)](#Logger+success) ⇒ <code>String</code>
    * [.error(content)](#Logger+error) ⇒ <code>String</code>
    * [.warn(content)](#Logger+warn) ⇒ <code>String</code>
    * [.space([spacer], [spacerLength])](#Logger+space) ⇒ <code>String</code>
    * [.clear()](#Logger+clear) ⇒ <code>Boolean</code>

<a name="new_Logger_new"></a>

### new Logger([loggerId])
Creates a new Logger instance.


| Param | Type | Description |
| --- | --- | --- |
| [loggerId] | <code>String</code> | The ID of the Logger instance. |

**Example**  
```js
// Creates a new Logger instance.const logger = new Logger();
```
**Example**  
```js
// Creates a new Logger instance with an ID of "Logger".const logger = new Logger('Logger');
```
<a name="Logger+log"></a>

### logger.log(content) ⇒ <code>String</code>
Given a content, emits a log message to the console.

**Kind**: instance method of [<code>Logger</code>](#Logger)  
**Returns**: <code>String</code> - The formatted message.  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>\*</code> | The content to be emitted. |

**Example**  
```js
// Emitts a formatted message to the console.logger.log('Hello World!');// Outputs:// '[LOG_COLOR]<[PROCESS_PID]> [LOG_TYPE] [LOGGER_ID]:[RESET_COLOR]\n[MESSAGE_CONTENT]'
```
<a name="Logger+info"></a>

### logger.info(content) ⇒ <code>String</code>
Given a content, emits a info message to the console.

**Kind**: instance method of [<code>Logger</code>](#Logger)  
**Returns**: <code>String</code> - The formatted message.  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>\*</code> | The content to be emitted. |

**Example**  
```js
// Emitts a formatted message to the console.logger.info('Hello World!');// Outputs:// '[INFO_COLOR]<[PROCESS_PID]> [LOG_TYPE] [LOGGER_ID]:[RESET_COLOR]\n[MESSAGE_CONTENT]'
```
<a name="Logger+success"></a>

### logger.success(content) ⇒ <code>String</code>
Given a content, emits a success message to the console.

**Kind**: instance method of [<code>Logger</code>](#Logger)  
**Returns**: <code>String</code> - The formatted message.  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>\*</code> | The content to be emitted. |

**Example**  
```js
// Emitts a formatted message to the console.logger.success('Hello World!');// Outputs:// '[SUCCESS_COLOR]<[PROCESS_PID]> [LOG_TYPE] [LOGGER_ID]:[RESET_COLOR]\n[MESSAGE_CONTENT]'
```
<a name="Logger+error"></a>

### logger.error(content) ⇒ <code>String</code>
Given a content, emits an error message to the console.

**Kind**: instance method of [<code>Logger</code>](#Logger)  
**Returns**: <code>String</code> - The formatted message.  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>\*</code> | The content to be emitted. |

**Example**  
```js
// Emitts a formatted message to the console.logger.error('Hello World!');// Outputs:// '[ERROR_COLOR]<[PROCESS_PID]> [LOG_TYPE] [LOGGER_ID]:[RESET_COLOR]\n[MESSAGE_CONTENT]'
```
<a name="Logger+warn"></a>

### logger.warn(content) ⇒ <code>String</code>
Given a content, emits a warn message to the console.

**Kind**: instance method of [<code>Logger</code>](#Logger)  
**Returns**: <code>String</code> - The formatted message.  

| Param | Type | Description |
| --- | --- | --- |
| content | <code>\*</code> | The content to be emitted. |

**Example**  
```js
// Emitts a formatted message to the console.logger.warn('Hello World!');// Outputs:// '[WARN_COLOR]<[PROCESS_PID]> [LOG_TYPE] [LOGGER_ID]:[RESET_COLOR]\n[MESSAGE_CONTENT]'
```
<a name="Logger+space"></a>

### logger.space([spacer], [spacerLength]) ⇒ <code>String</code>
Adds a space to the console.

**Kind**: instance method of [<code>Logger</code>](#Logger)  
**Returns**: <code>String</code> - Returns the spacer string logged to the console.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [spacer] | <code>String</code> |  | A custom spacer string to add to the space. |
| [spacerLength] | <code>Number</code> | <code>40</code> | A custom spacer length to add to the space (defaults to 40). |

**Example**  
```js
// Adds a space to the console.logger.space();// Outputs:// ''
```
**Example**  
```js
// Adds '=' spacers to the console.logger.space('=');// Outputs:// ''// '========================================'// ''
```
**Example**  
```js
// Adds 10 '-' spacers to the console.logger.space('-', 10);// Outputs:// ''// '----------'// ''
```
<a name="Logger+clear"></a>

### logger.clear() ⇒ <code>Boolean</code>
Clears the console (Alias for console.clear()).

**Kind**: instance method of [<code>Logger</code>](#Logger)  
**Returns**: <code>Boolean</code> - Returns true if the console was cleared.  
**Example**  
```js
// Clears the console.logger.clear();
```
<a name="Ticker"></a>

## Ticker
Class that defines a Ticker instance.

**Kind**: global class  

* [Ticker](#Ticker)
    * [new Ticker([beat])](#new_Ticker_new)
    * [.onEach(beatEvent, callback)](#Ticker+onEach) ⇒ <code>undefined</code>
    * [.die()](#Ticker+die) ⇒ <code>undefined</code>

<a name="new_Ticker_new"></a>

### new Ticker([beat])
Creates a new Ticker instance.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [beat] | <code>Number</code> | <code>TICK_BEAT</code> | The beat of the Ticker (in milisseconds). |

**Example**  
```js
// Creates a new Ticker instance.const ticker = new Ticker();
```
**Example**  
```js
// Creates a new Ticker instance with a beat of 2 seconds.const ticker = new Ticker(2000);
```
<a name="Ticker+onEach"></a>

### ticker.onEach(beatEvent, callback) ⇒ <code>undefined</code>
Given a desired beat interval, executes a callback function on each interval beat.

**Kind**: instance method of [<code>Ticker</code>](#Ticker)  

| Param | Type | Description |
| --- | --- | --- |
| beatEvent | <code>&#x27;tick&#x27;</code> \| <code>&#x27;second&#x27;</code> \| <code>&#x27;minute&#x27;</code> \| <code>&#x27;hour&#x27;</code> \| <code>&#x27;day&#x27;</code> | The desired beat interval. |
| callback | <code>beatCallback</code> | The function to be called on each interval beat. |

**Example**  
```js
// Executes a callback function on each tick.const callback = (onFinish) => {  console.log('tick');  onFinish();};ticker.onEach('tick', callback);
```
<a name="Ticker+die"></a>

### ticker.die() ⇒ <code>undefined</code>
Finishes the ticking instance.

**Kind**: instance method of [<code>Ticker</code>](#Ticker)  
**Example**  
```js
// Finishes the ticking instance.ticker.die()
```
<a name="LOG_EVENT"></a>

## LOG\_EVENT : <code>String</code>
LOG Event name.

**Kind**: global constant  
**Default**: <code>&#x27;log&#x27;</code>  
<a name="INFO_EVENT"></a>

## INFO\_EVENT : <code>String</code>
INFO Event name.

**Kind**: global constant  
**Default**: <code>&#x27;info&#x27;</code>  
<a name="SUCCESS_EVENT"></a>

## SUCCESS\_EVENT : <code>String</code>
SUCCESS Event name.

**Kind**: global constant  
**Default**: <code>&#x27;success&#x27;</code>  
<a name="ERROR_EVENT"></a>

## ERROR\_EVENT : <code>String</code>
ERROR Event name.

**Kind**: global constant  
**Default**: <code>&#x27;error&#x27;</code>  
<a name="WARN_EVENT"></a>

## WARN\_EVENT : <code>String</code>
WARN Event name.

**Kind**: global constant  
**Default**: <code>&#x27;warn&#x27;</code>  
<a name="PROCESS_PID"></a>

## PROCESS\_PID : <code>String</code>
Current process PID.

**Kind**: global constant  
**Default**: <code>process.pid</code>  
<a name="TICK_BEAT"></a>

## TICK\_BEAT : <code>Number</code>
The default beat of the Ticker (in milisseconds).

**Kind**: global constant  
**Default**: <code>500</code>  
<a name="BEAT_EVENTS"></a>

## BEAT\_EVENTS : <code>Array.&lt;String&gt;</code>
Available beat intervals.

**Kind**: global constant  
**Default**: <code>[&#x27;tick&#x27;,</code>  
