"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.multiDataset = exports.singleDataset = void 0;

var _lodash = _interopRequireDefault(require("lodash.groupby"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

var _lodash3 = _interopRequireDefault(require("lodash.set"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var singleDataset = function singleDataset(data) {
  var groupedData = (0, _lodash.default)((0, _lodash2.default)(data), 'granularity');
  return Object.keys(groupedData).map(function (gran) {
    return groupedData[gran].reduce(function (newRow, currData) {
      var dataKey = currData.groupBy || 'value';
      newRow[dataKey] = currData.value;
      return newRow;
    }, {
      date: gran
    });
  });
};

exports.singleDataset = singleDataset;

var multiDataset = function multiDataset(data) {
  var combinedData = Object.keys(data).reduce(function (outsideAcc, alias) {
    return data[alias].reduce(function (insideAcc, row) {
      if (row.groupBy) {
        return (0, _lodash3.default)(insideAcc, [row.granularity, row.groupBy, alias], row.value);
      }

      return (0, _lodash3.default)(insideAcc, [row.granularity, alias], row.value);
    }, outsideAcc);
  }, {});
  return Object.keys(combinedData).map(function (granularity) {
    var dateData = combinedData[granularity];
    return _objectSpread({}, dateData, {
      date: granularity
    });
  });
};

exports.multiDataset = multiDataset;
var _default = {
  singleDataset: singleDataset,
  multiDataset: multiDataset
};
exports.default = _default;