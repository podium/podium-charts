function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 2px;\n  background-color: ", ";\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, IconArrow, IconMinus } from '@podiumhq/podium-ui';

var calculateTrendColor = function calculateTrendColor(_ref) {
  var direction = _ref.direction,
      preferDown = _ref.preferDown;

  switch (direction) {
    case 'up':
      return preferDown ? colors.poppyRed : colors.podiumBrand;

    case 'down':
      return preferDown ? colors.podiumBrand : colors.poppyRed;

    default:
      return colors.iron;
  }
};

var TrendWrapper = styled.div(_templateObject(), function (props) {
  return calculateTrendColor(props);
}, function (_ref2) {
  var direction = _ref2.direction;
  return direction === 'up' && "svg { transform: translate(90deg); } ";
});

var Trend = function Trend(_ref3) {
  var direction = _ref3.direction,
      preferDown = _ref3.preferDown;
  return React.createElement(TrendWrapper, {
    direction: direction,
    preferDown: preferDown
  }, direction === 'neutral' ? React.createElement(IconMinus, {
    color: colors.white,
    size: "small"
  }) : React.createElement(IconArrow, {
    color: colors.white,
    size: "small",
    direction: direction
  }));
};

Trend.propTypes = {
  direction: PropTypes.string.isRequired,
  preferDown: PropTypes.bool
};
Trend.defaultProps = {
  direction: 'neutral',
  preferDown: false
};
export default Trend;