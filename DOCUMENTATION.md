## Modules

<dl>
<dt><a href="#module_LeoNodeUtils">LeoNodeUtils</a></dt>
<dd><p>LeoNodeUtils global module.</p>
</dd>
<dt><a href="#module_Logger">Logger</a></dt>
<dd><p>Logger module.</p>
</dd>
<dt><a href="#module_Ticker">Ticker</a></dt>
<dd><p>Ticker module.</p>
</dd>
</dl>

<a name="module_LeoNodeUtils"></a>

## LeoNodeUtils
LeoNodeUtils global module.

<a name="exp_module_LeoNodeUtils--module.exports"></a>

### module.exports ⏏
LeoNodeUtils module exports.

**Kind**: Exported member  
**Properties**

| Name | Type |
| --- | --- |
| createTicker | [<code>createTicker</code>](#module_Ticker..createTicker) | 
| createLogger | [<code>createLogger</code>](#module_Logger..createLogger) | 

<a name="module_Logger"></a>

## Logger
Logger module.


* [Logger](#module_Logger)
    * [~LOG_EVENT](#module_Logger..LOG_EVENT) : <code>String</code>
    * [~INFO_EVENT](#module_Logger..INFO_EVENT) : <code>String</code>
    * [~SUCCESS_EVENT](#module_Logger..SUCCESS_EVENT) : <code>String</code>
    * [~ERROR_EVENT](#module_Logger..ERROR_EVENT) : <code>String</code>
    * [~WARN_EVENT](#module_Logger..WARN_EVENT) : <code>String</code>
    * [~PROCESS_PID](#module_Logger..PROCESS_PID) : <code>String</code>
    * [~createLogger([loggerId])](#module_Logger..createLogger)
        * [~log(...rawContent)](#module_Logger..createLogger..log) ⇒ <code>String</code>
        * [~info(...rawContent)](#module_Logger..createLogger..info) ⇒ <code>String</code>
        * [~success(...rawContent)](#module_Logger..createLogger..success) ⇒ <code>String</code>
        * [~error(...rawContent)](#module_Logger..createLogger..error) ⇒ <code>String</code>
        * [~warn(...rawContent)](#module_Logger..createLogger..warn) ⇒ <code>String</code>
        * [~space([spacer], [spacerLength])](#module_Logger..createLogger..space) ⇒ <code>String</code>
        * [~clear()](#module_Logger..createLogger..clear) ⇒ <code>Boolean</code>

<a name="module_Logger..LOG_EVENT"></a>

### Logger~LOG\_EVENT : <code>String</code>
LOG Event name.

**Kind**: inner constant of [<code>Logger</code>](#module_Logger)  
**Default**: <code>&#x27;log&#x27;</code>  
**Read only**: true  
<a name="module_Logger..INFO_EVENT"></a>

### Logger~INFO\_EVENT : <code>String</code>
INFO Event name.

**Kind**: inner constant of [<code>Logger</code>](#module_Logger)  
**Default**: <code>&#x27;info&#x27;</code>  
**Read only**: true  
<a name="module_Logger..SUCCESS_EVENT"></a>

### Logger~SUCCESS\_EVENT : <code>String</code>
SUCCESS Event name.

**Kind**: inner constant of [<code>Logger</code>](#module_Logger)  
**Default**: <code>&#x27;success&#x27;</code>  
**Read only**: true  
<a name="module_Logger..ERROR_EVENT"></a>

### Logger~ERROR\_EVENT : <code>String</code>
ERROR Event name.

**Kind**: inner constant of [<code>Logger</code>](#module_Logger)  
**Default**: <code>&#x27;error&#x27;</code>  
**Read only**: true  
<a name="module_Logger..WARN_EVENT"></a>

### Logger~WARN\_EVENT : <code>String</code>
WARN Event name.

**Kind**: inner constant of [<code>Logger</code>](#module_Logger)  
**Default**: <code>&#x27;warn&#x27;</code>  
**Read only**: true  
<a name="module_Logger..PROCESS_PID"></a>

### Logger~PROCESS\_PID : <code>String</code>
Current process PID.

**Kind**: inner constant of [<code>Logger</code>](#module_Logger)  
**Default**: <code>process.pid</code>  
**Read only**: true  
<a name="module_Logger..createLogger"></a>

### Logger~createLogger([loggerId])
Function that creates a new Logger instance.

**Kind**: inner method of [<code>Logger</code>](#module_Logger)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [loggerId] | <code>String</code> | <code>&#x27;&#x27;</code> | The ID of the Logger instance. |

**Example**  
```js
// Creates a new Logger instance.const logger = createLogger();
```
**Example**  
```js
// Creates a new Logger instance with an ID of "Logger".const logger = createLogger('Logger');
```

* [~createLogger([loggerId])](#module_Logger..createLogger)
    * [~log(...rawContent)](#module_Logger..createLogger..log) ⇒ <code>String</code>
    * [~info(...rawContent)](#module_Logger..createLogger..info) ⇒ <code>String</code>
    * [~success(...rawContent)](#module_Logger..createLogger..success) ⇒ <code>String</code>
    * [~error(...rawContent)](#module_Logger..createLogger..error) ⇒ <code>String</code>
    * [~warn(...rawContent)](#module_Logger..createLogger..warn) ⇒ <code>String</code>
    * [~space([spacer], [spacerLength])](#module_Logger..createLogger..space) ⇒ <code>String</code>
    * [~clear()](#module_Logger..createLogger..clear) ⇒ <code>Boolean</code>

<a name="module_Logger..createLogger..log"></a>

#### createLogger~log(...rawContent) ⇒ <code>String</code>
Given a content, emits a log message to the console.

**Kind**: inner method of [<code>createLogger</code>](#module_Logger..createLogger)  
**Returns**: <code>String</code> - The formatted message.  

| Param | Type | Description |
| --- | --- | --- |
| ...rawContent | <code>\*</code> | The content to be emitted. |

**Example**  
```js
// Emmits a formatted message to the console.logger.log('Hello World!');// Outputs:// '<PID> [LOG] @LOGGER_ID:\nHello World!'
```
**Example**  
```js
// Emmits a formatted message to the console with an identifier.logger.log('myLogIdentifier', 'Hello World!');// Outputs:// '<PID> [LOG] @LOGGER_ID.myLogIdentifier:\nHello World!'
```
<a name="module_Logger..createLogger..info"></a>

#### createLogger~info(...rawContent) ⇒ <code>String</code>
Given a content, emits a info message to the console.

**Kind**: inner method of [<code>createLogger</code>](#module_Logger..createLogger)  
**Returns**: <code>String</code> - The formatted message.  

| Param | Type | Description |
| --- | --- | --- |
| ...rawContent | <code>\*</code> | The content to be emitted. |

**Example**  
```js
// Emmits a formatted message to the console.logger.info('Hello World!');// Outputs:// '<PID> [INFO] @LOGGER_ID:\nHello World!'
```
**Example**  
```js
// Emmits a formatted message to the console with an identifier.logger.info('myLogIdentifier', 'Hello World!');// Outputs:// '<PID> [INFO] @LOGGER_ID.myLogIdentifier:\nHello World!'
```
<a name="module_Logger..createLogger..success"></a>

#### createLogger~success(...rawContent) ⇒ <code>String</code>
Given a content, emits a success message to the console.

**Kind**: inner method of [<code>createLogger</code>](#module_Logger..createLogger)  
**Returns**: <code>String</code> - The formatted message.  

| Param | Type | Description |
| --- | --- | --- |
| ...rawContent | <code>\*</code> | The content to be emitted. |

**Example**  
```js
// Emmits a formatted message to the console.logger.success('Hello World!');// Outputs:// '<PID> [SUCCESS] @LOGGER_ID:\nHello World!'
```
**Example**  
```js
// Emmits a formatted message to the console with an identifier.logger.success('myLogIdentifier', 'Hello World!');// Outputs:// '<PID> [SUCCESS] @LOGGER_ID.myLogIdentifier:\nHello World!'
```
<a name="module_Logger..createLogger..error"></a>

#### createLogger~error(...rawContent) ⇒ <code>String</code>
Given a content, emits an error message to the console.

**Kind**: inner method of [<code>createLogger</code>](#module_Logger..createLogger)  
**Returns**: <code>String</code> - The formatted message.  

| Param | Type | Description |
| --- | --- | --- |
| ...rawContent | <code>\*</code> | The content to be emitted. |

**Example**  
```js
// Emmits a formatted message to the console.logger.error('Hello World!');// Outputs:// '<PID> [ERROR] @LOGGER_ID:\nHello World!'
```
**Example**  
```js
// Emmits a formatted message to the console with an identifier.logger.error('myLogIdentifier', 'Hello World!');// Outputs:// '<PID> [ERROR] @LOGGER_ID.myLogIdentifier:\nHello World!'
```
<a name="module_Logger..createLogger..warn"></a>

#### createLogger~warn(...rawContent) ⇒ <code>String</code>
Given a content, emits a warn message to the console.

**Kind**: inner method of [<code>createLogger</code>](#module_Logger..createLogger)  
**Returns**: <code>String</code> - The formatted message.  

| Param | Type | Description |
| --- | --- | --- |
| ...rawContent | <code>\*</code> | The content to be emitted. |

**Example**  
```js
// Emmits a formatted message to the console.logger.warn('Hello World!');// Outputs:// '<PID> [WARN] @LOGGER_ID:\nHello World!'
```
**Example**  
```js
// Emmits a formatted message to the console with an identifier.logger.warn('myLogIdentifier', 'Hello World!');// Outputs:// '<PID> [WARN] @LOGGER_ID.myLogIdentifier:\nHello World!'
```
<a name="module_Logger..createLogger..space"></a>

#### createLogger~space([spacer], [spacerLength]) ⇒ <code>String</code>
Adds a space to the console.

**Kind**: inner method of [<code>createLogger</code>](#module_Logger..createLogger)  
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
<a name="module_Logger..createLogger..clear"></a>

#### createLogger~clear() ⇒ <code>Boolean</code>
Clears the console (Alias for console.clear()).

**Kind**: inner method of [<code>createLogger</code>](#module_Logger..createLogger)  
**Returns**: <code>Boolean</code> - Returns true if the console was cleared.  
**Example**  
```js
// Clears the console.logger.clear();
```
<a name="module_Ticker"></a>

## Ticker
Ticker module.


* [Ticker](#module_Ticker)
    * [~TICK_BEAT_MS](#module_Ticker..TICK_BEAT_MS) : <code>Number</code>
    * [~TICK_EVENT](#module_Ticker..TICK_EVENT) : <code>String</code>
    * [~SECOND_EVENT](#module_Ticker..SECOND_EVENT) : <code>String</code>
    * [~MINUTE_EVENT](#module_Ticker..MINUTE_EVENT) : <code>String</code>
    * [~HOUR_EVENT](#module_Ticker..HOUR_EVENT) : <code>String</code>
    * [~DAY_EVENT](#module_Ticker..DAY_EVENT) : <code>String</code>
    * [~createTicker([beatMs])](#module_Ticker..createTicker) ⇒ <code>Object</code>
        * [~onEach(beatEvent, callback)](#module_Ticker..createTicker..onEach) ⇒ <code>undefined</code>
            * [.beatCallback](#module_Ticker..createTicker..onEach.beatCallback) ⇒ <code>undefined</code>
        * [~die()](#module_Ticker..createTicker..die) ⇒ <code>undefined</code>

<a name="module_Ticker..TICK_BEAT_MS"></a>

### Ticker~TICK\_BEAT\_MS : <code>Number</code>
The default beat of the Ticker (In milisseconds).

**Kind**: inner constant of [<code>Ticker</code>](#module_Ticker)  
**Default**: <code>500</code>  
**Read only**: true  
<a name="module_Ticker..TICK_EVENT"></a>

### Ticker~TICK\_EVENT : <code>String</code>
The event name 'tick' of the Module.

**Kind**: inner constant of [<code>Ticker</code>](#module_Ticker)  
**Default**: <code>&#x27;tick&#x27;</code>  
**Read only**: true  
<a name="module_Ticker..SECOND_EVENT"></a>

### Ticker~SECOND\_EVENT : <code>String</code>
The event name 'second' of the Module.

**Kind**: inner constant of [<code>Ticker</code>](#module_Ticker)  
**Default**: <code>&#x27;second&#x27;</code>  
**Read only**: true  
<a name="module_Ticker..MINUTE_EVENT"></a>

### Ticker~MINUTE\_EVENT : <code>String</code>
The event name 'minute' of the Module.

**Kind**: inner constant of [<code>Ticker</code>](#module_Ticker)  
**Default**: <code>&#x27;minute&#x27;</code>  
**Read only**: true  
<a name="module_Ticker..HOUR_EVENT"></a>

### Ticker~HOUR\_EVENT : <code>String</code>
The event name 'hour' of the Module.

**Kind**: inner constant of [<code>Ticker</code>](#module_Ticker)  
**Default**: <code>&#x27;hour&#x27;</code>  
**Read only**: true  
<a name="module_Ticker..DAY_EVENT"></a>

### Ticker~DAY\_EVENT : <code>String</code>
The event name 'day' of the Module.

**Kind**: inner constant of [<code>Ticker</code>](#module_Ticker)  
**Default**: <code>&#x27;day&#x27;</code>  
**Read only**: true  
<a name="module_Ticker..createTicker"></a>

### Ticker~createTicker([beatMs]) ⇒ <code>Object</code>
Function that creates new Ticker instances.

**Kind**: inner method of [<code>Ticker</code>](#module_Ticker)  
**Returns**: <code>Object</code> - The Ticker instance.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [beatMs] | <code>Number</code> | <code>TICK_BEAT_MS</code> | [Optional] The beat of the Ticker (In milisseconds). |

**Example**  
```js
// Creates a new Ticker instance.const ticker = createTicker();
```
**Example**  
```js
// Creates a new Ticker instance with a default beat of 2 seconds.const ticker = createTicker(2000);
```

* [~createTicker([beatMs])](#module_Ticker..createTicker) ⇒ <code>Object</code>
    * [~onEach(beatEvent, callback)](#module_Ticker..createTicker..onEach) ⇒ <code>undefined</code>
        * [.beatCallback](#module_Ticker..createTicker..onEach.beatCallback) ⇒ <code>undefined</code>
    * [~die()](#module_Ticker..createTicker..die) ⇒ <code>undefined</code>

<a name="module_Ticker..createTicker..onEach"></a>

#### createTicker~onEach(beatEvent, callback) ⇒ <code>undefined</code>
Given a desired beat interval, executes a callback function on each interval beat.

**Kind**: inner method of [<code>createTicker</code>](#module_Ticker..createTicker)  

| Param | Type | Description |
| --- | --- | --- |
| beatEvent | <code>TICK\_EVENT</code> \| <code>SECOND\_EVENT</code> \| <code>MINUTE\_EVENT</code> \| <code>HOUR\_EVENT</code> \| <code>DAY\_EVENT</code> | The desired beat interval. |
| callback | <code>beatCallback</code> | The function to be called on each interval beat. |

**Example**  
```js
// Executes a callback function on each tick.const callback = (onFinish) => {  console.log('tick');  onFinish();};ticker.onEach('tick', callback);
```
<a name="module_Ticker..createTicker..onEach.beatCallback"></a>

##### onEach.beatCallback ⇒ <code>undefined</code>
The callback function to be called on each interval beat.

**Kind**: static typedef of [<code>onEach</code>](#module_Ticker..createTicker..onEach)  

| Param | Type | Description |
| --- | --- | --- |
| [onFinish] | <code>function</code> | Must be invoked to disable the callback's event listener/emitter. |

<a name="module_Ticker..createTicker..die"></a>

#### createTicker~die() ⇒ <code>undefined</code>
Finishes the ticking instance.

**Kind**: inner method of [<code>createTicker</code>](#module_Ticker..createTicker)  
**Example**  
```js
// Finishes the ticking instance.ticker.die()
```
