function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { colors as podiumUiColors } from '@podiumhq/podium-ui';

var colors = _objectSpread({}, podiumUiColors, {
  athensGray: '#e8e9ec',
  bondiBlue: '#008DB8',
  chathamsBlue: '#11497D',
  hawkesBlue: '#CCD7FC',
  jollyGreen: '#00804F',
  mandy: '#EE5866',
  mariner: '#3768D3',
  matisse: '#1B5493',
  turquoise: '#28CBAD'
});

export default colors;