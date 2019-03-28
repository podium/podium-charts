function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  font-weight: 600;\n  font-size: 32px;\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  font-size: 16px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  padding-top: 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors, ToolTip } from '@podiumhq/podium-ui';
import Ghost from './Ghost/Ghost';
import Trend from './Trend';
import { getOverallSummaryMetric, calculateTrend } from './utils/aggregators';
var SummaryTitleWrapper = styled.div(_templateObject());
var Title = styled.div(_templateObject2(), colors.mineShaft);
var MonthToDate = styled.div(_templateObject3(), colors.mineShaft, function (_ref) {
  var smallWidth = _ref.smallWidth;
  return smallWidth !== 0 && "\n    @media (max-width: ".concat(smallWidth, "px) {\n      font-size: 24px;\n    }\n  ");
});
var MonthToDateLabel = styled.div(_templateObject4(), colors.steel);
var ToolTipWrapper = styled.div(_templateObject5());
export default function ReportSummaryTitle(_ref2) {
  var data = _ref2.data,
      title = _ref2.title,
      dataKeys = _ref2.dataKeys,
      formatter = _ref2.formatter,
      granularity = _ref2.granularity,
      trendDirection = _ref2.trendDirection,
      preferDown = _ref2.preferDown,
      loading = _ref2.loading,
      tooltip = _ref2.tooltip,
      trendData = _ref2.trendData,
      aggregationOptions = _ref2.aggregationOptions,
      smallWidth = _ref2.smallWidth;

  var renderGhostState = function renderGhostState() {
    return React.createElement(SummaryTitleWrapper, null, React.createElement(Title, null, title), React.createElement(Ghost, {
      height: "24px"
    }), React.createElement(MonthToDateLabel, null, "Month To Date"));
  };

  var renderToolTip = function renderToolTip(prevDataValue) {
    return React.createElement(ToolTipWrapper, null, React.createElement("div", null, "This time last month:"), React.createElement("div", {
      style: {
        textAlign: 'left'
      }
    }, prevDataValue === null ? 'N/A' : formatter(prevDataValue)));
  };

  if (loading) return renderGhostState();
  var prevDataValue = trendData ? getOverallSummaryMetric(trendData[0], aggregationOptions) : 0;
  var currDataValue = trendData ? getOverallSummaryMetric(trendData[1], aggregationOptions) : 0;
  var currDataFormatted = currDataValue === null ? 'N/A' : formatter(currDataValue);
  return React.createElement(SummaryTitleWrapper, null, React.createElement(Title, null, title), React.createElement(MonthToDate, {
    smallWidth: smallWidth
  }, React.createElement("span", {
    style: {
      marginRight: '8px'
    }
  }, currDataFormatted), React.createElement(ToolTip, {
    type: "arrow",
    tip: renderToolTip(prevDataValue),
    position: "top"
  }, React.createElement(Trend, {
    direction: calculateTrend(prevDataValue, currDataValue),
    preferDown: preferDown
  }))), React.createElement(MonthToDateLabel, null, "Month To Date"));
}
ReportSummaryTitle.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  dataKeys: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  preferDown: PropTypes.bool,
  trendData: PropTypes.array.isRequired,
  aggregationOptions: PropTypes.shape({
    type: PropTypes.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
    dataKeys: PropTypes.array.isRequired,
    options: PropTypes.shape({
      valueKey: PropTypes.string,
      countKey: PropTypes.string
    })
  }).isRequired,
  smallWidth: PropTypes.number
};
ReportSummaryTitle.defaultProps = {
  formatter: function formatter(value) {
    return value;
  },
  preferDown: false,
  smallWidth: 0
};