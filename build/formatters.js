"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.date = date;
exports.capitalize = capitalize;
exports.abbreviateNumber = abbreviateNumber;
exports.humanizeDuration = humanizeDuration;
exports.default = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _humanizeDuration = _interopRequireDefault(require("humanize-duration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function date(date) {
  return (0, _moment.default)(date).isValid ? (0, _moment.default)(date).format('MMM') : '';
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function abbreviateNumber(value) {
  if (value < 1000) {
    return commaFormatNumber(value);
  }

  var newValue = value;
  var suffixes = ['', 'K', 'M', 'B', 'T'];
  var suffixNum = 0;

  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }

  newValue = newValue.toPrecision(3);
  newValue += suffixes[suffixNum];
  return newValue;
}

function humanizeDuration(seconds) {
  if (seconds < 60) return '< 1 min';
  var ms = seconds * 1000;
  var humanizeConfig = {
    largest: 2,
    // unicode for space, html collapses it otherwise
    delimiter: "\xA0\xA0\xA0",
    units: ['h', 'm'],
    language: 'abbreviations',
    spacer: ' ',
    round: true,
    languages: {
      abbreviations: {
        h: function h() {
          return 'hr';
        },
        m: function m() {
          return 'min';
        }
      }
    }
  };
  var displayTime = (0, _humanizeDuration.default)(ms, humanizeConfig);
  return displayTime;
}

var commaFormatNumber = function commaFormatNumber(number) {
  if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return number;
};

var _default = {
  abbreviateNumber: abbreviateNumber,
  capitalize: capitalize,
  date: date,
  humanizeDuration: humanizeDuration
};
exports.default = _default;