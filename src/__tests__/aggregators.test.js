import { getRowSummaryMetric, getOverallSummaryMetric } from '../aggregators';

const STANDARD = [
  { dogs: 5, cats: 8, date: '2018-09-15T23:43:32' },
  { dogs: 10, cats: 4, date: '2018-10-15T23:43:32' },
  { dogs: 0, cats: 7, date: '2018-11-15T23:43:32' },
  { dogs: 6, cats: 4, date: '2018-12-15T23:43:32' }
];

const MISSING_VALUES = [
  { dogs: null, cats: 8, date: '2018-09-15T23:43:32' },
  { dogs: 10, cats: 4, date: '2018-10-15T23:43:32' },
  { dogs: 0, cats: 7, date: '2018-11-15T23:43:32' },
  { dogs: 6, cats: null, date: '2018-12-15T23:43:32' }
];

const DATA_POINT_WITH_ALL_NULLS = [
  { dogs: null, cats: 8, date: '2018-09-15T23:43:32' },
  { dogs: 10, cats: 4, date: '2018-10-15T23:43:32' },
  { dogs: 0, cats: 7, date: '2018-11-15T23:43:32' },
  { dogs: null, cats: null, date: '2018-12-15T23:43:32' }
];

const DATA_WITH_ALL_NULLS = [
  { dogs: null, cats: null, date: '2018-09-15T23:43:32' },
  { dogs: null, cats: null, date: '2018-12-15T23:43:32' }
];

const DATA_WITH_COUNTS = [
  {
    dogs: { value: 5, count: 10 },
    cats: { value: 2.5, count: 15 },
    date: '2018-09-15T23:43:32'
  },
  {
    dogs: { value: 2, count: 20 },
    cats: { value: 7, count: 18 },
    date: '2018-10-15T23:43:32'
  },
  {
    dogs: { value: 1, count: 5 },
    cats: { value: 0.5, count: 8 },
    date: '2018-11-15T23:43:32'
  }
];

const DATA_WITH_COUNTS_CUSTOM_NAMES = [
  {
    dogs: { cuteness: 5, amount: 10 },
    cats: { cuteness: 2.5, amount: 15 },
    date: '2018-09-15T23:43:32'
  },
  {
    dogs: { cuteness: 2, amount: 20 },
    cats: { cuteness: 7, amount: 18 },
    date: '2018-10-15T23:43:32'
  },
  {
    dogs: { cuteness: 1, amount: 5 },
    cats: { cuteness: 0.5, amount: 8 },
    date: '2018-11-15T23:43:32'
  }
];

const DATA_WITH_COUNTS_AND_NULLS = [
  {
    dogs: { value: null, count: null },
    cats: { value: 2.5, count: 15 },
    date: '2018-09-15T23:43:32'
  },
  {
    dogs: { value: 2, count: 20 },
    cats: { value: null, count: null },
    date: '2018-10-15T23:43:32'
  },
  {
    dogs: { value: null, count: null },
    cats: { value: 0.5, count: 8 },
    date: '2018-11-15T23:43:32'
  }
];

const DATA_WITH_COUNTS_ONLY_NULLS = [
  {
    dogs: { value: null, count: null },
    cats: { value: null, count: null },
    date: '2018-09-15T23:43:32'
  },
  {
    dogs: { value: null, count: null },
    cats: { value: null, count: null },
    date: '2018-10-15T23:43:32'
  },
  {
    dogs: { value: null, count: null },
    cats: { value: null, count: null },
    date: '2018-11-15T23:43:32'
  }
];

const getLast = data => {
  return data[data.length - 1];
};

