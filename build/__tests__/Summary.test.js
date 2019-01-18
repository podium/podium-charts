"use strict";

var _Summary = require("../Summary");

var STANDARD = [{
  dogs: 5,
  cats: 8,
  date: '2018-09-15T23:43:32'
}, {
  dogs: 10,
  cats: 4,
  date: '2018-10-15T23:43:32'
}, {
  dogs: 0,
  cats: 7,
  date: '2018-11-15T23:43:32'
}, {
  dogs: 6,
  cats: 4,
  date: '2018-12-15T23:43:32'
}];
var MISSING_VALUES = [{
  dogs: null,
  cats: 8,
  date: '2018-09-15T23:43:32'
}, {
  dogs: 10,
  cats: 4,
  date: '2018-10-15T23:43:32'
}, {
  dogs: 0,
  cats: 7,
  date: '2018-11-15T23:43:32'
}, {
  dogs: 6,
  cats: null,
  date: '2018-12-15T23:43:32'
}];
var DATA_POINT_WITH_ALL_NULLS = [{
  dogs: null,
  cats: 8,
  date: '2018-09-15T23:43:32'
}, {
  dogs: 10,
  cats: 4,
  date: '2018-10-15T23:43:32'
}, {
  dogs: 0,
  cats: 7,
  date: '2018-11-15T23:43:32'
}, {
  dogs: null,
  cats: null,
  date: '2018-12-15T23:43:32'
}];
var DATA_WITH_ALL_NULLS = [{
  dogs: null,
  cats: null,
  date: '2018-09-15T23:43:32'
}, {
  dogs: null,
  cats: null,
  date: '2018-12-15T23:43:32'
}];
describe('getLatestSummaryMetric', function () {
  describe('total', function () {
    test('should sum the current month data', function () {
      expect((0, _Summary.getLatestSummaryMetric)(STANDARD, ['dogs', 'cats'], 'total')).toEqual(10);
      expect((0, _Summary.getLatestSummaryMetric)(MISSING_VALUES, ['dogs', 'cats'], 'total')).toEqual(6);
    });
    test('should return 0 when the final data point has no values', function () {
      expect((0, _Summary.getLatestSummaryMetric)(DATA_POINT_WITH_ALL_NULLS, ['dogs', 'cats'], 'total')).toEqual(0);
    });
  });
  describe('avg', function () {
    test('should average the current month data', function () {
      expect((0, _Summary.getLatestSummaryMetric)(STANDARD, ['dogs', 'cats'], 'avg')).toEqual(5);
    });
    test('should leave null values out of average', function () {
      expect((0, _Summary.getLatestSummaryMetric)(MISSING_VALUES, ['dogs', 'cats'], 'avg')).toEqual(6);
    });
    test('should return null when the final data point has no values', function () {
      expect((0, _Summary.getLatestSummaryMetric)(DATA_POINT_WITH_ALL_NULLS, ['dogs', 'cats'], 'avg')).toEqual(null);
    });
  });
});
describe('getOverallSummaryMetric', function () {
  describe('total', function () {
    test('should sum data from every month', function () {
      expect((0, _Summary.getOverallSummaryMetric)(STANDARD, ['dogs', 'cats'], 'total')).toEqual(44);
    });
    test('should sum data from every month when some values are missing', function () {
      expect((0, _Summary.getOverallSummaryMetric)(MISSING_VALUES, ['dogs', 'cats'], 'total')).toEqual(35);
    });
    test('should sum data with rows containing all nulls', function () {
      expect((0, _Summary.getOverallSummaryMetric)(DATA_POINT_WITH_ALL_NULLS, ['dogs', 'cats'], 'total')).toEqual(29);
    });
    test('should return 0 if all data is null', function () {
      expect((0, _Summary.getOverallSummaryMetric)(DATA_WITH_ALL_NULLS, ['dogs', 'cats'], 'total')).toEqual(0);
    });
  });
  describe('avg', function () {
    test('should average data from every month', function () {
      expect((0, _Summary.getOverallSummaryMetric)(STANDARD, ['dogs', 'cats'], 'avg')).toEqual(5.5);
    });
    test('should leave null values out of average from every month', function () {
      expect((0, _Summary.getOverallSummaryMetric)(MISSING_VALUES, ['dogs', 'cats'], 'avg')).toEqual(5.833333333333333);
      expect((0, _Summary.getOverallSummaryMetric)(DATA_POINT_WITH_ALL_NULLS, ['dogs', 'cats'], 'avg')).toEqual(5.8);
    });
    test('should return null if all data is null', function () {
      expect((0, _Summary.getOverallSummaryMetric)(DATA_WITH_ALL_NULLS, ['dogs', 'cats'], 'avg')).toEqual(null);
    });
  });
});