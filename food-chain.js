var FoodChain = function() {},
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js'),
  InvalidStateException = require('./exceptions/InvalidStateException.js');

FoodChain.prototype.verse = function(verseNum) {
  throw new NotImplementedException();
};

FoodChain.prototype.verses = function(startVerse, endVerse) {
  throw new NotImplementedException();
};

FoodChain.prototype.validateVerseNum = function(verseNum) {
  throw new NotImplementedException();
};

FoodChain.prototype.validateVerseRange = function(startVerse, endVerse) {
  throw new NotImplementedException();
};

module.exports = FoodChain;