import { getCurrentData, getEntireData } from '../Summary';

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

describe('getCurrentData', () => {
  describe('sum', () => {
    test('should sum the current month data', () => {
      expect(getCurrentData(STANDARD, ['dogs', 'cats'], 'total')).toEqual(10);
      expect(getCurrentData(MISSING_VALUES, ['dogs', 'cats'], 'total')).toEqual(
        6
      );
    });
    test('should return null when the final data point has no values', () => {
      expect(
        getCurrentData(DATA_POINT_WITH_ALL_NULLS, ['dogs', 'cats'], 'total')
      ).toEqual(null);
    });
  });

  describe('avg', () => {
    test('should average the current month data', () => {
      expect(getCurrentData(STANDARD, ['dogs', 'cats'], 'avg')).toEqual(5);
    });
    test('should leave null values out of average', () => {
      expect(getCurrentData(MISSING_VALUES, ['dogs', 'cats'], 'avg')).toEqual(
        6
      );
    });
    test('should return null when the final data point has no values', () => {
      expect(
        getCurrentData(DATA_POINT_WITH_ALL_NULLS, ['dogs', 'cats'], 'avg')
      ).toEqual(null);
    });
  });
});

describe('getEntireData', () => {
  describe('sum', () => {
    test('should sum data from every month', () => {
      expect(getEntireData(STANDARD, ['dogs', 'cats'], 'total')).toEqual(44);
    });
  });

  describe('avg', () => {
    test('should average data from every month', () => {
      expect(getEntireData(STANDARD, ['dogs', 'cats'], 'avg')).toEqual(5.5);
    });
    test('should leave null values out of average from every month', () => {
      expect(getEntireData(MISSING_VALUES, ['dogs', 'cats'], 'avg')).toEqual(
        6.125
      );
    });
  });
});
