'use strict'

var FoodChain = require('./food-chain'),
  Constants = require('./constants.js'),
  NotImplementedException = require('./exceptions/NotImplementedException.js'),
  InvalidParameterException = require('./exceptions/InvalidParameterException.js'),
  InvalidStateException = require('./exceptions/InvalidStateException.js');

describe('verse()', function () {
  var song = new FoodChain();

  it('fly', function () {
    var expected = 'I know an old lady who swallowed a fly.\n' +
    'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    expect(song.verse(1)).toEqual(expected);
  });

  it('spider', function () {
    var expected = 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    expect(song.verse(2)).toEqual(expected);
  });

  it('bird', function () {
    var expected = 'I know an old lady who swallowed a bird.\n' +
      'How absurd to swallow a bird!\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    expect(song.verse(3)).toEqual(expected);
  });

  it('cat', function () {
    var expected = 'I know an old lady who swallowed a cat.\n' +
      'Imagine that, to swallow a cat!\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(4)).toEqual(expected);
  });

  it('dog', function () {
    var expected = 'I know an old lady who swallowed a dog.\n' +
      'What a hog, to swallow a dog!\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(5)).toEqual(expected);
  });

  it('goat', function () {
    var expected = 'I know an old lady who swallowed a goat.\n' +
      'Just opened her throat and swallowed a goat!\n' +
      'She swallowed the goat to catch the dog.\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(6)).toEqual(expected);
  });

  it('cow', function () {
    var expected = 'I know an old lady who swallowed a cow.\n' +
      'I don\'t know how she swallowed a cow!\n' +
      'She swallowed the cow to catch the goat.\n' +
      'She swallowed the goat to catch the dog.\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(7)).toEqual(expected);
  });

  xit('horse', function () {
    var expected = 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';

    expect(song.verse(8)).toEqual(expected);
  });
});

describe('verses()', function() {
  var song = new FoodChain();

  it('multiple verses', function () {
    var expected = '';

    expected += 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';

    expect(song.verses(1, 2)).toEqual(expected);
  });

  it('the whole song', function () {
    var expected = '';

    expected += 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a bird.\n' +
    'How absurd to swallow a bird!\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
     expected += 'I know an old lady who swallowed a cat.\n' +
    'Imagine that, to swallow a cat!\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a dog.\n' +
    'What a hog, to swallow a dog!\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a goat.\n' +
    'Just opened her throat and swallowed a goat!\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a cow.\n' +
    'I don\'t know how she swallowed a cow!\n' +
    'She swallowed the cow to catch the goat.\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n\n';

    expect(song.verses(1, 8)).toEqual(expected);
  });
});

describe('genFirstLine()', function() {
  var song = new FoodChain();

  it('returns expected response for valid verse number: 1', function() {
    expect(song.genFirstLine(1)).toEqual('I know an old lady who swallowed a fly.\n');
  });

  it('returns expected response for valid verse number: 2', function() {
    expect(song.genFirstLine(2)).toEqual('I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n');
  });

  it('returns expected response for valid verse number: 3', function() {
    expect(song.genFirstLine(3)).toEqual('I know an old lady who swallowed a bird.\n');
  });

  it('returns expected response for valid verse number: 4', function() {
    expect(song.genFirstLine(4)).toEqual('I know an old lady who swallowed a cat.\n');
  });

  it('returns expected response for valid verse number: 5', function() {
    expect(song.genFirstLine(5)).toEqual('I know an old lady who swallowed a dog.\n');
  });

  it('returns expected response for valid verse number: 6', function() {
    expect(song.genFirstLine(6)).toEqual('I know an old lady who swallowed a goat.\n');
  });

  it('returns expected response for valid verse number: 7', function() {
    expect(song.genFirstLine(7)).toEqual('I know an old lady who swallowed a cow.\n');
  });

  it('returns expected response for valid verse number: 8', function() {
    expect(song.genFirstLine(8)).toEqual('');
  });
});

describe('genSecondLine()', function() {
  var song = new FoodChain();

  it('returns expected response for valid verse number: 1', function() {
    expect(song.genSecondLine(1)).toEqual('');
  });

  it('returns expected response for valid verse number: 2', function() {
    expect(song.genSecondLine(2)).toEqual('');
  });

  it('returns expected response for valid verse number: 3', function() {
    expect(song.genSecondLine(3)).toEqual('How absurd to swallow a bird!\n');
  });

  it('returns expected response for valid verse number: 4', function() {
    expect(song.genSecondLine(4)).toEqual('Imagine that, to swallow a cat!\n');
  });

  it('returns expected response for valid verse number: 5', function() {
    expect(song.genSecondLine(5)).toEqual('What a hog, to swallow a dog!\n');
  });

  it('returns expected response for valid verse number: 6', function() {
    expect(song.genSecondLine(6)).toEqual('Just opened her throat and swallowed a goat!\n');
  });

  it('returns expected response for valid verse number: 7', function() {
    expect(song.genSecondLine(7)).toEqual('I don\'t know how she swallowed a cow!\n');
  });

  it('returns expected response for valid verse number: 8', function() {
    expect(song.genSecondLine(8)).toEqual('');
  });
});

