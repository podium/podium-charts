import transformer from '../transformer';

const COMPLETE_DATA = {
  dataSet1: [
    { value: 1, groupBy: 'google', granularity: '2018-01-15T23:43:32' },
    { value: 2, groupBy: 'google', granularity: '2018-02-15T23:43:32' }
  ],
  dataSet2: [
    { value: 10, groupBy: 'google', granularity: '2018-01-15T23:43:32' },
    { value: 20, groupBy: 'google', granularity: '2018-19-15T23:43:32' }
  ]
};

const NO_GROUP_BY = {
  dataSet1: [
    { value: 1, groupBy: 'google', granularity: '2018-01-15T23:43:32' },
    { value: 2, groupBy: 'google', granularity: '2018-02-15T23:43:32' }
  ],
  dataSet2: [
    { value: 10, granularity: '2018-01-15T23:43:32' },
    { value: 20, granularity: '2018-19-15T23:43:32' }
  ]
};

describe('multiDataset', () => {
  test('should return dataSet1 and dataSet2 as a nested object', () => {
    const result = transformer.multiDataset(COMPLETE_DATA);
    expect(result).toEqual([
      {
        google: { dataSet1: 1, dataSet2: 10 },
        date: '2018-01-15T23:43:32'
      },
      {
        google: { dataSet1: 2 },
        date: '2018-02-15T23:43:32'
      },
      {
        google: { dataSet2: 20 },
        date: '2018-19-15T23:43:32'
      }
    ]);
  });

  test('should return correct format if no groupBy is present', () => {
    const result = transformer.multiDataset(NO_GROUP_BY);
    expect(result).toEqual([
      {
        dataSet2: 10,
        date: '2018-01-15T23:43:32',
        google: { dataSet1: 1 }
      },
      {
        date: '2018-02-15T23:43:32',
        google: { dataSet1: 2 }
      },
      {
        dataSet2: 20,
        date: '2018-19-15T23:43:32'
      }
    ]);
  });

  test('should return a blank array if no data', () => {
    const result = transformer.multiDataset({});
    expect(result).toEqual([]);
  });
});

describe('singleDataset', () => {
  test('should return data with groupBy as key and granularity as date', () => {
    const result = transformer.singleDataset(COMPLETE_DATA['dataSet1']);
    expect(result).toEqual([
      {
        date: '2018-01-15T23:43:32',
        google: 1
      },
      {
        date: '2018-02-15T23:43:32',
        google: 2
      }
    ]);
  });

  test('should return correct format if no groupBy is present', () => {
    const result = transformer.singleDataset(NO_GROUP_BY['dataSet2']);
    expect(result).toEqual([
      {
        date: '2018-01-15T23:43:32',
        value: 10
      },
      {
        date: '2018-19-15T23:43:32',
        value: 20
      }
    ]);
  });

  test('should return a blank array if no data', () => {
    const result = transformer.singleDataset([]);
    expect(result).toEqual([]);
  });
});
