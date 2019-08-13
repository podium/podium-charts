function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  padding: 8px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-weight: 600;\n  font-size: 32px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 12px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 12px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, ReportingDatePicker } from '@podiumhq/podium-ui';
import Ghost from './Ghost/Ghost';
import { fullDate } from './utils/chartHelpers';
import { getRowSummaryMetric, getOverallSummaryMetric } from './utils/aggregators';
import formatters from './utils/formatters';
var SummaryWrapper = styled.div(_templateObject());
var ToDate = styled.div(_templateObject2(), colors.steel);
var TimeRange = styled.div(_templateObject3(), colors.steel);
var SummaryLabel = styled.div(_templateObject4(), colors.mineShaft);
var Space = styled.div(_templateObject5());

var getLatestSummaryMetric = function getLatestSummaryMetric(data, aggregationOptions) {
  if (!data) return null;
  var currentDataObj = data[data.length - 1];
  return getRowSummaryMetric(currentDataObj, aggregationOptions);
};

export default function Summary(_ref) {
  var data = _ref.data,
      formatter = _ref.formatter,
      granularity = _ref.granularity,
      unit = _ref.unit,
      loading = _ref.loading,
      timeRange = _ref.timeRange,
      dateStart = _ref.dateStart,
      dateEnd = _ref.dateEnd,
      aggregationOptions = _ref.aggregationOptions;

  var titleCase = function titleCase(str) {
    return str.toLowerCase().split(' ').map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
  };

  var renderGhostState = function renderGhostState() {
    return React.createElement(SummaryWrapper, null, React.createElement(Ghost, {
      height: "14px",
      width: "78px"
    }), React.createElement(Ghost, {
      height: "27px",
      width: "44px"
    }), React.createElement(Space, null), React.createElement(Ghost, {
      height: "14px",
      width: "78px"
    }), React.createElement(Ghost, {
      height: "27px",
      width: "44px"
    }));
  };

  var renderTimeRange = function renderTimeRange() {
    var selectedOption = ReportingDatePicker.options.find(function (option) {
      return option.value === timeRange;
    }) || {};

    if (timeRange === 'custom' && dateStart && dateEnd) {
      return React.createElement(TimeRange, null, "".concat(fullDate(dateStart, 'MMM'), " - ").concat(fullDate(dateEnd, 'MMM')));
    } else {
      return React.createElement(TimeRange, null, selectedOption.label);
    }
  };

  var shouldRenderToDate = function shouldRenderToDate(timeRange, dateEnd) {
    return enabledGranularityList.includes(timeRange) || timeRange === 'custom' && dateEnd === formatters.getToday();
  };

  if (loading) return renderGhostState();
  var currentData = getLatestSummaryMetric(data, aggregationOptions);
  var entireData = getOverallSummaryMetric(data, aggregationOptions);
  var currentDataFormatted = currentData === null ? 'N/A' : "".concat(formatter(currentData), " ").concat(unit);
  var entireDataFormatted = entireData === null ? 'N/A' : "".concat(formatter(entireData), " ").concat(unit);
  var enabledGranularityList = ['last12Months', 'monthToDate', 'today', 'weekToDate', 'yearToDate'];
  return React.createElement(SummaryWrapper, null, shouldRenderToDate(timeRange, dateEnd) && React.createElement("div", null, React.createElement(ToDate, null, titleCase(granularity), " to Date"), React.createElement(SummaryLabel, null, currentDataFormatted), React.createElement(Space, null)), renderTimeRange(), React.createElement(SummaryLabel, null, entireDataFormatted));
}
Summary.propTypes = {
  data: PropTypes.array.isRequired,
  aggregationOptions: PropTypes.shape({
    type: PropTypes.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
    dataKeys: PropTypes.array.isRequired,
    options: PropTypes.shape({
      valueKey: PropTypes.string,
      countKey: PropTypes.string
    })
  }).isRequired,
  formatter: PropTypes.func,
  loading: PropTypes.bool,
  unit: PropTypes.string,
  timeRange: PropTypes.oneOf(['custom', 'lastMonth', 'last12Months', 'lastWeek', 'lastYear', 'monthToDate', 'today', 'weekToDate', 'yearToDate', 'yesterday']),
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string
};
Summary.defaultProps = {
  unit: '',
  formatter: formatters.commatize
};