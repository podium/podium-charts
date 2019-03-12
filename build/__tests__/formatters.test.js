"use strict";

var _formatters = require("../utils/formatters");

describe('formatters', function () {
  describe('roundToPlaces', function () {
    it('should round thousands', function () {
      var result = (0, _formatters.roundToPlaces)(1)(5000);
      expect(result).toEqual('5,000');
    });
    it('should cast nulls to zeros', function () {
      var result = (0, _formatters.roundToPlaces)(1)(null);
      expect(result).toEqual('0');
    });
  });
  describe('nullToValue', function () {
    it('should delegate to the specified formatter with values', function () {
      var formatter = (0, _formatters.nullToValue)(_formatters.commatize, 'N/A');
      var result = formatter(9001, 'facebook');
      expect(result).toEqual('9,001');
    });
    it('should return the fallback string when the value is null', function () {
      var formatter = (0, _formatters.nullToValue)(_formatters.commatize, 'N/A');
      var result = formatter(null, 'facebook');
      expect(result).toEqual('N/A');
    });
    it('should pass the dataKey to the delegate', function () {
      var delegate = function delegate(value, dataKey) {
        return "".concat(dataKey, ":").concat(value);
      };

      var formatter = (0, _formatters.nullToValue)(delegate, 'N/A');
      var result = formatter(9001, 'facebook');
      expect(result).toEqual('facebook:9001');
    });
    it('should throw when called without a fallback value', function () {
      expect(function () {
        var formatter = (0, _formatters.nullToValue)(_formatters.commatize); // No fallback value specified!

        console.log(formatter(5000, 'facebook')); // Unreachable
      }).toThrow('No fallback value specified for formatter');
    });
  });
});