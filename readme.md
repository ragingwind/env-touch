# dotenv-touch [![Build Status](https://travis-ci.org/ragingwind/dotenv-touch.svg?branch=master)](https://travis-ci.org/ragingwind/dotenv-touch)

> My incredible module


## Install

```
$ npm install --save dotenv-touch
```


## Usage

```js
const dotenvTouch = require('dotenv-touch');

dotenvTouch('unicorns');
//=> 'unicorns & rainbows'
```


## API

### dotenvTouch(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global dotenv-touch
```

```
$ dotenv-touch --help

  Usage
    dotenv-touch [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ dotenv-touch
    unicorns & rainbows
    $ dotenv-touch ponies
    ponies & rainbows
```


## License

MIT © [ragingwind](http://ragingwind.me)