describe('getRowSummaryMetric', () => {
  describe('total', () => {
    test('should sum the current month data', () => {
      const aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };

      const standardResult = getRowSummaryMetric(
        getLast(STANDARD),
        aggregationOptions
      );
      const missingResult = getRowSummaryMetric(
        getLast(MISSING_VALUES),
        aggregationOptions
      );

      expect(standardResult).toEqual(10);
      expect(missingResult).toEqual(6);
    });

    test('should return 0 when the final data point has no values', () => {
      const aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };

      const result = getRowSummaryMetric(
        getLast(DATA_POINT_WITH_ALL_NULLS),
        aggregationOptions
      );

      expect(result).toEqual(0);
    });
  });

  describe('avg', () => {
    test('should average the current month data', () => {
      const aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };

      const result = getRowSummaryMetric(getLast(STANDARD), aggregationOptions);

      expect(result).toEqual(5);
    });

    test('should leave null values out of average', () => {
      const aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };

      const result = getRowSummaryMetric(
        getLast(MISSING_VALUES),
        aggregationOptions
      );

      expect(result).toEqual(6);
    });

    test('should return null when the final data point has no values', () => {
      const aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };

      const result = getRowSummaryMetric(
        getLast(DATA_POINT_WITH_ALL_NULLS),
        aggregationOptions
      );

      expect(result).toEqual(null);
    });
  });

  describe('weightedAvg', () => {
    test('should get weighted average for data', () => {
      const aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: { valueKey: 'value', countKey: 'count' }
      };

      // equals 9 / 13
      const result = getRowSummaryMetric(
        getLast(DATA_WITH_COUNTS),
        aggregationOptions
      );

      expect(result).toEqual(0.6923076923076923);
    });

    test('should get weighted average with custom names for value and count', () => {
      const aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: { valueKey: 'cuteness', countKey: 'amount' }
      };

      const result = getRowSummaryMetric(
        getLast(DATA_WITH_COUNTS_CUSTOM_NAMES),
        aggregationOptions
      );

      expect(result).toEqual(0.6923076923076923);
    });

    test('should get weighted average when data contains nulls', () => {
      const aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: { valueKey: 'value', countKey: 'count' }
      };

      const result = getRowSummaryMetric(
        getLast(DATA_WITH_COUNTS_AND_NULLS),
        aggregationOptions
      );

      expect(result).toEqual(0.5);
    });

    test('should return null when all values and counts are null', () => {
      const aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: { valueKey: 'value', countKey: 'count' }
      };

      const result = getRowSummaryMetric(
        getLast(DATA_WITH_COUNTS_ONLY_NULLS),
        aggregationOptions
      );

      expect(result).toBe(null);
    });
  });
});

describe('getOverallSummaryMetric', () => {
  describe('total', () => {
    test('should return null when given null data', () => {
      const result = getOverallSummaryMetric(null);
      expect(result).toEqual(null);
    });

    test('should sum data from every month', () => {
      const aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };

      const result = getOverallSummaryMetric(STANDARD, aggregationOptions);

      expect(result).toEqual(44);
    });

    test('should sum data from every month when some values are missing', () => {
      const aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };

      const result = getOverallSummaryMetric(
        MISSING_VALUES,
        aggregationOptions
      );

      expect(result).toEqual(35);
    });

    test('should sum data with rows containing all nulls', () => {
      const aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };

      const result = getOverallSummaryMetric(
        DATA_POINT_WITH_ALL_NULLS,
        aggregationOptions
      );

      expect(result).toEqual(29);
    });

    test('should return 0 if all data is null', () => {
      const aggregationOptions = {
        type: 'total',
        dataKeys: ['dogs', 'cats']
      };

      const result = getOverallSummaryMetric(
        DATA_WITH_ALL_NULLS,
        aggregationOptions
      );

      expect(result).toEqual(0);
    });
  });

  describe('avg', () => {
    test('should average data from every month', () => {
      const aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };

      const result = getOverallSummaryMetric(STANDARD, aggregationOptions);

      expect(result).toEqual(5.5);
    });

    test('should leave null values out of average from every month', () => {
      const aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };

      const missingResult = getOverallSummaryMetric(
        MISSING_VALUES,
        aggregationOptions
      );
      const allNullsResult = getOverallSummaryMetric(
        DATA_POINT_WITH_ALL_NULLS,
        aggregationOptions
      );

      expect(missingResult).toEqual(5.833333333333333);
      expect(allNullsResult).toEqual(5.8);
    });

    test('should return null if all data is null', () => {
      const aggregationOptions = {
        type: 'avg',
        dataKeys: ['dogs', 'cats']
      };

      const result = getOverallSummaryMetric(
        DATA_WITH_ALL_NULLS,
        aggregationOptions
      );

      expect(result).toEqual(null);
    });
  });

  describe('weightedAvg', () => {
    test('should get weighted average', () => {
      const aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: { valueKey: 'value', countKey: 'count' }
      };

      // 262.5 / 76
      const result = getOverallSummaryMetric(
        DATA_WITH_COUNTS,
        aggregationOptions
      );

      expect(result).toEqual(3.4539473684210527);
    });

    test('should get weighted average with custom value and count keys', () => {
      const aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: { valueKey: 'cuteness', countKey: 'amount' }
      };

      const result = getOverallSummaryMetric(
        DATA_WITH_COUNTS_CUSTOM_NAMES,
        aggregationOptions
      );

      expect(result).toEqual(3.4539473684210527);
    });

    test('should get weighted average when data contains nulls', () => {
      const aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: { valueKey: 'value', countKey: 'count' }
      };

      const result = getOverallSummaryMetric(
        DATA_WITH_COUNTS_AND_NULLS,
        aggregationOptions
      );

      expect(result).toEqual(1.8953488372093024);
    });

    test('should return null when all counts and values are null', () => {
      const aggregationOptions = {
        type: 'weightedAvg',
        dataKeys: ['dogs', 'cats'],
        options: { valueKey: 'value', countKey: 'count' }
      };

      const result = getOverallSummaryMetric(
        DATA_WITH_COUNTS_ONLY_NULLS,
        aggregationOptions
      );

      expect(result).toBe(null);
    });
  });
});
