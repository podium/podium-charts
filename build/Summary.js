"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Summary;
exports.getLatestSummaryMetric = getLatestSummaryMetric;
exports.getOverallSummaryMetric = getOverallSummaryMetric;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _podiumUi = require("@podiumhq/podium-ui");

var _Ghost = _interopRequireDefault(require("./Ghost/Ghost"));

var _chartHelpers = require("./chartHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 32px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SummaryWrapper = _styledComponents.default.div(_templateObject());

var ToDate = _styledComponents.default.div(_templateObject2(), _podiumUi.colors.steel);

var TimeRange = _styledComponents.default.div(_templateObject3(), _podiumUi.colors.steel);

var SummaryLabel = _styledComponents.default.div(_templateObject4(), _podiumUi.colors.mineShaft);

var Space = _styledComponents.default.div(_templateObject5());

function Summary(_ref) {
  var data = _ref.data,
      dataKeys = _ref.dataKeys,
      summaryType = _ref.summaryType,
      formatter = _ref.formatter,
      granularity = _ref.granularity,
      unit = _ref.unit,
      loading = _ref.loading,
      timeRange = _ref.timeRange;

  var currentData = function currentData() {
    return getLatestSummaryMetric(data, dataKeys, summaryType);
  };

  var entireData = function entireData() {
    return getOverallSummaryMetric(data, dataKeys, summaryType);
  };

  var titleCase = function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  };

  var renderGhostState = function renderGhostState() {
    return _react.default.createElement(SummaryWrapper, null, _react.default.createElement(_Ghost.default, {
      height: "14px",
      width: "78px"
    }), _react.default.createElement(_Ghost.default, {
      height: "27px",
      width: "44px"
    }), _react.default.createElement(Space, null), _react.default.createElement(_Ghost.default, {
      height: "14px",
      width: "78px"
    }), _react.default.createElement(_Ghost.default, {
      height: "27px",
      width: "44px"
    }));
  };

  var renderTimeRange = function renderTimeRange() {
    var selectedOption = _podiumUi.ReportingDatePicker.options.find(function (option) {
      return option.value === timeRange;
    }) || {};

    if (timeRange === 'custom') {
      return _react.default.createElement(TimeRange, null, (0, _chartHelpers.renderRangeLabel)(data, 'MMM'));
    } else {
      return _react.default.createElement(TimeRange, null, selectedOption.label);
    }
  };

  if (loading) return renderGhostState();
  return _react.default.createElement(SummaryWrapper, null, _react.default.createElement(ToDate, null, titleCase(granularity), " to Date"), _react.default.createElement(SummaryLabel, null, "".concat(formatter(currentData()), " ").concat(unit)), _react.default.createElement(Space, null), renderTimeRange(), _react.default.createElement(SummaryLabel, null, "".concat(formatter(entireData()), " ").concat(unit)));
}

Summary.propTypes = {
  summaryType: _propTypes.default.oneOf(['avg', 'total']),
  data: _propTypes.default.array.isRequired,
  dataKeys: _propTypes.default.array.isRequired,
  formatter: _propTypes.default.func,
  loading: _propTypes.default.bool,
  unit: _propTypes.default.string,
  timeRange: _propTypes.default.oneOf(['custom', 'lastMonth', 'last12Months', 'lastWeek', 'lastYear', 'monthToDate', 'today', 'weekToDate', 'yearToDate', 'yesterday'])
};
Summary.defaultProps = {
  summaryType: 'total',
  unit: '',
  formatter: function formatter(value) {
    return value;
  }
};

function getLatestSummaryMetric(data, dataKeys, summaryType) {
  var currentDataObj = data[data.length - 1];
  return typeHandler[summaryType](currentDataObj, dataKeys);
}

function getOverallSummaryMetric(data, dataKeys, summaryType) {
  return entireDataTypeHandler[summaryType](data, dataKeys, summaryType);
} // Helpers


var typeHandler = {
  total: function total(monthData, dataKeys) {
    var sum = 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = dataKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;
        var value = (0, _lodash.default)(monthData, key, 0);

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
  },
  avg: function avg(monthData, dataKeys) {
    var sum = 0;
    var usedKeys = 0;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = dataKeys[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;
        var value = (0, _lodash.default)(monthData, key, 0);

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
  }
};
var entireDataTypeHandler = {
  total: function total(data, dataKeys, summaryType) {
    return data.reduce(function (acc, monthData) {
      return typeHandler[summaryType](monthData, dataKeys) + acc;
    }, 0);
  },
  avg: function avg(data, dataKeys, summaryType) {
    var sum = 0;
    var usedKeys = 0;
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var monthData = _step3.value;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = dataKeys[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var key = _step4.value;
            var value = (0, _lodash.default)(monthData, key, 0);

            if (isNumeric(value)) {
              sum += value;
              usedKeys++;
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

    return usedKeys === 0 ? null : sum / usedKeys;
  }
};

function isNumeric(value) {
  return value !== undefined && value !== null;
}