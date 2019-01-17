"use strict";

var _transformer = _interopRequireDefault(require("../transformer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var data = {
  dataSet1: [{
    value: 1,
    groupBy: 'google',
    granularity: '2018-01-15T23:43:32'
  }, {
    value: 2,
    groupBy: 'google',
    granularity: '2018-02-15T23:43:32'
  }],
  dataSet2: [{
    value: 10,
    groupBy: 'google',
    granularity: '2018-01-15T23:43:32'
  }, {
    value: 20,
    groupBy: 'google',
    granularity: '2018-19-15T23:43:32'
  }]
};
describe('multiDataset', function () {
  test('should return dataSet1 and dataSet2 as a nested object', function () {
    var result = _transformer.default.multiDataset(data);

    expect(result).toEqual([{
      google: {
        dataSet1: 1,
        dataSet2: 10
      },
      date: '2018-01-15T23:43:32'
    }, {
      google: {
        dataSet1: 2
      },
      date: '2018-02-15T23:43:32'
    }, {
      google: {
        dataSet2: 20
      },
      date: '2018-19-15T23:43:32'
    }]);
  });
});
describe('singleDataset', function () {
  test('should return data with groupBy as key and granularity as date', function () {
    var result = _transformer.default.singleDataset(data['dataSet1']);

    expect(result).toEqual([{
      date: '2018-01-15T23:43:32',
      google: 1
    }, {
      date: '2018-02-15T23:43:32',
      google: 2
    }]);
  });
});