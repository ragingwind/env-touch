import fs from 'fs';
import path from 'path';
import test from 'ava';
import tmpdir from 'os-random-tmpdir';
import touch from './';

test('exports array of field-value', t => {
	const text = touch({
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
});

test('write field-value', t => {
	const tmp = tmpdir();
	const output = path.join(tmp, '.env');

	fs.mkdirSync(tmp);

	touch({
		LANG: 'Us',
		SHELL: 'zsh',
		TEST: 1
	}, output);

	const env = fs.readFileSync(output).toString();

	t.is(/^LANG/.test(env), true);
	t.is(/Us\n/.test(env), true);
	t.is(/\nSHELL/.test(env), true);
	t.is(/zsh\n/.test(env), true);
	t.is(/\nTEST/.test(env), true);
	t.is(/1$/.test(env), true);
});
