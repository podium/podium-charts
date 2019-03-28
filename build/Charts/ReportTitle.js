function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 12px;\n  color: white;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-size: 12px;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0;\n  font-size: 16px;\n  font-weight: 500;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 16px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import { renderRangeLabel, fullDate } from './utils/chartHelpers';
var TitleWrapper = styled.div(_templateObject());
var Title = styled.div(_templateObject2());
var RangeLabel = styled.div(_templateObject3(), colors.steel);
var DateRangePlaceholder = styled.span(_templateObject4());
export default function ReportTitle(_ref) {
  var data = _ref.data,
      title = _ref.title,
      loading = _ref.loading,
      timeRange = _ref.timeRange,
      dateStart = _ref.dateStart,
      dateEnd = _ref.dateEnd;

  var renderTimeRange = function renderTimeRange() {
    if (timeRange === 'custom' && dateStart && dateEnd) {
      return "".concat(fullDate(dateStart), " - ").concat(fullDate(dateEnd));
    } else {
      return renderRangeLabel(data);
    }
  };

  return React.createElement(TitleWrapper, null, React.createElement(Title, null, title), React.createElement(RangeLabel, null, loading ? React.createElement(DateRangePlaceholder, null, "Date Range") : renderTimeRange()));
}
ReportTitle.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  timeRange: PropTypes.string,
  dateStart: PropTypes.string,
  dateEnd: PropTypes.string,
  loading: PropTypes.bool
};