describe('genStemLines()', function() {
  var song = new FoodChain();

  it('returns expected response for valid verse number: 1', function() {
    expect(song.genStemLines(1)).toEqual('');
  });

  it('returns expected response for valid verse number: 2', function() {
    expect(song.genStemLines(2)).toEqual('She swallowed the spider to catch the fly.\n');
  });

  it('returns expected response for valid verse number: 3', function() {
    expect(song.genStemLines(3)).toEqual('She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n');
  });

  it('returns expected response for valid verse number: 4', function() {
    expect(song.genStemLines(4)).toEqual('She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n');
  });

  it('returns expected response for valid verse number: 5', function() {
    expect(song.genStemLines(5)).toEqual('She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n');
  });

  it('returns expected response for valid verse number: 6', function() {
    expect(song.genStemLines(6)).toEqual('She swallowed the goat to catch the dog.\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n');
  });

  it('returns expected response for valid verse number: 7', function() {
    expect(song.genStemLines(7)).toEqual('She swallowed the cow to catch the goat.\n' +
      'She swallowed the goat to catch the dog.\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n');
  });

  it('returns expected response for valid verse number: 8', function() {
    expect(song.genStemLines(8)).toEqual('');
  });
});

describe('genClosingLine()', function() {
  var song = new FoodChain();

  it('returns expected response for valid verse number: verses 1-7', function() {
    var i = 0;

    for (i = Constants.MIN ; i <= 7 ; i++) {
      var actual = song.genClosingLine(i);
      expect(song.genClosingLine(i)).toEqual('I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n');
    }
  });

  it('returns expected response for valid verse number: verse 8', function() {
    expect(song.genClosingLine(8)).toEqual('I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n');
  });
});

describe('validateVerseNum()', function() {
  var song = new FoodChain();

  it('throws InvalidParameterException when given a non-number input', function () {
    expect(function() {
      song.validateVerseNum({});
    }).toThrow(
      new InvalidParameterException('validateVerseNum takes a number'));
  });

  it('returns true for all valid verse numbers', function() {
    var i = 0;
    for (i = Constants.MIN ; i <= Constants.MAX ; i++) {
      expect(song.validateVerseNum(i)).toEqual(true);
    }
  });

  it('returns false with input of zero', function() {
    expect(song.validateVerseNum(0)).toEqual(false);
  });

  it('returns false with negative input', function() {
    expect(song.validateVerseNum(-10)).toEqual(false);
  });

  it('returns false with input > Constants.MAX', function() {
    expect(song.validateVerseNum(1000)).toEqual(false);
  });
});

describe('validateVerseRange()', function() {
  var song = new FoodChain();

  it('throws InvalidParameterException when given non-number inputs: startVerse', function() {
    expect(function() {
      song.validateVerseRange({}, 5);
    }).toThrow(
      new InvalidParameterException('validateVerseRange takes two numbers'));
  });

  it('throws InvalidParameterException when given non-number inputs: endVerse', function() {
    expect(function() {
      song.validateVerseRange(1, {});
    }).toThrow(
      new InvalidParameterException('validateVerseRange takes two numbers'));
  });

  it('returns false for negative inputs: startVerse', function() {
    expect(song.validateVerseRange(-1, 5)).toEqual(false);
  });

  it('returns false for inputs of zero: startVerse', function() {
    expect(song.validateVerseRange(0, 3)).toEqual(false);
  });

  it('returns false for inputs out of range: startVerse', function() {
    expect(song.validateVerseRange(1000, 2000)).toEqual(false);
  });

  it('returns false for inputs out of range: endVerse', function() {
    expect(song.validateVerseRange(3, 1000)).toEqual(false);
  });

  it('returns true for valid ranges', function() {
    var i = 0,
      j = 0;

    for (i = Constants.MIN ; i <= Constants.MAX ; i++) {
      for (j = i; j <= Constants.MAX ; j++) {
        expect(song.validateVerseRange(i, j)).toEqual(true);
      }
    }
  });

  it('returns false when startVerse > endVerse', function() {
    expect(song.validateVerseRange(5, 2)).toEqual(false);
  });
});
