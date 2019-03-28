function _templateObject9() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 600;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  margin-top: 8px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 16px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n  background-color: ", ";\n  margin-right: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n  text-align: left;\n  justify-content: center;\n  font-size: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { colors } from '@podiumhq/podium-ui';
import get from 'lodash.get';
import { getRowSummaryMetric } from './utils/aggregators';
import formatters from './utils/formatters';
var TooltipBodyWrapper = styled.div(_templateObject(), colors.mineShaft);
var ColorLabel = styled.div(_templateObject2(), function (props) {
  return props.fill;
});
var TooltipData = styled.div(_templateObject3());
var Label = styled.div(_templateObject4());
var LabelValue = styled.div(_templateObject5());
var Body = styled.div(_templateObject6());
var Header = styled.div(_templateObject7());
var Summary = styled.div(_templateObject8());
var XAxisLabel = styled.div(_templateObject9());
var granMap = {
  month: 'MMMM YYYY',
  year: 'YYYY',
  day: 'MMMM D, YYYY',
  week: 'MMMM D, YYYY'
};

var fullDate = function fullDate(date, granularity) {
  var format = granMap[granularity] || 'MMMM YYYY';
  var momentDate = moment.utc(date);
  if (momentDate.isValid()) return momentDate.format(format);
  return date;
};

export default function TooltipBody(props) {
  var renderSummary = function renderSummary() {
    var payload = props.payload,
        summaryTitle = props.summaryTitle,
        aggregationOptions = props.aggregationOptions,
        formatter = props.formatter;
    var result = null; // If there is only one data key then display that and don't do any aggs

    if (payload && payload.length === 1) {
      result = get(payload, '[0].value');
    } else if (aggregationOptions) {
      var rowData = get(payload, '[0].payload');
      result = getRowSummaryMetric(rowData, aggregationOptions);
    }

    var formattedResult = formatter ? formatter(result) : result;
    return "".concat(formattedResult, " ").concat(summaryTitle);
  };

  var renderToolTipLegend = function renderToolTipLegend() {
    var payload = props.payload,
        formatter = props.formatter;
    return payload.reverse().map(function (dataField) {
      var value = dataField.value,
          color = dataField.color,
          name = dataField.name;
      return React.createElement(TooltipData, {
        key: name
      }, React.createElement(Label, null, React.createElement(ColorLabel, {
        fill: color
      }), React.createElement("div", null, name ? name : '')), React.createElement(LabelValue, null, formatter(value)));
    });
  };

  var summary = renderSummary();
  return React.createElement(TooltipBodyWrapper, null, React.createElement(Header, null, React.createElement(XAxisLabel, null, fullDate(props.label)), summary && React.createElement(Summary, null, summary)), props.showLegend && props.payload && React.createElement(Body, null, renderToolTipLegend()));
}
TooltipBody.propTypes = {
  aggregationOptions: PropTypes.shape({
    type: PropTypes.oneOf(['avg', 'total', 'weightedAvg']).isRequired,
    dataKeys: PropTypes.array.isRequired,
    options: PropTypes.shape({
      valueKey: PropTypes.string,
      countKey: PropTypes.string
    })
  }),
  summaryTitle: PropTypes.string,
  showLegend: PropTypes.bool,
  granularity: PropTypes.string
};
TooltipBody.defaultProps = {
  showLegend: true,
  granularity: 'month',
  formatter: formatters.commatize
};