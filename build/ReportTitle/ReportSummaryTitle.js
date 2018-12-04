"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReportSummaryTitle;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _podiumUi = require("podium-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 32px;\n  font-weight: 600;\n"]);

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
  var data = _taggedTemplateLiteral(["\n  padding: 24px 0px 0px 24px;\n"]);

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

function ReportSummaryTitle(_ref) {
  var data = _ref.data,
      title = _ref.title,
      summaryType = _ref.summaryType,
      dataKeys = _ref.dataKeys,
      formatter = _ref.formatter;
  var typeHandler = {
    total: function total(monthData) {
      return dataKeys.reduce(function (acc, key) {
        return (monthData[key] || 0) + acc;
      }, 0);
    },
    avg: function avg(monthData) {
      return dataKeys.reduce(function (acc, key) {
        return (monthData[key] || 0) + acc;
      }, 0) / dataKeys.length;
    }
  };

  var monthToDateValue = function monthToDateValue() {
    var monthData = data[data.length - 1];
    return typeHandler[summaryType](monthData);
  };

  var lastMonthValue = function lastMonthValue() {
    var monthData = data[data.length - 2];
    return typeHandler[summaryType](monthData);
  };

  var compareToLastMonth = function compareToLastMonth() {
    return lastMonthValue - monthToDateValue > 0 ? '+' : '-';
  };

  return _react.default.createElement(SummaryTitleWrapper, null, _react.default.createElement(Title, null, title), _react.default.createElement(MonthToDate, null, formatter(monthToDateValue()), " ", compareToLastMonth()), _react.default.createElement(MonthToDateLabel, null, "Month To Date"));
}

ReportSummaryTitle.propTypes = {
  data: _propTypes.default.array.isRequired,
  title: _propTypes.default.string.isRequired,
  summaryType: _propTypes.default.oneOf(['avg', 'total']),
  dataKeys: _propTypes.default.array.isRequired
};
ReportSummaryTitle.defaultProps = {
  summaryType: 'total',
  formatter: function formatter(value) {
    return value;
  }
};