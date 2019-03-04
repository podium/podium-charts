"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.getOptions = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _podiumUi = require("@podiumhq/podium-ui");

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 200px;\n  div span div {\n    width: inherit;\n    padding-right: 0px;\n    border: 1px solid ", ";\n  }\n  div ul {\n    width: 90%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var GranularityWrapper = _styledComponents.default.div(_templateObject(), _podiumUi.colors.mystic);

var byMonth = {
  value: 'month',
  label: 'By Month'
}; // TODO: add back after we resolve issues related to weekly granularity in the platform
// const byWeek = { value: 'week', label: 'By Week' };

var byDay = {
  value: 'day',
  label: 'By Day'
};
var byHour = {
  value: 'hour',
  label: 'By Hour'
};
var optionsMap = {
  gtNinetyDays: [byMonth],
  gtThirtyOneDays: [byMonth, byDay],
  ltThirtyOneDays: [byDay],
  lastMonth: [byDay],
  last12Months: [byMonth],
  lastWeek: [byDay, byHour],
  lastYear: [byMonth],
  monthToDate: [byDay],
  today: [byHour],
  weekToDate: [byDay, byHour],
  yearToDate: [byMonth],
  yesterday: [byHour]
};

var getOptions = function getOptions(timeRange) {
  var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var dateStart = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var dateEnd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var resolvedTimeRange = timeRange === 'custom' ? getCustomRange(dateStart, dateEnd) : timeRange;
  var availableOptions = optionsMap[resolvedTimeRange].filter(function (granularity) {
    return !exclude.includes(granularity.value);
  });
  return availableOptions || optionsMap.monthToDate;
};

exports.getOptions = getOptions;

var getCustomRange = function getCustomRange(dateStart, dateEnd) {
  var dateStartMoment = (0, _moment.default)(dateStart);
  var dateEndMoment = (0, _moment.default)(dateEnd);
  var days = dateEndMoment.diff(dateStartMoment, 'days');

  if (days <= 31) {
    return 'ltThirtyOneDays';
  } else if (days <= 90) {
    return 'gtThirtyOneDays';
  } else {
    return 'gtNinetyDays';
  }
};

var Granularity =
/*#__PURE__*/
function (_Component) {
  _inherits(Granularity, _Component);

  function Granularity() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Granularity);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Granularity)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.timeRangeChanged = function (prevProps) {
      var _this$props = _this.props,
          timeRange = _this$props.timeRange,
          dateStart = _this$props.dateStart,
          dateEnd = _this$props.dateEnd;
      return prevProps.timeRange !== timeRange || prevProps.dateStart !== dateStart || prevProps.dateEnd !== dateEnd;
    }, _this.componentDidUpdate = function (prevProps) {
      var _this$props2 = _this.props,
          value = _this$props2.value,
          onChange = _this$props2.onChange,
          timeRange = _this$props2.timeRange,
          exclude = _this$props2.exclude,
          dateStart = _this$props2.dateStart,
          dateEnd = _this$props2.dateEnd;

      if (_this.timeRangeChanged(prevProps)) {
        var options = getOptions(timeRange, exclude, dateStart, dateEnd);
        var validRangeValues = options.map(function (option) {
          return option.value;
        });
        if (!validRangeValues.includes(value)) onChange(validRangeValues[0]);
      }
    }, _temp));
  }

  _createClass(Granularity, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          onChange = _this$props3.onChange,
          timeRange = _this$props3.timeRange,
          exclude = _this$props3.exclude,
          dateStart = _this$props3.dateStart,
          dateEnd = _this$props3.dateEnd;
      var options = getOptions(timeRange, exclude, dateStart, dateEnd);
      var placeholder = options[0].label || '';
      return _react.default.createElement(GranularityWrapper, null, _react.default.createElement(_podiumUi.Select, {
        options: options,
        placeholder: placeholder,
        onChange: onChange,
        theme: "light",
        value: value
      }));
    }
  }]);

  return Granularity;
}(_react.Component);

exports.default = Granularity;
Granularity.propTypes = {
  value: _propTypes.default.string,
  dateEnd: _propTypes.default.string,
  onChange: _propTypes.default.func,
  dateStart: _propTypes.default.string,
  timeRange: _propTypes.default.oneOf(['custom', 'lastMonth', 'last12Months', 'lastWeek', 'lastYear', 'monthToDate', 'today', 'weekToDate', 'yearToDate', 'yesterday']),
  exclude: _propTypes.default.arrayOf(_propTypes.default.oneOf(['month', 'week', 'day', 'hour']))
};
Granularity.defaultProps = {
  timeRange: 'monthToDate',
  exclude: []
};