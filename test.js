import test from 'ava';
import touch from './';
import fs from 'fs';
import path from 'path';

test('exports array of field-value', t => {
	var text = touch({
		LANG: 'Us',
		SHELL: 'zsh',
		TEST: 1
	}, {
		breakLine: '\n'
	});

	t.is(/^LANG/.test(text), true);
	t.is(/Us\n/.test(text), true);
	t.is(/\nSHELL/.test(text), true);
	t.is(/zsh\n/.test(text), true);
	t.is(/\nTEST/.test(text), true);
	t.is(/1$/.test(text), true);

	t.end();
});

test('write field-value', t => {
	fs.mkdirSync('.tmp');

	var output = path.resolve(__dirname, './.tmp/.env');
	var text = touch({
		LANG: 'Us',
		SHELL: 'zsh',
		TEST: 1
	}, output);

	var env = fs.readFileSync(output).toString();

	t.is(/^LANG/.test(env), true);
	t.is(/Us\n/.test(env), true);
	t.is(/\nSHELL/.test(env), true);
	t.is(/zsh\n/.test(env), true);
	t.is(/\nTEST/.test(env), true);
	t.is(/1$/.test(env), true);
	t.ok(true);
	t.end();
});
