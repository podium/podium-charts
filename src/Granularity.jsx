import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from '@podiumhq/podium-ui';
import styled from 'styled-components';
import moment from 'moment';

const GranularityWrapper = styled.div`
  width: 200px;
  div span div {
    width: inherit;
    padding-right: 0px;
  }
  div ul {
    width: 90%;
  }
`;

const byMonth = { value: 'month', label: 'By Month' };
const byWeek = { value: 'week', label: 'By Week' };
const byDay = { value: 'day', label: 'By Day' };
const byHour = { value: 'hour', label: 'By Hour' };

const optionsMap = {
  lastTwelveMonths: [byMonth, byWeek, byDay],
  monthToDate: [byWeek, byDay],
  weekToDate: [byDay, byHour],
  today: [byHour],
  gtNinetyDays: [byMonth, byWeek, byDay],
  gtThirtyOneDays: [byWeek, byMonth, byDay],
  ltThirtyOneDays: [byDay, byWeek]
};

export default class Granularity extends Component {
  getOptions = () => {
    const { timeRange } = this.props;
    if (timeRange === 'custom') {
      return this.getCustomRangeOptions();
    }
    return optionsMap[timeRange] || optionsMap.monthToDate;
  };

  getCustomRangeOptions = () => {
    const { startDate, endDate } = this.props;
    const startDateMoment = moment(startDate);
    const endDateMoment = moment(endDate);
    const days = endDateMoment.diff(startDateMoment, 'days');

    if (days <= 31) {
      return optionsMap['ltThirtyOneDays'];
    } else if (days <= 90) {
      return optionsMap['gtThirtyOneDays'];
    } else {
      return optionsMap['gtNinetyDays'];
    }
  };

  render() {
    const { value, onChange } = this.props;
    const options = this.getOptions();
    const placeholder = options[0].label || '';

    return (
      <GranularityWrapper>
        <Select
          options={options}
          placeholder={placeholder}
          onChange={onChange}
          theme="light"
          value={value}
        />
      </GranularityWrapper>
    );
  }
}

Granularity.propTypes = {
  value: PropTypes.string,
  endDate: PropTypes.string,
  onChange: PropTypes.func,
  startDate: PropTypes.string,
  timeRange: PropTypes.oneOf([
    'lastTwelveMonths',
    'monthToDate',
    'weekToDate',
    'today'
  ])
};

Granularity.defaultProps = {
  timeRange: 'monthToDate'
};
