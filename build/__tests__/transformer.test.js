"use strict";

var _transformer = _interopRequireDefault(require("../transformer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var COMPLETE_DATA = {
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
var NO_GROUP_BY = {
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
    granularity: '2018-01-15T23:43:32'
  }, {
    value: 20,
    granularity: '2018-19-15T23:43:32'
  }]
};
describe('multiDataset', function () {
  test('should return dataSet1 and dataSet2 as a nested object', function () {
    var result = _transformer.default.multiDataset(COMPLETE_DATA);

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
  test('should return correct format if no groupBy is present', function () {
    var result = _transformer.default.multiDataset(NO_GROUP_BY);

    expect(result).toEqual([{
      dataSet2: 10,
      date: "2018-01-15T23:43:32",
      google: {
        dataSet1: 1
      }
    }, {
      date: "2018-02-15T23:43:32",
      google: {
        dataSet1: 2
      }
    }, {
      dataSet2: 20,
      date: "2018-19-15T23:43:32"
    }]);
  });
  test('should return a blank array if no data', function () {
    var result = _transformer.default.multiDataset({});

    expect(result).toEqual([]);
  });
});
describe('singleDataset', function () {
  test('should return data with groupBy as key and granularity as date', function () {
    var result = _transformer.default.singleDataset(COMPLETE_DATA['dataSet1']);

    expect(result).toEqual([{
      date: '2018-01-15T23:43:32',
      google: 1
    }, {
      date: '2018-02-15T23:43:32',
      google: 2
    }]);
  });
  test('should return correct format if no groupBy is present', function () {
    var result = _transformer.default.singleDataset(NO_GROUP_BY['dataSet2']);

    expect(result).toEqual([{
      date: "2018-01-15T23:43:32",
      value: 10
    }, {
      date: "2018-19-15T23:43:32",
      value: 20
    }]);
  });
  test('should return a blank array if no data', function () {
    var result = _transformer.default.singleDataset([]);

    expect(result).toEqual([]);
  });
});