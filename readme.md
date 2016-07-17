# env-touch [![Build Status](https://travis-ci.org/ragingwind/env-touch.svg?branch=master)](https://travis-ci.org/ragingwind/env-touch)

> Touch env file from local environments and options


## Install

```
$ npm install --save env-touch
```

## Usage

```js
const touch = require('env-touch');

touch({
  LANG: 'Us',
  SHELL: 'zsh',
  TEST: 1
}, {
  breakLine: '\n'
})
//=> LANG=Us\nSHELL=zsh\nTEST=1
```


## API

### dotenvTouch(input, [output], [options])

#### input

Type: `object`

Object which become to field-value

#### output

Type: 'String'

Path of output file. If it is not given skipping file writing.

#### options

##### breakLine

Type: `String`  
Default: `\n`

Characters for break a like aka CR/LF

## CLI

```
$ npm install --global env-touch
```

```
$ env-touch --help
```

## License

MIT © [ragingwind](http://ragingwind.me)
