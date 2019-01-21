"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRowSummaryMetric = getRowSummaryMetric;
exports.getOverallSummaryMetric = getOverallSummaryMetric;

var _lodash = _interopRequireDefault(require("lodash.get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getRowSummaryMetric(dataRow, aggregationOptions) {
  var type = aggregationOptions.type,
      dataKeys = aggregationOptions.dataKeys,
      options = aggregationOptions.options;
  return rowSummaryFunctions[type](dataRow, dataKeys, options);
}

function getOverallSummaryMetric(data, aggregationOptions) {
  var type = aggregationOptions.type,
      dataKeys = aggregationOptions.dataKeys,
      options = aggregationOptions.options;
  return datasetSummaryFunctions[type](data, dataKeys, options);
} // Helpers


var rowTotal = function rowTotal(row, dataKeys) {
  var sum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = dataKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;
      var value = (0, _lodash.default)(row, key, 0);

      if (isNumeric(value)) {
        sum += value;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sum;
};

var rowAvg = function rowAvg(row, dataKeys) {
  var sum = 0;
  var usedKeys = 0;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = dataKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var key = _step2.value;
      var value = (0, _lodash.default)(row, key, 0);

      if (isNumeric(value)) {
        sum += value;
        usedKeys++;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return usedKeys === 0 ? null : sum / usedKeys;
};

var isWeightedAvgOptions = function isWeightedAvgOptions(options) {
  return options && options.valueKey && options.countKey;
};

var rowWeightedAvg = function rowWeightedAvg(row, dataKeys, options) {
  if (!isWeightedAvgOptions(options)) {
    throw new TypeError('Malformed weighted average options');
  }

  var valueKey = options.valueKey,
      countKey = options.countKey;
  var sum = 0;
  var totalCount = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = dataKeys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var key = _step3.value;
      var value = (0, _lodash.default)(row, [key, valueKey], null);
      var count = (0, _lodash.default)(row, [key, countKey], null);

      if (isNumeric(value) && isNumeric(count)) {
        sum += value * count;
        totalCount += count;
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return totalCount === 0 ? null : sum / totalCount;
};

var rowSummaryFunctions = {
  total: rowTotal,
  avg: rowAvg,
  weightedAvg: rowWeightedAvg
};

var dataSetTotal = function dataSetTotal(data, dataKeys) {
  return data.reduce(function (acc, row) {
    return rowSummaryFunctions.total(row, dataKeys) + acc;
  }, 0);
};

var datasetAvg = function datasetAvg(data, dataKeys) {
  var sum = 0;
  var usedKeys = 0;
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var row = _step4.value;
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = dataKeys[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var key = _step5.value;
          var value = (0, _lodash.default)(row, key, 0);

          if (isNumeric(value)) {
            sum += value;
            usedKeys++;
          }
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  return usedKeys === 0 ? null : sum / usedKeys;
};

var datasetWeightedAvg = function datasetWeightedAvg(data, dataKeys, options) {
  if (!isWeightedAvgOptions(options)) {
    throw new TypeError('Malformed weighted average options');
  }

  var valueKey = options.valueKey,
      countKey = options.countKey;
  var sum = 0;
  var totalCount = 0;
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = data[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var row = _step6.value;
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = dataKeys[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var key = _step7.value;
          var value = (0, _lodash.default)(row, [key, valueKey], null);
          var count = (0, _lodash.default)(row, [key, countKey], null);

          if (isNumeric(value) && isNumeric(count)) {
            sum += value * count;
            totalCount += count;
          }
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return totalCount === 0 ? null : sum / totalCount;
};

var datasetSummaryFunctions = {
  total: dataSetTotal,
  avg: datasetAvg,
  weightedAvg: datasetWeightedAvg
};

function isNumeric(value) {
  return value !== undefined && value !== null;
}