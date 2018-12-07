"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReportTitle;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _podiumUi = require("podium-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var RangeLabel = _styledComponents.default.p(_templateObject3(), _podiumUi.colors.steel);

var fullDate = function fullDate(date) {
  if ((0, _moment.default)(date).isValid) return (0, _moment.default)(date).format('MMMM D, YYYY');
  return date;
};

function ReportTitle(_ref) {
  var data = _ref.data,
      title = _ref.title;

  var renderRangeLabel = function renderRangeLabel() {
    var start = data[0]['date'];
    var end = data[data.length - 1]['date'];
    return "".concat(fullDate(start), " - ").concat(fullDate(end));
  };

  return _react.default.createElement(TitleWrapper, null, _react.default.createElement(Title, null, title), _react.default.createElement(RangeLabel, null, renderRangeLabel()));
}

ReportTitle.propTypes = {
  data: _propTypes.default.array.isRequired,
  title: _propTypes.default.string.isRequired
};