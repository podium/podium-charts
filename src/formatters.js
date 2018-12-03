import moment from 'moment';
import humanizeDuration from 'humanize-duration';

export function dateFormatter(date) {
  return moment(date).isValid ? moment(date).format('MMM') : '';
}

export function dateFormatterFull(date) {
  if (moment(date).isValid) return moment(date).format('MMMM YYYY');
  return date;
}

export function capitalizeFormatter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function abbreviateNumberFormatter(value) {
  if (value < 1000) {
    return commaFormatNumber(value);
  }
  let newValue = value;
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixNum = 0;
  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }

  newValue = newValue.toPrecision(3);

  newValue += suffixes[suffixNum];
  return newValue;
}

export function humanizeDurationFormatter(seconds) {
  if (seconds < 60) return '< 1 min';

  const ms = seconds * 1000;
  const humanizeConfig = {
    largest: 2,
    // unicode for space, html collapses it otherwise
    delimiter: '\u00A0\u00A0\u00A0',
    units: ['h', 'm'],
    language: 'abbreviations',
    spacer: ' ',
    round: true,
    languages: {
      abbreviations: {
        h: () => 'hr',
        m: () => 'min'
      }
    }
  };
  const displayTime = humanizeDuration(ms, humanizeConfig);
  return displayTime;
}

const commaFormatNumber = number => {
  if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return number;
};
