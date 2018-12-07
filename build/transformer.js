"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transformer;

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _groupBy2 = _interopRequireDefault(require("lodash/groupBy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transformer(data) {
  var groupedData = (0, _groupBy2.default)((0, _cloneDeep2.default)(data), 'granularity');
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

;