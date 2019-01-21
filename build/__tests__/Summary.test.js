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
var DATA_WITH_COUNTS = [{
  dogs: {
    value: 5,
    count: 10
  },
  cats: {
    value: 2.5,
    count: 15
  },
  date: '2018-09-15T23:43:32'
}, {
  dogs: {
    value: 2,
    count: 20
  },
  cats: {
    value: 7,
    count: 18
  },
  date: '2018-10-15T23:43:32'
}, {
  dogs: {
    value: 1,
    count: 5
  },
  cats: {
    value: 0.5,
    count: 8
  },
  date: '2018-11-15T23:43:32'
}];
var DATA_WITH_COUNTS_CUSTOM_NAMES = [{
  dogs: {
    cuteness: 5,
    amount: 10
  },
  cats: {
    cuteness: 2.5,
    amount: 15
  },
  date: '2018-09-15T23:43:32'
}, {
  dogs: {
    cuteness: 2,
    amount: 20
  },
  cats: {
    cuteness: 7,
    amount: 18
  },
  date: '2018-10-15T23:43:32'
}, {
  dogs: {
    cuteness: 1,
    amount: 5
  },
  cats: {
    cuteness: 0.5,
    amount: 8
  },
  date: '2018-11-15T23:43:32'
}];
var DATA_WITH_COUNTS_AND_NULLS = [{
  dogs: {
    value: null,
    count: null
  },
  cats: {
    value: 2.5,
    count: 15
  },
  date: '2018-09-15T23:43:32'
}, {
  dogs: {
    value: 2,
    count: 20
  },
  cats: {
    value: null,
    count: null
  },
  date: '2018-10-15T23:43:32'
}, {
  dogs: {
    value: null,
    count: null
  },
  cats: {
    value: 0.5,
    count: 8
  },
  date: '2018-11-15T23:43:32'
}];
var DATA_WITH_COUNTS_ONLY_NULLS = [{
  dogs: {
    value: null,
    count: null
  },
  cats: {
    value: null,
    count: null
  },
  date: '2018-09-15T23:43:32'
}, {
  dogs: {
    value: null,
    count: null
  },
  cats: {
    value: null,
    count: null
  },
  date: '2018-10-15T23:43:32'
}, {
  dogs: {
    value: null,
    count: null
  },
  cats: {
    value: null,
    count: null
  },
  date: '2018-11-15T23:43:32'
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
  describe('weightedAvg', function () {
    test('should get weighted average for data', function () {
      // equals 9 / 13
      var options = {
        weightedAvg: {
          valueKey: 'value',
          countKey: 'count'
        }
      };
      var result = (0, _Summary.getLatestSummaryMetric)(DATA_WITH_COUNTS, ['dogs', 'cats'], 'weightedAvg', options);
      expect(result).toEqual(0.6923076923076923);
    });
    test('should get weighted average with custom names for value and count', function () {
      var options = {
        weightedAvg: {
          valueKey: 'cuteness',
          countKey: 'amount'
        }
      };
      var result = (0, _Summary.getLatestSummaryMetric)(DATA_WITH_COUNTS_CUSTOM_NAMES, ['dogs', 'cats'], 'weightedAvg', options);
      expect(result).toEqual(0.6923076923076923);
    });
    test('should get weighted average when data contains nulls', function () {
      var options = {
        weightedAvg: {
          valueKey: 'value',
          countKey: 'count'
        }
      };
      var result = (0, _Summary.getLatestSummaryMetric)(DATA_WITH_COUNTS_AND_NULLS, ['dogs', 'cats'], 'weightedAvg', options);
      expect(result).toEqual(0.5);
    });
    test('should return null when all values and counts are null', function () {
      var options = {
        weightedAvg: {
          valueKey: 'value',
          countKey: 'count'
        }
      };
      var result = (0, _Summary.getLatestSummaryMetric)(DATA_WITH_COUNTS_ONLY_NULLS, ['dogs', 'cats'], 'weightedAvg', options);
      expect(result).toBe(null);
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
  describe('weightedAvg', function () {
    test('should get weighted average', function () {
      var options = {
        weightedAvg: {
          valueKey: 'value',
          countKey: 'count'
        }
      };
      var result = (0, _Summary.getOverallSummaryMetric)(DATA_WITH_COUNTS, ['dogs', 'cats'], 'weightedAvg', options); // 262.5 / 76

      expect(result).toEqual(3.4539473684210527);
    });
    test('should get weighted average with custom value and count keys', function () {
      var options = {
        weightedAvg: {
          valueKey: 'cuteness',
          countKey: 'amount'
        }
      };
      var result = (0, _Summary.getOverallSummaryMetric)(DATA_WITH_COUNTS_CUSTOM_NAMES, ['dogs', 'cats'], 'weightedAvg', options);
      expect(result).toEqual(3.4539473684210527);
    });
    test('should get weighted average when data contains nulls', function () {
      var options = {
        weightedAvg: {
          valueKey: 'value',
          countKey: 'count'
        }
      };
      var result = (0, _Summary.getOverallSummaryMetric)(DATA_WITH_COUNTS_AND_NULLS, ['dogs', 'cats'], 'weightedAvg', options);
      expect(result).toEqual(1.8953488372093024);
    });
    test('should return null when all counts and values are null', function () {
      var options = {
        weightedAvg: {
          valueKey: 'value',
          countKey: 'count'
        }
      };
      var result = (0, _Summary.getOverallSummaryMetric)(DATA_WITH_COUNTS_ONLY_NULLS, ['dogs', 'cats'], 'weightedAvg', options);
      expect(result).toBe(null);
    });
  });
});