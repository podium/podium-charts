import dateHelpers from '../Charts/utils/dateHelpers';

describe('Preset Range', () => {
  let momentMock;

  beforeAll(() => {
    // freeze time: September 13, 2019 @ 6:00 AM
    momentMock = jest
      .spyOn(Date, 'now')
      .mockImplementation(() => 1568354400000);
  });

  test('should return start and end dates with timestamps for today range', () => {
    const result = dateHelpers['today']();
    const formattedResult = [result[0].format(), result[1].format()];

    expect(formattedResult).toEqual([
      '2019-09-13T00:00:00Z',
      '2019-09-13T23:59:59Z'
    ]);
  });

  test('should return start and end dates with timestamps for yesterday range', () => {
    const result = dateHelpers['yesterday']();
    const formattedResult = [result[0].format(), result[1].format()];

    expect(formattedResult).toEqual([
      '2019-09-12T00:00:00Z',
      '2019-09-12T23:59:59Z'
    ]);
  });

  afterAll(() => momentMock.mockRestore());
});

describe('Custom Range', () => {
  test('should return start and end dates with timestamps', () => {
    const startDate = '2019-01-01';
    const endDate = '2019-04-01';
    const result = dateHelpers['custom'](startDate, endDate);

    const formattedResult = [result[0].format(), result[1].format()];

    expect(formattedResult).toEqual([
      '2019-01-01T00:00:00Z',
      '2019-04-01T23:59:59Z'
    ]);
  });
});
