"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TooltipBody;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

var _podiumUi = require("@podiumhq/podium-ui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 600;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 8px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 16px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n  background-color: ", ";\n  margin-right: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n  text-align: left;\n  justify-content: center;\n  font-size: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TooltipBodyWrapper = _styledComponents.default.div(_templateObject(), _podiumUi.colors.mineShaft);

var ColorLabel = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.fill;
});

var TooltipData = _styledComponents.default.div(_templateObject3());

var Label = _styledComponents.default.div(_templateObject4());

var LabelValue = _styledComponents.default.div(_templateObject5());

var Body = _styledComponents.default.div(_templateObject6());

var Header = _styledComponents.default.div(_templateObject7());

var Summary = _styledComponents.default.div(_templateObject8());

var XAxisLabel = _styledComponents.default.div(_templateObject9());

var granMap = {
  month: 'MMMM YYYY',
  year: 'YYYY',
  day: 'MMMM D, YYYY',
  week: 'MMMM D, YYYY'
};
var summaryHandler = {
  total: function total(payload) {
    return payload.reduce(function (acc, dataField) {
      return (dataField.value || 0) + acc;
    }, 0);
  },
  avg: function avg(payload) {
    return payload.reduce(function (acc, dataField) {
      return (dataField.value || 0) + acc;
    }, 0) / payload.length;
  }
};

var fullDate = function fullDate(date, granularity) {
  var format = granMap[granularity] || 'MMMM YYYY';

  var momentDate = _moment.default.utc(date);

  if (momentDate.isValid()) return momentDate.format(format);
  return date;
};

function TooltipBody(props) {
  var renderSummary = function renderSummary() {
    var payload = props.payload,
        summaryTitle = props.summaryTitle,
        summaryType = props.summaryType;
    var result = summaryHandler[summaryType](payload);
    return "".concat(result, " ").concat(summaryTitle);
  };

  var renderToolTipLegend = function renderToolTipLegend() {
    return props.payload.map(function (dataField) {
      var dataKey = dataField.dataKey,
          value = dataField.value,
          color = dataField.color,
          name = dataField.name;
      return _react.default.createElement(TooltipData, {
        key: dataKey
      }, _react.default.createElement(Label, null, _react.default.createElement(ColorLabel, {
        fill: color
      }), _react.default.createElement("div", null, name ? name : '')), _react.default.createElement(LabelValue, null, value));
    });
  };

  return _react.default.createElement(TooltipBodyWrapper, null, _react.default.createElement(Header, null, _react.default.createElement(XAxisLabel, null, fullDate(props.label)), props.summaryType && _react.default.createElement(Summary, null, renderSummary())), props.payload.length > 1 && _react.default.createElement(Body, null, renderToolTipLegend()));
}

TooltipBody.propTypes = {
  summaryType: _propTypes.default.oneOf(['total', 'avg']),
  summaryTitle: _propTypes.default.string,
  granularity: _propTypes.default.string
};
TooltipBody.defaultProps = {
  granularity: 'month'
};