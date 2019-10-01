function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-right: 8px;\n  color: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  min-width: 16px;\n  min-height: 16px;\n  border-radius: 2px;\n  background-color: ", ";\n  margin-right: 8px;\n"]);

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

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import get from 'lodash.get';
import Ghost from './Ghost/Ghost';
import formatters from './utils/formatters';
import ReportCardContext from './ReportCardContext';
var LegendWrapper = styled.div(_templateObject(), colors.mineShaft);
var ItemWrapper = styled.div(_templateObject2(), function (_ref) {
  var enabled = _ref.enabled;
  return !enabled && "\n    opacity: 0.3;\n  ";
});
var ColorLabel = styled.div(_templateObject3(), function (props) {
  return props.color;
});
var Label = styled.div(_templateObject4(), function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && colors.steel;
});
export default function Legend(_ref3) {
  var loading = _ref3.loading,
      legendData = _ref3.legendData,
      aggregationOptions = _ref3.aggregationOptions,
      displayOptions = _ref3.displayOptions,
      formatter = _ref3.formatter;

  var getDataKeys = function getDataKeys(displayOptions) {
    return displayOptions.reduce(function (acc, option) {
      return [].concat(_toConsumableArray(acc), [option.dataKey]);
    }, []);
  };

  var getValue = function getValue(legendData, dataKey) {
    var value = get(legendData, dataKey);
    if (!value) return null;
    return value;
  };

  var createLegendMap = function createLegendMap(legendData) {
    var dataKeys = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    return dataKeys.reduce(function (acc, dataKey) {
      return _objectSpread({}, acc, _defineProperty({}, dataKey, getValue(legendData, dataKey)));
    }, {});
  };

  var renderGhostState = function renderGhostState() {
    return React.createElement(LegendWrapper, null, React.createElement(Ghost, {
      row: true
    }), React.createElement(Ghost, {
      row: true
    }), React.createElement(Ghost, {
      row: true
    }));
  };

  var renderLegendItems = function renderLegendItems() {
    var aggMap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var selectedKey = arguments.length > 1 ? arguments[1] : undefined;
    var onSelectKey = arguments.length > 2 ? arguments[2] : undefined;
    var legendItems = [];
    var filteredItems = [];
    displayOptions.forEach(function (item) {
      item.disabled ? filteredItems.push(item) : legendItems.push(item);
    });
    return legendItems.concat(filteredItems).slice().map(function (legendItem) {
      var dataKey = legendItem.dataKey,
          color = legendItem.color,
          name = legendItem.name,
          disabled = legendItem.disabled;
      var formattedValue = formatter(aggMap[dataKey], dataKey);
      return React.createElement(ItemWrapper, {
        key: name,
        enabled: !selectedKey || dataKey === selectedKey,
        onMouseEnter: function onMouseEnter() {
          return onSelectKey(dataKey);
        },
        onMouseLeave: function onMouseLeave() {
          return onSelectKey(null);
        }
      }, React.createElement(Label, {
        disabled: disabled
      }, React.createElement(ColorLabel, {
        color: disabled ? colors.mystic : color
      }), React.createElement("div", null, name ? name : '')), formattedValue && React.createElement("div", null, formattedValue));
    });
  };

  if (loading) return renderGhostState();
  var dataKeys = getDataKeys(displayOptions);
  var legendMap = createLegendMap(legendData, dataKeys);
  return React.createElement(ReportCardContext.Consumer, null, function (_ref4) {
    var selectedKey = _ref4.selectedKey,
        onSelectKey = _ref4.onSelectKey;
    return React.createElement(LegendWrapper, null, renderLegendItems(legendMap, selectedKey, onSelectKey));
  });
}
Legend.propTypes = {
  /** An object containing the dataKeys and the associated values to be displayed */
  legendData: PropTypes.object.isRequired,
  aggregationOptions: PropTypes.shape({
    type: PropTypes.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
    dataKeys: PropTypes.array.isRequired,
    options: PropTypes.shape({
      valueKey: PropTypes.string,
      countKey: PropTypes.string
    })
  }),
  displayOptions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    color: PropTypes.string,
    dataKey: PropTypes.string
  })).isRequired,
  formatter: PropTypes.func,
  loading: PropTypes.bool
};
Legend.defaultProps = {
  formatter: formatters.commatize
};