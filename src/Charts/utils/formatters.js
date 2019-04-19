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

export const roundToSignificantFigures = figures => input => {
  if (figures < 1) {
    throw new TypeError('Invalid number of significant figures');
  }

  if (input < 10) {
    return input.toFixed(figures - 1);
  }

  if (input < 100) {
    if (figures === 1) {
      return (Math.round(input / 10) * 10).toString();
    } else {
      return input.toFixed(figures - 2);
    }
  }

  if (input < 1000) {
    if (figures === 1) {
      return (Math.round(input / 100) * 100).toString();
    } else if (figures === 2) {
      return (Math.round(input / 10) * 10).toString();
    } else {
      return input.toFixed(figures - 3);
    }
  }

  if (input < 1000000) {
    return roundToSignificantFigures(figures)(input / 1000) + 'K';
  }

  return abbreviateNumber(input, figures);
};

export function secondsToMinutes(int) {
  return commatize(Math.round(int / 60));
}

export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function abbreviateNumber(value, figures = 3) {
  if (value < 10000) return commatize(value);
  let newValue = value;
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  let suffixNum = 0;
  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }
  newValue = newValue.toPrecision(figures);
  newValue += suffixes[suffixNum];
  return newValue;
}

/**
 * Convert seconds to minutes, and display rounded to two significant figures.
 *
 * @param {number} seconds
 */
export function abbreviateTime(seconds) {
  const minutes = seconds / 60;
  return roundToSignificantFigures(2)(minutes);
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
  if (number !== undefined && number !== null)
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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

export default {
  abbreviateNumber,
  abbreviateTime,
  capitalize,
  commatize,
  nullToValue,
  date,
  humanizeDuration,
  secondsToMinutes,
  roundToPlaces
};
