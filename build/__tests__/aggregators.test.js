"use strict";

var _aggregators = require("../Charts/utils/aggregators");

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

var getLast = function getLast(data) {
  return data[data.length - 1];
};

describe('getRowSummaryMetric', function () {
  describe('total', function () {
    test('should sum the current month data', function () {
      var aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };
      var standardResult = (0, _aggregators.getRowSummaryMetric)(getLast(STANDARD), aggregationOptions);
      var missingResult = (0, _aggregators.getRowSummaryMetric)(getLast(MISSING_VALUES), aggregationOptions);
      expect(standardResult).toEqual(10);
      expect(missingResult).toEqual(6);
    });
    test('should return 0 when the final data point has no values', function () {
      var aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };
      var result = (0, _aggregators.getRowSummaryMetric)(getLast(DATA_POINT_WITH_ALL_NULLS), aggregationOptions);
      expect(result).toEqual(0);
    });
  });
  describe('avg', function () {
    test('should average the current month data', function () {
      var aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };
      var result = (0, _aggregators.getRowSummaryMetric)(getLast(STANDARD), aggregationOptions);
      expect(result).toEqual(5);
    });
    test('should leave null values out of average', function () {
      var aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };
      var result = (0, _aggregators.getRowSummaryMetric)(getLast(MISSING_VALUES), aggregationOptions);
      expect(result).toEqual(6);
    });
    test('should return null when the final data point has no values', function () {
      var aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };
      var result = (0, _aggregators.getRowSummaryMetric)(getLast(DATA_POINT_WITH_ALL_NULLS), aggregationOptions);
      expect(result).toEqual(null);
    });
  });
  describe('weightedAvg', function () {
    test('should get weighted average for data', function () {
      var aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: {
          valueKey: 'value',
          countKey: 'count'
        }
      }; // equals 9 / 13

      var result = (0, _aggregators.getRowSummaryMetric)(getLast(DATA_WITH_COUNTS), aggregationOptions);
      expect(result).toEqual(0.6923076923076923);
    });
    test('should get weighted average with custom names for value and count', function () {
      var aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: {
          valueKey: 'cuteness',
          countKey: 'amount'
        }
      };
      var result = (0, _aggregators.getRowSummaryMetric)(getLast(DATA_WITH_COUNTS_CUSTOM_NAMES), aggregationOptions);
      expect(result).toEqual(0.6923076923076923);
    });
    test('should get weighted average when data contains nulls', function () {
      var aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: {
          valueKey: 'value',
          countKey: 'count'
        }
      };
      var result = (0, _aggregators.getRowSummaryMetric)(getLast(DATA_WITH_COUNTS_AND_NULLS), aggregationOptions);
      expect(result).toEqual(0.5);
    });
    test('should return null when all values and counts are null', function () {
      var aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: {
          valueKey: 'value',
          countKey: 'count'
        }
      };
      var result = (0, _aggregators.getRowSummaryMetric)(getLast(DATA_WITH_COUNTS_ONLY_NULLS), aggregationOptions);
      expect(result).toBe(null);
    });
  });
});
describe('getOverallSummaryMetric', function () {
  describe('total', function () {
    test('should return null when given null data', function () {
      var result = (0, _aggregators.getOverallSummaryMetric)(null);
      expect(result).toEqual(null);
    });
    test('should sum data from every month', function () {
      var aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };
      var result = (0, _aggregators.getOverallSummaryMetric)(STANDARD, aggregationOptions);
      expect(result).toEqual(44);
    });
    test('should sum data from every month when some values are missing', function () {
      var aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };
      var result = (0, _aggregators.getOverallSummaryMetric)(MISSING_VALUES, aggregationOptions);
      expect(result).toEqual(35);
    });
    test('should sum data with rows containing all nulls', function () {
      var aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };
      var result = (0, _aggregators.getOverallSummaryMetric)(DATA_POINT_WITH_ALL_NULLS, aggregationOptions);
      expect(result).toEqual(29);
    });
    test('should return 0 if all data is null', function () {
      var aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };
      var result = (0, _aggregators.getOverallSummaryMetric)(DATA_WITH_ALL_NULLS, aggregationOptions);
      expect(result).toEqual(0);
    });
  });
  describe('avg', function () {
    test('should average data from every month', function () {
      var aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };
      var result = (0, _aggregators.getOverallSummaryMetric)(STANDARD, aggregationOptions);
      expect(result).toEqual(5.5);
    });
    test('should leave null values out of average from every month', function () {
      var aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };
      var missingResult = (0, _aggregators.getOverallSummaryMetric)(MISSING_VALUES, aggregationOptions);
      var allNullsResult = (0, _aggregators.getOverallSummaryMetric)(DATA_POINT_WITH_ALL_NULLS, aggregationOptions);
      expect(missingResult).toEqual(5.833333333333333);
      expect(allNullsResult).toEqual(5.8);
    });
    test('should return null if all data is null', function () {
      var aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };
      var result = (0, _aggregators.getOverallSummaryMetric)(DATA_WITH_ALL_NULLS, aggregationOptions);
      expect(result).toEqual(null);
    });
  });
  describe('weightedAvg', function () {
    test('should get weighted average', function () {
      var aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: {
          valueKey: 'value',
          countKey: 'count'
        }
      }; // 262.5 / 76

      var result = (0, _aggregators.getOverallSummaryMetric)(DATA_WITH_COUNTS, aggregationOptions);
      expect(result).toEqual(3.4539473684210527);
    });
    test('should get weighted average with custom value and count keys', function () {
      var aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: {
          valueKey: 'cuteness',
          countKey: 'amount'
        }
      };
      var result = (0, _aggregators.getOverallSummaryMetric)(DATA_WITH_COUNTS_CUSTOM_NAMES, aggregationOptions);
      expect(result).toEqual(3.4539473684210527);
    });
    test('should get weighted average when data contains nulls', function () {
      var aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: {
          valueKey: 'value',
          countKey: 'count'
        }
      };
      var result = (0, _aggregators.getOverallSummaryMetric)(DATA_WITH_COUNTS_AND_NULLS, aggregationOptions);
      expect(result).toEqual(1.8953488372093024);
    });
    test('should return null when all counts and values are null', function () {
      var aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: {
          valueKey: 'value',
          countKey: 'count'
        }
      };
      var result = (0, _aggregators.getOverallSummaryMetric)(DATA_WITH_COUNTS_ONLY_NULLS, aggregationOptions);
      expect(result).toBe(null);
    });
  });
  describe('calculateTrend', function () {
    test('should return upward trend', function () {
      var result = (0, _aggregators.calculateTrend)(1, 2);
      expect(result).toEqual('up');
    });
    test('should return downward trend', function () {
      var result = (0, _aggregators.calculateTrend)(3, 2);
      expect(result).toEqual('down');
    });
    test('should return neutral trend with equal data', function () {
      var result = (0, _aggregators.calculateTrend)(3, 3);
      expect(result).toEqual('neutral');
    });
    test('should return neutral trend when there is no previous data', function () {
      var result = (0, _aggregators.calculateTrend)(null, 3);
      expect(result).toEqual('neutral');
    });
    test('should return neutral trend when there is no current data', function () {
      var result = (0, _aggregators.calculateTrend)(3, null);
      expect(result).toEqual('neutral');
    });
  });
});