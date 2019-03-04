"use strict";

var _Granularity = require("../Granularity");

var byMonth = {
  value: 'month',
  label: 'By Month'
}; // const byWeek = { value: 'week', label: 'By Week' };

var byDay = {
  value: 'day',
  label: 'By Day'
};
var byHour = {
  value: 'hour',
  label: 'By Hour'
};
describe('Granularity', function () {
  describe('getOptions', function () {
    it('should return the correct granularity options for a preset range', function () {
      var lastYear = 'lastYear';
      var lastMonth = 'lastMonth';
      var lastWeek = 'lastWeek';
      var lastYearOptions = (0, _Granularity.getOptions)(lastYear);
      var lastMonthOptions = (0, _Granularity.getOptions)(lastMonth);
      var lastWeekOptions = (0, _Granularity.getOptions)(lastWeek);
      expect(lastYearOptions).toEqual([byMonth]);
      expect(lastMonthOptions).toEqual([byDay]);
      expect(lastWeekOptions).toEqual([byDay, byHour]);
    });
    it('should return the correct granularity options for a custom range', function () {
      var days15 = {
        dateStart: '2019-01-01',
        dateEnd: '2019-01-15'
      };
      var days45 = {
        dateStart: '2019-01-01',
        dateEnd: '2019-02-14'
      };
      var days91 = {
        dateStart: '2019-01-01',
        dateEnd: '2019-04-02'
      };
      var days15Options = (0, _Granularity.getOptions)('custom', [], days15.dateStart, days15.dateEnd);
      var days45Options = (0, _Granularity.getOptions)('custom', [], days45.dateStart, days45.dateEnd);
      var days91Options = (0, _Granularity.getOptions)('custom', [], days91.dateStart, days91.dateEnd);
      expect(days15Options).toEqual([byDay]);
      expect(days45Options).toEqual([byMonth, byDay]);
      expect(days91Options).toEqual([byMonth]);
    });
    it('should exclude options provided in the exclude param', function () {
      var lastYear = 'lastYear';
      var excludedOptions = (0, _Granularity.getOptions)(lastYear, ['week']);
      expect(excludedOptions).toEqual([byMonth]);
    });
  });
});