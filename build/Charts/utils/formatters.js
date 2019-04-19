import moment from 'moment';
import humanReadableDuration from 'humanize-duration';
export function date() {
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
    var momentDate = moment.utc(date);
    return momentDate.isValid() ? momentDate.format(granularityFormat) : '';
  };
}
export var roundToPlaces = function roundToPlaces(places) {
  return function (input) {
    var number = Number(input);
    var modifier = Math.pow(10, places);
    var roundedNumber = Math.round(number * modifier) / modifier;
    return commatize(roundedNumber.toString());
  };
};
export var roundToSignificantFigures = function roundToSignificantFigures(figures) {
  return function (input) {
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
};
export function secondsToMinutes(int) {
  return commatize(Math.round(int / 60));
}
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function abbreviateNumber(value) {
  var figures = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  if (value < 10000) return commatize(value);
  var newValue = value;
  var suffixes = ['', 'K', 'M', 'B', 'T'];
  var suffixNum = 0;

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
  var minutes = seconds / 60;
  return roundToSignificantFigures(2)(minutes);
}
export function humanizeDuration(seconds) {
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
  var displayTime = humanReadableDuration(ms, humanizeConfig);
  return displayTime;
}
export var commatize = function commatize(number) {
  if (number !== undefined && number !== null) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return number;
};
export var nullToValue = function nullToValue(delegateFormatter, fallbackValue) {
  if (typeof fallbackValue === 'undefined') {
    throw new TypeError('No fallback value specified for formatter');
  }

  var formatter = function formatter(value, dataKey) {
    if (value === null) {
      return fallbackValue;
    } else {
      return delegateFormatter(value, dataKey);
    }
  };

  return formatter;
};
export default {
  abbreviateNumber: abbreviateNumber,
  abbreviateTime: abbreviateTime,
  capitalize: capitalize,
  commatize: commatize,
  nullToValue: nullToValue,
  date: date,
  humanizeDuration: humanizeDuration,
  secondsToMinutes: secondsToMinutes,
  roundToPlaces: roundToPlaces
};