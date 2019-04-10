import {
  renderRangeLabel,
  getDeselectedColor
} from '../Charts/utils/chartHelpers';

describe('chartHelpers', () => {
  describe('renderRangeLabel', () => {
    let momentMock;

    beforeAll(() => {
      // freeze time: September 13, 2019 @ 6:00 AM
      momentMock = jest
        .spyOn(Date, 'now')
        .mockImplementation(() => 1568354400000);
    });

    it('should return hard coded dates when time range is custom', () => {
      const result = renderRangeLabel('custom', '2017-01-01', '2017-03-15');
      expect(result).toEqual('January 1, 2017 - March 15, 2017');
    });

    it('should default to thisMonth when timeRange is undefined', () => {
      const result = renderRangeLabel();
      expect(result).toEqual('September 1, 2019 - September 13, 2019');
    });

    describe('using timeRange', () => {
      it('should calculate correct date range for today', () => {
        const result = renderRangeLabel('today');
        expect(result).toEqual('September 13, 2019 - September 13, 2019');
      });

      it('should calculate correct date range for yesterday', () => {
        const result = renderRangeLabel('yesterday');
        expect(result).toEqual('September 12, 2019 - September 12, 2019');
      });

      it('should calculate correct date range for thisWeek/weekToDate, starting on Monday', () => {
        const thisWeek = renderRangeLabel('thisWeek');
        const weekToDate = renderRangeLabel('weekToDate');
        expect(thisWeek).toEqual('September 9, 2019 - September 13, 2019');
        expect(weekToDate).toEqual('September 9, 2019 - September 13, 2019');
      });

      it('should calculate correct date range for thisMonth/monthToDate', () => {
        const thisMonth = renderRangeLabel('thisMonth');
        const monthToDate = renderRangeLabel('monthToDate');
        expect(thisMonth).toEqual('September 1, 2019 - September 13, 2019');
        expect(monthToDate).toEqual('September 1, 2019 - September 13, 2019');
      });

      it('should calculate correct date range for thisYear/yearToDate', () => {
        const thisYear = renderRangeLabel('thisYear');
        const yearToDate = renderRangeLabel('yearToDate');
        expect(thisYear).toEqual('January 1, 2019 - September 13, 2019');
        expect(yearToDate).toEqual('January 1, 2019 - September 13, 2019');
      });

      it('should calculate correct date range for lastWeek', () => {
        const result = renderRangeLabel('lastWeek');
        expect(result).toEqual('September 2, 2019 - September 8, 2019');
      });

      it('should calculate correct date range for last12Months', () => {
        const result = renderRangeLabel('last12Months');
        expect(result).toEqual('September 1, 2018 - September 1, 2019');
      });

      it('should calculate correct date range for lastYear', () => {
        const result = renderRangeLabel('lastYear');
        expect(result).toEqual('January 1, 2018 - December 31, 2018');
      });
    });

    afterAll(() => momentMock.mockRestore());
  });

  describe('getDeselectedColor', () => {
    it('should return semi-transparent rgba values', () => {
      const result = getDeselectedColor('#E73E51');
      expect(result).toEqual('rgba(231, 62, 81, 0.3)');
    });

    it('should return semi-transparent rgba values for a different input', () => {
      const result = getDeselectedColor('#4C76E0');
      expect(result).toEqual('rgba(76, 118, 224, 0.3)');
    });

    it('should handle lowercase inputs', () => {
      const result = getDeselectedColor('#e73e51');
      expect(result).toEqual('rgba(231, 62, 81, 0.3)');
    });

    it('should return a default if it receives an unexpected input', () => {
      const result = getDeselectedColor('truck');
      expect(result).toEqual('#e4e9f0');
    });
  });
});
