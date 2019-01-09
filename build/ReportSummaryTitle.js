"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ReportSummaryTitle;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _podiumUi = require("@podiumhq/podium-ui");

var _Ghost = _interopRequireDefault(require("./Ghost"));

var _Trend = _interopRequireDefault(require("./Trend"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-size: 32px;\n  font-weight: 600;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding-top: 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//const calculateTrendColor = ({ direction, preferDown }) => {
//switch (direction) {
//case 'up':
//return preferDown ? colors.poppyRed : colors.podiumBrand;
//case 'down':
//return preferDown ? colors.podiumBrand : colors.poppyRed;
//default:
//return colors.iron;
//}
//};
//const TrendWrapper = styled.div`
//margin-left: 8px;
//display: flex;
//justify-content: center;
//align-items: center;
//width: 22px;
//height: 22px;
//border-radius: 2px;
//background-color: ${props => calculateTrendColor(props)};
//${({ direction }) =>
//direction === 'up' && `svg { transform: translate(90deg); } `}
//`;
var SummaryTitleWrapper = _styledComponents.default.div(_templateObject());

var Title = _styledComponents.default.div(_templateObject2(), _podiumUi.colors.mineShaft);

var MonthToDate = _styledComponents.default.div(_templateObject3(), _podiumUi.colors.mineShaft);

var MonthToDateLabel = _styledComponents.default.div(_templateObject4(), _podiumUi.colors.steel); //const Trend = ({ direction, preferDown }) => (
//<TrendWrapper direction={direction} preferDown={preferDown}>
//{direction === 'neutral' ? (
//<IconMinus color={colors.white} size="12" />
//) : (
//<IconArrow color={colors.white} size="12" direction={direction} />
//)}
//</TrendWrapper>
//);


function ReportSummaryTitle(_ref) {
  var data = _ref.data,
      title = _ref.title,
      summaryType = _ref.summaryType,
      dataKeys = _ref.dataKeys,
      formatter = _ref.formatter,
      granularity = _ref.granularity,
      trendDirection = _ref.trendDirection,
      preferDown = _ref.preferDown,
      loading = _ref.loading;
  var summaryHandler = {
    total: function total(periodData) {
      return dataKeys.reduce(function (acc, key) {
        return (periodData[key] || 0) + acc;
      }, 0);
    },
    avg: function avg(periodData) {
      return dataKeys.reduce(function (acc, key) {
        return (periodData[key] || 0) + acc;
      }, 0) / dataKeys.length;
    }
  };

  var currentValue = function currentValue() {
    var currentData = data[data.length - 1];
    return summaryHandler[summaryType](currentData);
  };

  var renderGhostState = function renderGhostState() {
    return _react.default.createElement(SummaryTitleWrapper, null, _react.default.createElement(Title, null, title), _react.default.createElement(_Ghost.default, null), _react.default.createElement(MonthToDateLabel, null, "Month To Date"));
  };

  if (loading) return renderGhostState();
  return _react.default.createElement(SummaryTitleWrapper, null, _react.default.createElement(Title, null, title), _react.default.createElement(MonthToDate, null, formatter(currentValue()), _react.default.createElement(_Trend.default, {
    direction: trendDirection,
    preferDown: preferDown
  })), _react.default.createElement(MonthToDateLabel, null, "Month To Date"));
}

ReportSummaryTitle.propTypes = {
  data: _propTypes.default.array.isRequired,
  title: _propTypes.default.string.isRequired,
  summaryType: _propTypes.default.oneOf(['avg', 'total']),
  dataKeys: _propTypes.default.array.isRequired,
  trendDirection: _propTypes.default.oneOf(['up', 'down', 'neutral']),
  loading: _propTypes.default.bool,
  preferDown: _propTypes.default.bool
};
ReportSummaryTitle.defaultProps = {
  summaryType: 'total',
  formatter: function formatter(value) {
    return value;
  },
  preferDown: false,
  trendDirection: 'neutral'
};