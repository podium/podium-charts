import moment from 'moment';
import humanReadableDuration from 'humanize-duration';

export function date(granularity = 'month') {
  const granularityMap = {
    hour: 'ha',
    day: 'MMM D',
    week: 'MMM D',
    month: 'MMM',
    year: 'YYYY'
  };
  const granularityFormat = granularityMap[granularity];

  if (!granularityFormat) return () => '';
  return date => {
    const momentDate = moment.utc(date);
    return momentDate.isValid() ? momentDate.format(granularityFormat) : '';
  };
}

export const roundToPlaces = places => input => {
  const number = Number(input);
  const modifier = Math.pow(10, places);
  const roundedNumber = Math.round(number * modifier) / modifier;
  return commatize(roundedNumber.toString());
};

export function secondsToMinutes(int) {
  return commatize(Math.round(int / 60));
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function abbreviateNumber(value) {
  if (value < 10000) return commatize(value);
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

export function abbreviateTime(seconds) {
  const minutes = Math.round(seconds / 60);
  return abbreviateNumber(minutes);
}

export function humanizeDuration(seconds) {
  if (seconds < 60) return '< 1 min';

  const ms = seconds * 1000;
  const humanizeConfig = {
    largest: 2,
    delimiter: '\u00A0',
    units: ['h', 'm'],
    language: 'abbreviations',
    spacer: ' ',
    round: true,
    languages: {
      abbreviations: { h: () => 'hr', m: () => 'min' }
    }
  };
  const displayTime = humanReadableDuration(ms, humanizeConfig);
  return displayTime;
}

export const commatize = number => {
  if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return number;
};

export const nullToValue = (delegateFormatter, fallbackValue) => {
  if (typeof fallbackValue === 'undefined') {
    throw new TypeError('No fallback value specified for formatter');
  }
  const formatter = (value, dataKey) => {
    if (value === null) {
      return fallbackValue;
    } else {
      return delegateFormatter(value, dataKey);
    }
  };
  return formatter;
};

export const getToday = (format = 'YYYY-MM-DD') => {
  let today = new Date();

  return moment(today).format(format);
};

//handles USD only as of now
export const currency = pennies => {
  if (pennies.toString().indexOf('.') !== -1) {
    throw new TypeError(`Input must be an integer. Value provided: ${pennies}`);
  }
  const dollars = Math.floor(pennies / 100);
  const cents = pennies % 100;

  return `$${commatize(dollars)}.${cents}`;
};

export const currencyRounded = pennies => {
  if (pennies.toString().indexOf('.') !== -1) {
    throw new TypeError(`Input must be an integer. Value provided: ${pennies}`);
  }

  const dollars = pennies / 100;
  const roundedDollars = Math.round(dollars);

  return `$${commatize(roundedDollars)}`;
};

export default {
  abbreviateNumber,
  abbreviateTime,
  capitalize,
  commatize,
  getToday,
  nullToValue,
  date,
  humanizeDuration,
  secondsToMinutes,
  roundToPlaces,
  currency,
  currencyRounded
};
