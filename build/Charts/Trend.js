function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 18px;\n  height: 18px;\n  border-radius: 2px;\n  background-color: ", ";\n  margin: 2px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 24px;\n  width: 24px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { colors, IconUploadSquareSolid, IconDownloadSquareSolid, IconMinus } from '@podiumhq/podium-ui';

var calculateTrendIconColor = function calculateTrendIconColor(direction, preferDown) {
  switch (direction) {
    case 'up':
      return preferDown ? colors.poppyRed : colors.podiumBrand;

    case 'down':
      return preferDown ? colors.podiumBrand : colors.poppyRed;

    default:
      return colors.white;
  }
};

var arrowCss = css(_templateObject());
var StyledIconUpArrow = styled(IconUploadSquareSolid)(_templateObject2(), arrowCss);
var StyledIconDownArrow = styled(IconDownloadSquareSolid)(_templateObject3(), arrowCss);
var NeutralTrendWrapper = styled.div(_templateObject4(), colors.iron);

var Trend = function Trend(_ref) {
  var direction = _ref.direction,
      preferDown = _ref.preferDown;

  switch (direction) {
    case 'up':
      return React.createElement(StyledIconUpArrow, {
        color: calculateTrendIconColor(direction, preferDown)
      });

    case 'down':
      return React.createElement(StyledIconDownArrow, {
        color: calculateTrendIconColor(direction, preferDown)
      });

    default:
      return React.createElement(NeutralTrendWrapper, null, React.createElement(IconMinus, {
        color: colors.white,
        size: "small"
      }));
  }
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