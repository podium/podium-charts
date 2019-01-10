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

var Last12Months = _styledComponents.default.div(_templateObject3(), _podiumUi.colors.steel);

var SummaryLabel = _styledComponents.default.div(_templateObject4(), _podiumUi.colors.mineShaft);

var Space = _styledComponents.default.div(_templateObject5());

function Summary(_ref) {
  var data = _ref.data,
      dataKeys = _ref.dataKeys,
      summaryType = _ref.summaryType,
      formatter = _ref.formatter,
      granularity = _ref.granularity,
      loading = _ref.loading;
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

  var currentData = function currentData() {
    var currentDataObj = data[data.length - 1];
    return typeHandler[summaryType](currentDataObj);
  };

  var entireDataTypeHandler = {
    total: function total(data) {
      return data.reduce(function (acc, monthData) {
        return typeHandler[summaryType](monthData) + acc;
      }, 0);
    },
    avg: function avg(data) {
      return data.reduce(function (acc, monthData) {
        return typeHandler[summaryType](monthData) + acc;
      }, 0) / data.length;
    }
  };

  var entireData = function entireData() {
    return entireDataTypeHandler[summaryType](data);
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

  if (loading) return renderGhostState();
  return _react.default.createElement(SummaryWrapper, null, _react.default.createElement(ToDate, null, titleCase(granularity), " to Date"), _react.default.createElement(SummaryLabel, null, formatter(currentData())), _react.default.createElement(Space, null), _react.default.createElement(Last12Months, null, "Last ", data.length, " ", titleCase(granularity), "s"), _react.default.createElement(SummaryLabel, null, formatter(entireData())));
}

Summary.propTypes = {
  summaryType: _propTypes.default.oneOf(['avg', 'total']),
  data: _propTypes.default.array.isRequired,
  dataKeys: _propTypes.default.array.isRequired,
  formatter: _propTypes.default.func,
  loading: _propTypes.default.bool
};
Summary.defaultProps = {
  summaryType: 'total',
  formatter: function formatter(value) {
    return value;
  }
};