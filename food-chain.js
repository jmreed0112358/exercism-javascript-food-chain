'use strict'

var FoodChain = function() {},
  Constants = require('./constants.js'),
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js'),
  InvalidStateException = require('./exceptions/InvalidStateException.js');

FoodChain.prototype.verse = function(verseNum) {
  // 1, 2, and 8 are special cases.  3-7 are 'normal'
  if (1 === verseNum) {
    // Special case. (fly)
  } else if (2 === verseNum) {
    // Special case. (spider)
  } else if (3 <= verseNum && 7 >= verseNum) {
    // Normal case (4-part song generation.)
  } else if (8 === verseNum) {
    // Special case. (horse)
  } else {
    // Garbage input..
  }
};

FoodChain.prototype.verses = function(startVerse, endVerse) {
  throw new NotImplementedException();
};

// Line generators.
FoodChain.prototype.genFirstLine = function(verseNum) {
  throw new NotImplementedException();
};

FoodChain.prototype.genSecondLine = function(verseNum) {
  throw new NotImplementedException();
};

FoodChain.prototype.genStemLines = function(verseNum) {
  throw new NotImplementedException();
};

FoodChain.prototype.genClosingLine = function(verseNum) {
  if (1 <= verseNum && 7 >= verseNum) {
    return Constants.FINAL_LINES[0] + '\n';
  } else if ( 8 === verseNum) {
    return Constants.FINAL_LINES[1] + '\n';
  } else {
    throw new InvalidParameterException('verseNum was not in the correct range');
  }
};

FoodChain.prototype.validateVerseNum = function(verseNum) {
  if (typeof verseNum !== 'number') {
    throw new InvalidParameterException('validateVerseNum takes a number');
  }

  return (Constants.MIN <= verseNum && Constants.MAX >= verseNum);
};

FoodChain.prototype.validateVerseRange = function(startVerse, endVerse) {
  if (typeof startVerse !== 'number' || typeof endVerse !== 'number') {
    throw new InvalidParameterException('validateVerseRange takes two numbers');
  }

  return (endVerse >= startVerse
    && Constants.MIN <= startVerse && Constants.MAX >= startVerse
    && Constants.MIN <= endVerse && Constants.MAX >= endVerse);
};

module.exports = FoodChain;
