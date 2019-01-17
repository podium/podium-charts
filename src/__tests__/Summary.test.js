import { getCurrentData, getEntireData } from '../Summary';

const TEST_DATA = [
  { sms: 200, text: 1, organic: 2, date: '2018-01-15T23:43:32' },
  { sms: 30000, text: 5, organic: 0, date: '2018-02-15T23:43:32' },
  { sms: 500, text: 3, date: '2018-03-15T23:43:32' }, // NOTE: organic is undefined here
  { sms: 200, text: 0, organic: 3, date: '2018-04-15T23:43:32' },
  { sms: 300, text: 1, organic: 4, date: '2018-05-15T23:43:32' },
  { sms: 4000, text: 2.5, organic: 8, date: '2018-06-15T23:43:32' },
  { sms: 400, text: 2, organic: 9, date: '2018-07-15T23:43:32' },
  { sms: 200, text: 2.8, organic: 15, date: '2018-08-15T23:43:32' },
  { sms: 100, text: 5, organic: 13, date: '2018-09-15T23:43:32' },
  { sms: null, text: null, organic: null, date: '2018-10-15T23:43:32' },
  { sms: 100, text: 2, organic: 0, date: '2018-11-15T23:43:32' },
  { sms: 400, text: 2.7, organic: 0, date: '2018-12-15T23:43:32' }
];

describe('getCurrentData', () => {
  test('should sum the current month data', () => {
    expect(getCurrentData(TEST_DATA, ['text', 'organic'], 'total')).toEqual(
      2.7
    );
  });
  test('should average the current month data', () => {
    expect(getCurrentData(TEST_DATA, ['text', 'organic'], 'avg')).toEqual(1.35);
  });
});

describe('getEntireData', () => {
  test('should sum data from every month', () => {
    expect(getEntireData(TEST_DATA, ['text', 'organic'], 'total')).toEqual(81);
  });
  test('should average data from every month', () => {
    expect(getEntireData(TEST_DATA, ['text', 'organic'], 'avg')).toEqual(3.375);
  });
});
