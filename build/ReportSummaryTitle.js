"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReportSummaryTitle;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _podiumUi = require("podium-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-size: 32px;\n  font-weight: 600;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 16px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  padding: 24px 0px 0px 24px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 2px;\n  background-color: ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TrendWrapper = _styledComponents.default.div(_templateObject(), _podiumUi.colors.poppyRed, function (_ref) {
  var direction = _ref.direction;
  return direction === 'up' && "\n      background-color: ".concat(_podiumUi.colors.podiumBrand, "\n      svg {\n        transform: translate(90deg);\n      }\n    ");
});

var SummaryTitleWrapper = _styledComponents.default.div(_templateObject2());

var Title = _styledComponents.default.div(_templateObject3(), _podiumUi.colors.mineShaft);

var MonthToDate = _styledComponents.default.div(_templateObject4(), _podiumUi.colors.mineShaft);

var MonthToDateLabel = _styledComponents.default.div(_templateObject5(), _podiumUi.colors.steel);

var Trend = function Trend(_ref2) {
  var direction = _ref2.direction;
  return _react.default.createElement(TrendWrapper, {
    direction: direction
  }, _react.default.createElement(_podiumUi.IconArrow, {
    color: _podiumUi.colors.white,
    size: "12",
    direction: direction
  }));
};

function ReportSummaryTitle(_ref3) {
  var data = _ref3.data,
      title = _ref3.title,
      summaryType = _ref3.summaryType,
      dataKeys = _ref3.dataKeys,
      formatter = _ref3.formatter,
      granularity = _ref3.granularity;
  var summaryHandler = {
    total: function total(periodData) {
      return dataKeys.reduce(function (acc, key) {
        return (periodData[key] || 0) + acc;
      }, 0);
    },
    avg: function avg(periodData) {
      return dataKeys.reduce(function (acc, key) {
        return (periodData[key] || 0) + acc;
      }, 0) / dataKeys.length;
    }
  };

  var currentValue = function currentValue() {
    var currentData = data[data.length - 1];
    return summaryHandler[summaryType](currentData);
  };

  var lastValue = function lastValue() {
    var lastData = data[data.length - 2];
    return summaryHandler[summaryType](lastData);
  };

  var compareToLastMonth = function compareToLastMonth() {
    if (lastValue() - currentValue() < 0) return _react.default.createElement(Trend, {
      direction: "up"
    });
    return _react.default.createElement(Trend, {
      direction: "down"
    });
  };

  return _react.default.createElement(SummaryTitleWrapper, null, _react.default.createElement(Title, null, title), _react.default.createElement(MonthToDate, null, formatter(currentValue()), " ", compareToLastMonth()), _react.default.createElement(MonthToDateLabel, null, "Month To Date"));
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