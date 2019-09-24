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
export function secondsToMinutes(_int) {
  return commatize(Math.round(_int / 60));
}
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export function abbreviateNumber(value) {
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
export function abbreviateTime(seconds) {
  var minutes = Math.round(seconds / 60);
  return abbreviateNumber(minutes);
}
export function humanizeDuration(seconds) {
  if (seconds < 60) return '< 1 min';
  var ms = seconds * 1000;
  var humanizeConfig = {
    largest: 2,
    delimiter: "\xA0",
    units: ['d', 'h', 'm'],
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
        },
        d: function d(x) {
          return x === 1 ? 'day' : 'days';
        }
      }
    }
  };
  var displayTime = humanReadableDuration(ms, humanizeConfig);
  return displayTime;
}
export var commatize = function commatize(number) {
  if (number) return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
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
export var getToday = function getToday() {
  var format = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'YYYY-MM-DD';
  var today = new Date();
  return moment(today).format(format);
}; //handles USD only as of now

export var currency = function currency(pennies) {
  if (pennies.toString().indexOf('.') !== -1) {
    throw new TypeError("Input must be an integer. Value provided: ".concat(pennies));
  }

  var dollars = Math.floor(pennies / 100);
  var cents = pennies % 100;
  var formattedCents = cents === 0 ? '00' : cents;
  return "$".concat(commatize(dollars), ".").concat(formattedCents);
};
export var currencyRounded = function currencyRounded(pennies) {
  if (pennies.toString().indexOf('.') !== -1) {
    throw new TypeError("Input must be an integer. Value provided: ".concat(pennies));
  }

  var dollars = pennies / 100;
  var roundedDollars = Math.round(dollars);
  return "$".concat(commatize(roundedDollars));
};
export var currencyRoundedAndShortened = function currencyRoundedAndShortened(pennies) {
  if (pennies.toString().indexOf('.') !== -1) {
    throw new TypeError("Input must be an integer. Value provided: ".concat(pennies));
  }

  var dollars = pennies / 100;
  var roundedDollars = Math.round(dollars);

  if (roundedDollars >= 0 && roundedDollars <= 999) {
    return "$".concat(commatize(roundedDollars));
  }

  var newValue = roundedDollars;
  var suffixes = ['', 'K', 'M', 'B', 'T'];
  var suffixNum = 0;

  while (newValue >= 1000) {
    newValue /= 1000;
    suffixNum++;
  }

  newValue = newValue.toFixed(1);

  if (newValue.length >= 4) {
    newValue = Math.round(newValue);
  }

  newValue += suffixes[suffixNum];
  return "$".concat(commatize(newValue));
};
export default {
  abbreviateNumber: abbreviateNumber,
  abbreviateTime: abbreviateTime,
  capitalize: capitalize,
  commatize: commatize,
  getToday: getToday,
  nullToValue: nullToValue,
  date: date,
  humanizeDuration: humanizeDuration,
  secondsToMinutes: secondsToMinutes,
  roundToPlaces: roundToPlaces,
  currency: currency,
  currencyRounded: currencyRounded,
  currencyRoundedAndShortened: currencyRoundedAndShortened
};