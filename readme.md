# dotenv-touch [![Build Status](https://travis-ci.org/ragingwind/dotenv-touch.svg?branch=master)](https://travis-ci.org/ragingwind/dotenv-touch)

> Touch .env file from local environments and options


## Install

```
$ npm install --save dotenv-touch
```

## Usage

```js
const touch = require('dotenv-touch');

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
$ npm install --global dotenv-touch
```

```
$ dotenv-touch --help

Usage
  $ dotenv-touch [environments] [options]

Options
  --process: true or list of name of environments in process.env to pick up
  --output: path for env file

Examples,
  $ dotenv-touch API_KEY=YOUR_APIKEY PRODUCTION=false SIGNATURE_ID=YOUR_ID,
  $ dotenv-touch API_KEY=YOUR_APIKEY PRODUCTION=false --output=./config,
  $ dotenv-touch --process,
  $ dotenv-touch --process=SHELL,LOGNAME,LANG,
  $ TEST=1 node cli.js API_KEY=key PRODUCTION=\my production\ --process=SHELL,LOGNAME,LANG,TEST,
  >> SHELL: \/bin/zsh\,
  		LOGNAME: \ragingwind\,
  		LANG: \en_US.UTF-8\,
  		TEST: \1\,
  		API_KEY: \key\,
  		PRODUCTION: \my production\
```

## License

MIT © [ragingwind](http://ragingwind.me)
