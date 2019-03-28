function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .recharts-cartesian-axis-tick-value {\n    font-size: 11px;\n  }\n\n  .recharts-tooltip-wrapper-left:after {\n    content: '';\n    position: absolute;\n    margin-left: -12px;\n    width: 0;\n    height: 0;\n    top: 60%;\n    right: -15px;\n    transform: rotate(225deg);\n    transform-origin: 0 0;\n    box-sizing: border-box;\n    border: 8px solid black;\n    border-color: transparent transparent ", " ", ";\n    box-shadow: -3px 2px 4px 0 rgba(0, 0, 0, 0.1);\n  }\n\n  .recharts-tooltip-wrapper-right:after {\n    content: '';\n    position: absolute;\n    margin-left: -12px;\n    width: 0;\n    height: 0;\n    top: 35%;\n    left: 13px;\n    transform: rotate(45deg);\n    transform-origin: 0 0;\n    box-sizing: border-box;\n    border: 8px solid black;\n    border-color: transparent transparent ", " ", ";\n    box-shadow: -2px 3px 4px 0 rgba(0, 0, 0, 0.1);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
export var ChartWrapper = styled.div(_templateObject(), colors.white, colors.white, colors.white, colors.white);