import moment from 'moment';
import humanReadableDuration from 'humanize-duration';
export function date(date) {
  return moment(date).isValid ? moment(date).format('MMM') : '';
}
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function abbreviateNumber(value) {
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
export function humanizeDuration(seconds) {
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
  var displayTime = humanReadableDuration(ms, humanizeConfig);
  return displayTime;
}

var commaFormatNumber = function commaFormatNumber(number) {
  if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return number;
};

export default {
  abbreviateNumber: abbreviateNumber,
  capitalize: capitalize,
  date: date,
  humanizeDuration: humanizeDuration
};