"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.multiDataset = exports.singleDataset = void 0;

var _lodash = _interopRequireDefault(require("lodash.groupby"));

var _lodash2 = _interopRequireDefault(require("lodash.clonedeep"));

var _lodash3 = _interopRequireDefault(require("lodash.set"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
  var _ref2;

  var combinedData = Object.keys(data).reduce(function (outsideAcc, alias) {
    return data[alias].reduce(function (insideAcc, row) {
      return (0, _lodash3.default)(insideAcc, [row.granularity, row.groupBy, alias], row.value);
    }, outsideAcc);
  }, {});
  var transformedData = Object.keys(combinedData).map(function (granularity) {
    var sites = combinedData[granularity];
    return Object.keys(sites).map(function (site) {
      var siteObject = sites[site];
      return _defineProperty({
        date: granularity
      }, site, siteObject);
    });
  });
  return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(transformedData));
};

exports.multiDataset = multiDataset;
var _default = {
  singleDataset: singleDataset,
  multiDataset: multiDataset
};
exports.default = _default;