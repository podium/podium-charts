import { getOptions } from '../Charts/Granularity';

const byMonth = { value: 'month', label: 'By Month' };
// const byWeek = { value: 'week', label: 'By Week' };
const byDay = { value: 'day', label: 'By Day' };
const byHour = { value: 'hour', label: 'By Hour' };

describe('Granularity', () => {
  describe('getOptions', () => {
    it('should return the correct granularity options for a preset range', () => {
      const lastYear = 'lastYear';
      const lastMonth = 'lastMonth';
      const lastWeek = 'lastWeek';

      const lastYearOptions = getOptions(lastYear);
      const lastMonthOptions = getOptions(lastMonth);
      const lastWeekOptions = getOptions(lastWeek);

      expect(lastYearOptions).toEqual([byMonth]);
      expect(lastMonthOptions).toEqual([byDay]);
      expect(lastWeekOptions).toEqual([byDay, byHour]);
    });

    it('should return the correct granularity options for a custom range', () => {
      const days15 = { dateStart: '2019-01-01', dateEnd: '2019-01-15' };
      const days45 = { dateStart: '2019-01-01', dateEnd: '2019-02-14' };
      const days91 = { dateStart: '2019-01-01', dateEnd: '2019-04-02' };

      const days15Options = getOptions(
        'custom',
        [],
        days15.dateStart,
        days15.dateEnd
      );
      const days45Options = getOptions(
        'custom',
        [],
        days45.dateStart,
        days45.dateEnd
      );
      const days91Options = getOptions(
        'custom',
        [],
        days91.dateStart,
        days91.dateEnd
      );

      expect(days15Options).toEqual([byDay]);
      expect(days45Options).toEqual([byMonth, byDay]);
      expect(days91Options).toEqual([byMonth]);
    });

    it('should exclude options provided in the exclude param', () => {
      const lastYear = 'lastYear';

      const excludedOptions = getOptions(lastYear, ['week']);

      expect(excludedOptions).toEqual([byMonth]);
    });
  });
});
