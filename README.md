[![NPM version][npm-version-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-url] [![MIT License][license-image]][license-url] [![Build Status][travis-image]][travis-url]

A tiny javascript library to count in natural language e.g. Zero, One, Two, Three, and beyond.

## Documentation

### Basic Usage

Here's all this does so far:

    // Factory's name will be "FactoryFive"
    _n = 'Factory' + count(5).camel();
    
    // Unit tests
    test.equal(count(764).camel(), '"SevenHundredSixtyFour"');    
   
## [Changelog](CHANGELOG.md)

## [Contributing](CONTRIBUTING.md)

## License

Count.js is freely distributable under the terms of the [MIT license](LICENSE).

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/count
[npm-version-image]: http://img.shields.io/npm/v/counts.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/counts.svg?style=flat

[travis-url]: http://travis-ci.org/nickckaye/count
[travis-image]: http://img.shields.io/travis/nickckaye/count/master.svg?style=flat
