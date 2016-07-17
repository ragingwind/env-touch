#!/usr/bin/env node
'use strict';

var path = require('path');
var meow = require('meow');
var touch = require('./');

var cli = meow([`
  Usage
    $ dotenv-touch [environments]

  Options
    --process

  Examples
    $ dotenv-touch API_KEY=YOUR_APIKEY PRODUCTION=false SIGNATURE_ID=YOUR_ID
    $ dotenv-touch API_KEY=YOUR_APIKEY PRODUCTION=false --output=./config
    $ dotenv-touch --process
    $ dotenv-touch --process=SHELL,LOGNAME,LANG
    $ TEST=1 node cli.js API_KEY=key PRODUCTION=\'my production\' --process=LOGNAME,LANG,TEST
    >> LOGNAME: ragingwind
       LANG: en_US.UTF-8
       TEST: 1
       API_KEY: key
       PRODUCTION: 'my production'
`]);

function extractValue(input) {
	var objs = {};

	input.forEach(function (prop) {
		prop = prop.split('=');
		if (prop.length < 2) {
			throw new Error('Property missing a part of value. ' + prop);
		}
		objs[prop[0]] = prop[1];
	});

	return objs;
}

function filterEnv(filter) {
	var objs = {};

	if (filter === true) {
		objs = process.env;
	} else if (filter) {
		filter.split(',').forEach(function (m) {
			objs[m] = process.env[m] || '';
		});
	}

	return objs;
}

if (!cli.flags.output) {
	cli.showHelp(-1);
}

touch(
	Object.assign({},
		filterEnv(cli.flags.process),
		extractValue(cli.input)),
	path.resolve(process.cwd(),
	cli.flags.output || './')
);
