"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Legend;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _podiumUi = require("@podiumhq/podium-ui");

var _lodash = _interopRequireDefault(require("lodash.get"));

var _Ghost = _interopRequireDefault(require("./Ghost/Ghost"));

var _aggregators = require("../utils/aggregators");

var _formatters = _interopRequireDefault(require("../utils/formatters"));

var _ReportCardContext = _interopRequireDefault(require("./ReportCardContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  cursor: default;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 12px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n  text-align: left;\n  justify-content: center;\n  font-size: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LegendWrapper = _styledComponents.default.div(_templateObject(), _podiumUi.colors.mineShaft);

var ItemWrapper = _styledComponents.default.div(_templateObject2(), function (_ref) {
  var enabled = _ref.enabled;
  return !enabled && "\n    opacity: 0.3;\n  ";
});

var ColorLabel = _styledComponents.default.div(_templateObject3(), function (props) {
  return props.color;
});

var Label = _styledComponents.default.div(_templateObject4());

function Legend(_ref2) {
  var loading = _ref2.loading,
      data = _ref2.data,
      aggregationOptions = _ref2.aggregationOptions,
      displayOptions = _ref2.displayOptions,
      formatter = _ref2.formatter;

  var calculateValue = function calculateValue(dataKey) {
    var itemAggregationOptions = {
      type: aggregationOptions.type,
      dataKeys: [dataKey],
      options: aggregationOptions.options
    };
    return (0, _aggregators.getOverallSummaryMetric)(data, itemAggregationOptions);
  };

  var createAggMap = function createAggMap() {
    var dataKeys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return dataKeys.reduce(function (acc, dataKey) {
      return _objectSpread({}, acc, _defineProperty({}, dataKey, calculateValue(dataKey)));
    }, {});
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

  var renderLegendItems = function renderLegendItems() {
    var aggMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var selectedKey = arguments.length > 1 ? arguments[1] : undefined;
    var onSelectKey = arguments.length > 2 ? arguments[2] : undefined;
    // TODO: why do we need to reverse the displayOptions?
    // Maybe we want to reverse the rendering of stacked bars instead
    return displayOptions.slice().reverse().map(function (legendItem) {
      var dataKey = legendItem.dataKey,
          color = legendItem.color,
          name = legendItem.name;
      var formattedValue = formatter(aggMap[dataKey], dataKey);
      return _react.default.createElement(ItemWrapper, {
        key: name,
        enabled: !selectedKey || dataKey === selectedKey,
        onMouseEnter: function onMouseEnter() {
          return onSelectKey(dataKey);
        },
        onMouseLeave: function onMouseLeave() {
          return onSelectKey(null);
        }
      }, _react.default.createElement(Label, null, _react.default.createElement(ColorLabel, {
        color: color
      }), _react.default.createElement("div", null, name ? name : '')), formattedValue && _react.default.createElement("div", null, formattedValue));
    });
  };

  if (loading) return renderGhostState();
  var dataKeys = (0, _lodash.default)(aggregationOptions, 'dataKeys');
  var aggMap = createAggMap(dataKeys);
  return _react.default.createElement(_ReportCardContext.default.Consumer, null, function (_ref3) {
    var selectedKey = _ref3.selectedKey,
        onSelectKey = _ref3.onSelectKey;
    return _react.default.createElement(LegendWrapper, null, renderLegendItems(aggMap, selectedKey, onSelectKey));
  });
}

Legend.propTypes = {
  data: _propTypes.default.array.isRequired,
  aggregationOptions: _propTypes.default.shape({
    type: _propTypes.default.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
    dataKeys: _propTypes.default.array.isRequired,
    options: _propTypes.default.shape({
      valueKey: _propTypes.default.string,
      countKey: _propTypes.default.string
    })
  }),
  displayOptions: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string,
    color: _propTypes.default.string,
    dataKey: _propTypes.default.string
  })).isRequired,
  formatter: _propTypes.default.func,
  loading: _propTypes.default.bool
};
Legend.defaultProps = {
  formatter: _formatters.default.commatize
};