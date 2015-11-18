'use strict';

var filedValue = require('object-field-value');
var fs = require('fs');

module.exports = function (objs, output, opts) {
	if (typeof objs !== 'object') {
		throw new TypeError('Expected a object');
	}

	if (typeof output === 'object') {
		opts = output;
		output = null;
	}

	opts = opts || {
		breakLine: '\n'
	};

	var text = filedValue(objs).join(opts.breakLine);

	if (output) {
		fs.writeFileSync(output, text);
	}

	return text;
};
