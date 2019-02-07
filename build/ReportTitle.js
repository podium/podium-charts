"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReportTitle;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _podiumUi = require("@podiumhq/podium-ui");

var _chartHelpers = require("./chartHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: white;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-size: 12px;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-size: 16px;\n  font-weight: 500;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TitleWrapper = _styledComponents.default.div(_templateObject());

var Title = _styledComponents.default.p(_templateObject2());

var RangeLabel = _styledComponents.default.div(_templateObject3(), _podiumUi.colors.steel);

var DateRangePlaceholder = _styledComponents.default.span(_templateObject4());

function ReportTitle(_ref) {
  var data = _ref.data,
      title = _ref.title,
      loading = _ref.loading,
      timeRange = _ref.timeRange,
      dateStart = _ref.dateStart,
      dateEnd = _ref.dateEnd;

  var renderTimeRange = function renderTimeRange() {
    if (timeRange === 'custom' && dateStart && dateEnd) {
      return "".concat((0, _chartHelpers.fullDate)(dateStart), " - ").concat((0, _chartHelpers.fullDate)(dateEnd));
    } else {
      return (0, _chartHelpers.renderRangeLabel)(data);
    }
  };

  return _react.default.createElement(TitleWrapper, null, _react.default.createElement(Title, null, title), _react.default.createElement(RangeLabel, null, loading ? _react.default.createElement(DateRangePlaceholder, null, "Date Range") : renderTimeRange()));
}

ReportTitle.propTypes = {
  data: _propTypes.default.array.isRequired,
  title: _propTypes.default.string.isRequired,
  timeRange: _propTypes.default.string,
  dateStart: _propTypes.default.string,
  dateEnd: _propTypes.default.string,
  loading: _propTypes.default.bool
};