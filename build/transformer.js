"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;

var _lodash = _interopRequireDefault(require("lodash.groupby"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformer(data) {
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
}