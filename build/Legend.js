"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Legend;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _lodash = _interopRequireDefault(require("lodash.get"));

var _podiumUi = require("@podiumhq/podium-ui");

var _Ghost = _interopRequireDefault(require("./Ghost/Ghost"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 16px;\n  height: 16px;\n  border-radius: 2px;\n  background-color: ", ";\n  margin-right: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n  text-align: left;\n  justify-content: center;\n  font-size: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LegendWrapper = _styledComponents.default.div(_templateObject(), _podiumUi.colors.mineShaft);

var ItemWrapper = _styledComponents.default.div(_templateObject2());

var ColorLabel = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.color;
});

var Label = _styledComponents.default.div(_templateObject4());

function Legend(_ref) {
  var loading = _ref.loading,
      data = _ref.data,
      summaryType = _ref.summaryType,
      config = _ref.config,
      formatter = _ref.formatter;
  var typeHandler = {
    total: function total(dataKey) {
      return data.reduce(function (acc, dataField) {
        return (0, _lodash.default)(dataField, dataKey, 0) + acc;
      }, 0);
    },
    avg: function avg(dataKey) {
      return data.reduce(function (acc, dataField) {
        return (0, _lodash.default)(dataField, dataKey, 0) + acc;
      }, 0) / data.length;
    }
  };

  var calculateValue = function calculateValue(dataKey) {
    return typeHandler[summaryType](dataKey);
  };

  var renderGhostState = function renderGhostState() {
    return _react.default.createElement(LegendWrapper, null, _react.default.createElement(_Ghost.default, {
      row: true
    }), _react.default.createElement(_Ghost.default, {
      row: true
    }), _react.default.createElement(_Ghost.default, {
      row: true
    }));
  };

  var renderLegendItem = function renderLegendItem() {
    return config.map(function (legendItem) {
      var dataKey = legendItem.dataKey,
          color = legendItem.color,
          name = legendItem.name;
      return _react.default.createElement(ItemWrapper, {
        key: dataKey
      }, _react.default.createElement(Label, null, _react.default.createElement(ColorLabel, {
        color: color
      }), _react.default.createElement("div", null, name ? name : '')), _react.default.createElement("div", null, formatter(calculateValue(dataKey))));
    });
  };

  if (loading) return renderGhostState();
  return _react.default.createElement(LegendWrapper, null, renderLegendItem());
}

Legend.propTypes = {
  data: _propTypes.default.array.isRequired,
  summaryType: _propTypes.default.oneOf(['avg', 'total']),
  config: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string,
    color: _propTypes.default.string,
    dataKey: _propTypes.default.string
  })).isRequired,
  formatter: _propTypes.default.func,
  loading: _propTypes.default.bool
};
Legend.defaultProps = {
  summaryType: 'total',
  formatter: function formatter(value) {
    return value;
  }
};