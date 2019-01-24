"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Summary;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _podiumUi = require("@podiumhq/podium-ui");

var _Ghost = _interopRequireDefault(require("./Ghost/Ghost"));

var _chartHelpers = require("./chartHelpers");

var _aggregators = require("./aggregators");

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

var getLatestSummaryMetric = function getLatestSummaryMetric(data, aggregationOptions) {
  var currentDataObj = data[data.length - 1];
  return (0, _aggregators.getRowSummaryMetric)(currentDataObj, aggregationOptions);
};

function Summary(_ref) {
  var data = _ref.data,
      formatter = _ref.formatter,
      granularity = _ref.granularity,
      unit = _ref.unit,
      loading = _ref.loading,
      timeRange = _ref.timeRange,
      aggregationOptions = _ref.aggregationOptions;

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
  var currentData = getLatestSummaryMetric(data, aggregationOptions);
  var entireData = (0, _aggregators.getOverallSummaryMetric)(data, aggregationOptions);
  debugger;
  var currentDataFormatted = currentData === null ? 'N/A' : "".concat(formatter(currentData), " ").concat(unit);
  var entireDataFormatted = entireData === null ? 'N/A' : "".concat(formatter(entireData), " ").concat(unit);
  return _react.default.createElement(SummaryWrapper, null, _react.default.createElement(ToDate, null, titleCase(granularity), " to Date"), _react.default.createElement(SummaryLabel, null, currentDataFormatted), _react.default.createElement(Space, null), renderTimeRange(), _react.default.createElement(SummaryLabel, null, entireDataFormatted));
}

Summary.propTypes = {
  data: _propTypes.default.array.isRequired,
  aggregationOptions: _propTypes.default.shape({
    type: _propTypes.default.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
    dataKeys: _propTypes.default.array.isRequired,
    options: _propTypes.default.shape({
      valueKey: _propTypes.default.string,
      countKey: _propTypes.default.string
    })
  }).isRequired,
  formatter: _propTypes.default.func,
  loading: _propTypes.default.bool,
  unit: _propTypes.default.string,
  timeRange: _propTypes.default.oneOf(['custom', 'lastMonth', 'last12Months', 'lastWeek', 'lastYear', 'monthToDate', 'today', 'weekToDate', 'yearToDate', 'yesterday'])
};
Summary.defaultProps = {
  unit: '',
  formatter: function formatter(value) {
    return value;
  }
};