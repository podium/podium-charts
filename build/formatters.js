"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.date = date;
exports.secondsToMinutes = secondsToMinutes;
exports.capitalize = capitalize;
exports.abbreviateNumber = abbreviateNumber;
exports.abbreviateTime = abbreviateTime;
exports.humanizeDuration = humanizeDuration;
exports.default = exports.commatize = exports.roundToPlaces = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _humanizeDuration = _interopRequireDefault(require("humanize-duration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function date() {
  var granularity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'month';
  var granularityMap = {
    hour: 'ha',
    day: 'MMM D',
    week: 'MMM D',
    month: 'MMM',
    year: 'YYYY'
  };
  var granularityFormat = granularityMap[granularity];
  if (!granularityFormat) return function () {
    return '';
  };
  return function (date) {
    var momentDate = _moment.default.utc(date);

    return momentDate.isValid() ? momentDate.format(granularityFormat) : '';
  };
}

var roundToPlaces = function roundToPlaces(places) {
  return function (input) {
    var number = Number(input);
    var modifier = Math.pow(10, places);
    var roundedNumber = Math.round(number * modifier) / modifier;
    return roundedNumber.toString();
  };
};

exports.roundToPlaces = roundToPlaces;

function secondsToMinutes(int) {
  return commatize(Math.round(int / 60));
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function abbreviateNumber(value) {
  if (value < 10000) return commatize(value);
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

function abbreviateTime(seconds) {
  var minutes = Math.round(seconds / 60);
  return abbreviateNumber(minutes);
}

function humanizeDuration(seconds) {
  if (seconds < 60) return '< 1 min';
  var ms = seconds * 1000;
  var humanizeConfig = {
    largest: 2,
    delimiter: "\xA0",
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

var commatize = function commatize(number) {
  if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return number;
};

exports.commatize = commatize;
var _default = {
  abbreviateNumber: abbreviateNumber,
  abbreviateTime: abbreviateTime,
  capitalize: capitalize,
  commatize: commatize,
  date: date,
  humanizeDuration: humanizeDuration,
  secondsToMinutes: secondsToMinutes,
  roundToPlaces: roundToPlaces
};
exports.default = _default;