import { getLatestSummaryMetric, getOverallSummaryMetric } from '../Summary';

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

describe('getLatestSummaryMetric', () => {
  describe('total', () => {
    test('should sum the current month data', () => {
      expect(
        getLatestSummaryMetric(STANDARD, ['dogs', 'cats'], 'total')
      ).toEqual(10);
      expect(
        getLatestSummaryMetric(MISSING_VALUES, ['dogs', 'cats'], 'total')
      ).toEqual(6);
    });
    test('should return 0 when the final data point has no values', () => {
      expect(
        getLatestSummaryMetric(
          DATA_POINT_WITH_ALL_NULLS,
          ['dogs', 'cats'],
          'total'
        )
      ).toEqual(0);
    });
  });

  describe('avg', () => {
    test('should average the current month data', () => {
      expect(getLatestSummaryMetric(STANDARD, ['dogs', 'cats'], 'avg')).toEqual(
        5
      );
    });
    test('should leave null values out of average', () => {
      expect(
        getLatestSummaryMetric(MISSING_VALUES, ['dogs', 'cats'], 'avg')
      ).toEqual(6);
    });
    test('should return null when the final data point has no values', () => {
      expect(
        getLatestSummaryMetric(
          DATA_POINT_WITH_ALL_NULLS,
          ['dogs', 'cats'],
          'avg'
        )
      ).toEqual(null);
    });
  });

  describe('weightedAvg', () => {
    test('should get weighted average for data', () => {
      // equals 9 / 13
      const result = getLatestSummaryMetric(
        DATA_WITH_COUNTS,
        ['dogs', 'cats'],
        'weightedAvg'
      );
      expect(result).toEqual(0.6923076923076923);
    });

    test('should get weighted average with custom names for value and count', () => {
      const options = { valueKey: 'cuteness', countKey: 'amount' };
      const result = getLatestSummaryMetric(
        DATA_WITH_COUNTS_CUSTOM_NAMES,
        ['dogs', 'cats'],
        'weightedAvg',
        options
      );
      expect(result).toEqual(0.6923076923076923);
    });

    test('should get weighted average when data contains nulls', () => {
      const result = getLatestSummaryMetric(
        DATA_WITH_COUNTS_AND_NULLS,
        ['dogs', 'cats'],
        'weightedAvg'
      );
      expect(result).toEqual(0.5);
    });

    test('should return null when all values and counts are null', () => {
      const result = getLatestSummaryMetric(
        DATA_WITH_COUNTS_ONLY_NULLS,
        ['dogs', 'cats'],
        'weightedAvg'
      );
      expect(result).toBe(null);
    });
  });
});

describe('getOverallSummaryMetric', () => {
  describe('total', () => {
    test('should sum data from every month', () => {
      expect(
        getOverallSummaryMetric(STANDARD, ['dogs', 'cats'], 'total')
      ).toEqual(44);
    });
    test('should sum data from every month when some values are missing', () => {
      expect(
        getOverallSummaryMetric(MISSING_VALUES, ['dogs', 'cats'], 'total')
      ).toEqual(35);
    });
    test('should sum data with rows containing all nulls', () => {
      expect(
        getOverallSummaryMetric(
          DATA_POINT_WITH_ALL_NULLS,
          ['dogs', 'cats'],
          'total'
        )
      ).toEqual(29);
    });
    test('should return 0 if all data is null', () => {
      expect(
        getOverallSummaryMetric(DATA_WITH_ALL_NULLS, ['dogs', 'cats'], 'total')
      ).toEqual(0);
    });
  });

  describe('avg', () => {
    test('should average data from every month', () => {
      expect(
        getOverallSummaryMetric(STANDARD, ['dogs', 'cats'], 'avg')
      ).toEqual(5.5);
    });
    test('should leave null values out of average from every month', () => {
      expect(
        getOverallSummaryMetric(MISSING_VALUES, ['dogs', 'cats'], 'avg')
      ).toEqual(5.833333333333333);
      expect(
        getOverallSummaryMetric(
          DATA_POINT_WITH_ALL_NULLS,
          ['dogs', 'cats'],
          'avg'
        )
      ).toEqual(5.8);
    });
    test('should return null if all data is null', () => {
      expect(
        getOverallSummaryMetric(DATA_WITH_ALL_NULLS, ['dogs', 'cats'], 'avg')
      ).toEqual(null);
    });
  });

  describe('weightedAvg', () => {
    test('should get weighted average', () => {
      const result = getOverallSummaryMetric(
        DATA_WITH_COUNTS,
        ['dogs', 'cats'],
        'weightedAvg'
      );
      // 262.5 / 76
      expect(result).toEqual(3.4539473684210527);
    });

    test('should get weighted average with custom value and count keys', () => {
      const options = { valueKey: 'cuteness', countKey: 'amount' };
      const result = getOverallSummaryMetric(
        DATA_WITH_COUNTS_CUSTOM_NAMES,
        ['dogs', 'cats'],
        'weightedAvg',
        options
      );
      expect(result).toEqual(3.4539473684210527);
    });

    test('should get weighted average when data contains nulls', () => {
      const result = getOverallSummaryMetric(
        DATA_WITH_COUNTS_AND_NULLS,
        ['dogs', 'cats'],
        'weightedAvg'
      );
      expect(result).toEqual(1.8953488372093024);
    });

    test('should return null when all counts and values are null', () => {
      const result = getOverallSummaryMetric(
        DATA_WITH_COUNTS_ONLY_NULLS,
        ['dogs', 'cats'],
        'weightedAvg'
      );
      expect(result).toBe(null);
    });
  });
});
