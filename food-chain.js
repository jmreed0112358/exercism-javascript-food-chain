'use strict'

var FoodChain = function() {},
  Constants = require('./constants.js'),
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js'),
  InvalidStateException = require('./exceptions/InvalidStateException.js');

FoodChain.prototype.verse = function(verseNum) {
  var output = '';

  if(this.validateVerseNum(verseNum)) {
    output = this.genFirstLine(verseNum) + this.genSecondLine(verseNum) +
      this.genStemLines(verseNum) + this.genClosingLine(verseNum);
  } else {
    throw new InvalidParameterException('verseNum was not in the correct range');
  }

  return output;
};

FoodChain.prototype.verses = function(startVerse, endVerse) {
  var i = 0,
    output = '';

  if (this.validateVerseRange(startVerse, endVerse)) {
    for (i = startVerse ; i <= endVerse ; i++) {
      output = output + this.verse(i) + '\n';
    }

    return output;
  } else {
    throw new InvalidParameterException('Invalid range');
  }
};

// Line generators.
/*
 * Verses 1, 3-7: expected output.
 * Verse 2: expected output + special spider portion.
 * Verse 8: No output.
 */
FoodChain.prototype.genFirstLine = function(verseNum) {
  var output = '';

  if (1 <= verseNum && 7 >= verseNum) {
    output = Constants.FIRST_LINE + ' ' + Constants.ANIMALS[verseNum - 1] + '.\n';
    if ( 2 === verseNum) {
      output = output += 'It ' + Constants.SPIDER_EXTRA + '.\n';
    }
  } else if (8 === verseNum) {
    output = '';
  } else {
    throw new InvalidParameterException('versenum was not in the correct range');
  }

  return output;
};

/*
 * Verses 1, 2: No output.
 * Verses 3-7: expected output.
 * Verse 8: No output
 */
FoodChain.prototype.genSecondLine = function(verseNum) {
  if (1 === verseNum || 2 === verseNum || 8 === verseNum) {
    return '';
  } else if ( 3 <= verseNum && 7 >= verseNum) {
    return Constants.SECOND_LINES[verseNum - 3] + '\n';
  } else {
    throw new InvalidParameterException('verseNum was not in the correct range');
  }
};

/*
 * Verse 1, 8: No output.
 * Verses 2-7: expected output.
 */
FoodChain.prototype.genStemLines = function(verseNum) {
  var i = 0,
    output = '';

  if (2 <= verseNum && 7 >= verseNum) {
    for (i = verseNum ; i > 1 ; i--) {
      if (i === 3) {
        output = output + Constants.STEM_ONE + Constants.ANIMALS[i-1] +
          Constants.STEM_TWO + Constants.ANIMALS[i-2] +
          ' that ' + Constants.SPIDER_EXTRA;
      } else {
        output = output + Constants.STEM_ONE + Constants.ANIMALS[i-1] +
          Constants.STEM_TWO + Constants.ANIMALS[i-2];
      }
      output = output + '.\n';
    }
  } else if ( 1 === verseNum || 8 === verseNum) {
    output = '';
  } else {
    throw new InvalidParameterException('verseNum was not in the correct range');
  }

  return output;
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
