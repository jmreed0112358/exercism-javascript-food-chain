'use strict'

var FoodChain = function() {},
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js'),
  InvalidStateException = require('./exceptions/InvalidStateException.js');

const MIN = 1;
const MAX = 8;

FoodChain.prototype.verse = function(verseNum) {
  throw new NotImplementedException();
};

FoodChain.prototype.verses = function(startVerse, endVerse) {
  throw new NotImplementedException();
};

FoodChain.prototype.validateVerseNum = function(verseNum) {
  if (typeof verseNum !== 'number') {
    throw new InvalidParameterException('validateVerseNum takes a number');
  }

  return (MIN <= verseNum && MAX >= verseNum);
};

FoodChain.prototype.validateVerseRange = function(startVerse, endVerse) {
  if (typeof startVerse !== 'number' || typeof endVerse !== 'number') {
    throw new InvalidParameterException('validateVerseRange takes two numbers');
  }

  return (endVerse >= startVerse
    && MIN <= startVerse && MAX >= startVerse
    && MIN <= endVerse && MAX >= endVerse);
};

module.exports = FoodChain;
