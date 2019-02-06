"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReportSummaryTitle;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _podiumUi = require("@podiumhq/podium-ui");

var _Ghost = _interopRequireDefault(require("./Ghost/Ghost"));

var _Trend = _interopRequireDefault(require("./Trend"));

var _aggregators = require("./aggregators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-size: 32px;\n  font-weight: 600;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SummaryTitleWrapper = _styledComponents.default.div(_templateObject());

var Title = _styledComponents.default.div(_templateObject2(), _podiumUi.colors.mineShaft);

var MonthToDate = _styledComponents.default.div(_templateObject3(), _podiumUi.colors.mineShaft);

var MonthToDateLabel = _styledComponents.default.div(_templateObject4(), _podiumUi.colors.steel);

var ToolTipWrapper = _styledComponents.default.div(_templateObject5());

function ReportSummaryTitle(_ref) {
  var data = _ref.data,
      title = _ref.title,
      dataKeys = _ref.dataKeys,
      formatter = _ref.formatter,
      granularity = _ref.granularity,
      trendDirection = _ref.trendDirection,
      preferDown = _ref.preferDown,
      loading = _ref.loading,
      tooltip = _ref.tooltip,
      trendData = _ref.trendData,
      aggregationOptions = _ref.aggregationOptions;

  var renderGhostState = function renderGhostState() {
    return _react.default.createElement(SummaryTitleWrapper, null, _react.default.createElement(Title, null, title), _react.default.createElement(_Ghost.default, {
      height: "24px"
    }), _react.default.createElement(MonthToDateLabel, null, "Month To Date"));
  };

  var renderToolTip = function renderToolTip(prevDataValue) {
    return _react.default.createElement(ToolTipWrapper, null, _react.default.createElement("div", null, "This time last month:"), _react.default.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, prevDataValue === null ? 'N/A' : formatter(prevDataValue)));
  };

  if (loading) return renderGhostState();
  var prevDataValue = trendData ? (0, _aggregators.getOverallSummaryMetric)(trendData[0], aggregationOptions) : 0;
  var currDataValue = trendData ? (0, _aggregators.getOverallSummaryMetric)(trendData[1], aggregationOptions) : 0;
  var currDataFormatted = currDataValue === null ? 'N/A' : formatter(currDataValue);
  return _react.default.createElement(SummaryTitleWrapper, null, _react.default.createElement(Title, null, title), _react.default.createElement(MonthToDate, null, _react.default.createElement("span", {
    style: {
      marginRight: '8px'
    }
  }, currDataFormatted), _react.default.createElement(_podiumUi.ToolTip, {
    type: "arrow",
    tip: renderToolTip(prevDataValue),
    position: "top"
  }, _react.default.createElement(_Trend.default, {
    direction: (0, _aggregators.calculateTrend)(prevDataValue, currDataValue),
    preferDown: preferDown
  }))), _react.default.createElement(MonthToDateLabel, null, "Month To Date"));
}

ReportSummaryTitle.propTypes = {
  data: _propTypes.default.array.isRequired,
  title: _propTypes.default.string.isRequired,
  dataKeys: _propTypes.default.array.isRequired,
  loading: _propTypes.default.bool,
  preferDown: _propTypes.default.bool,
  trendData: _propTypes.default.array.isRequired,
  aggregationOptions: _propTypes.default.shape({
    type: _propTypes.default.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
    dataKeys: _propTypes.default.array.isRequired,
    options: _propTypes.default.shape({
      valueKey: _propTypes.default.string,
      countKey: _propTypes.default.string
    })
  }).isRequired
};
ReportSummaryTitle.defaultProps = {
  formatter: function formatter(value) {
    return value;
  },
  preferDown: false
};