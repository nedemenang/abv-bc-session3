
//const myApp. = require('../app/library.js');

(function(){
  'use strict';
  
  const myApp = require('../app/library.js');

  describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(myApp.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(myApp.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(myApp.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(myApp.reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(myApp.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(myApp.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(myApp.reverseString('misc')).toEqual('csim');
    });

  });

});

describe("Find missing number two lists: ", function() {

  describe("Case for en empty list", function() {

    it("should return 0 for empty list", function() {
      expect(myApp.findMissing([], [])).toEqual(0);
    });

  });

  describe("Case for lists with the same entries", function() {

    it("should return 0 for [2],[2]", function() {
      expect(myApp.findMissing([2], [2])).toEqual(0);
    });

    it("should return 0 for [4],[4]", function() {
      expect(myApp.findMissing([4], [4])).toEqual(0);
    });

    it("should return 0 for [7],[7]", function() {
      expect(myApp.findMissing([7], [7])).toEqual(0);
    });

  });

  describe("Case for lists with similar entries and a missing number", function() {

    it("should return 5 for [1,2],[1,2,5]", function() {
      expect(myApp.findMissing([1, 2], [1, 2, 5])).toEqual(5);
    });

    it("should return 10 for [4, 6, 8],[4, 6, 8, 10]", function() {
      expect(myApp.findMissing([4, 6, 8], [4, 6, 8, 10])).toEqual(10);
    });

    it("should return 1 for [5, 4, 7, 6, 11, 66],[5, 4, 1, 7, 6, 11, 66]", function() {
      expect(myApp.findMissing([5, 4, 7, 6, 11, 66], [5, 4, 1, 7, 6, 11, 66])).toEqual(1);
    });

  });

});
  
})();