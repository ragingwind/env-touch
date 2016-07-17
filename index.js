'use strict';

const fs = require('fs');
const fv = require('field-value');

module.exports = function (objs, output, opts) {
	if (typeof objs !== 'object') {
		throw new TypeError('Expected a object');
	}

	if (typeof output === 'object') {
		opts = output;
		output = null;
	}

	opts = Object.assign({}, opts, {
		breakLine: '\n'
	});

	const text = fv.pairify(objs).join(opts.breakLine).replace(/"/g, '');

	if (output) {
		fs.writeFileSync(output, text);
	}

	return text;
};
