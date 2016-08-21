'use strict'

const MIN = 1;
const MAX = 8;

const SPIDER_EXTRA = 'that wriggled and jiggled and tickled inside her.';
const ANIMALS = [ 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow' ];
const SECOND_LINES = [
	'How absurd to swallow a bird!',
	'Imagine that, to swallow a cat!',
	'What a hog, to swallow a dog!',
	'Just opened her throat and swallowed a goat!',
	'I don\'t know how she swallowed a cow!'
];
const FINAL_LINES = [
	'I don\'t know why she swallowed the fly. Perhaps she\'ll die.',
	'I know an old lady who swallowed a horse.\nShe\'s dead, of course!'
];

module.exports = { MIN, MAX, SPIDER_EXTRA, ANIMALS, SECOND_LINES, FINAL_LINES };