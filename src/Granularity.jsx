import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'podium-ui';
import styled from 'styled-components';

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
  today: [byHour]
};

const displayMap = {
  month: byMonth.label,
  week: byWeek.label,
  day: byDay.label,
  hour: byHour.label
};

export default class Granularity extends Component {
  render() {
    const { current, timeRange, onChange } = this.props;
    const options = optionsMap[timeRange];
    const placeholder = displayMap[current] || options[0].label;

    return (
      <GranularityWrapper>
        <Select
          options={options}
          placeholder={placeholder}
          onChange={onChange}
          theme="light"
        />
      </GranularityWrapper>
    );
  }
}

Granularity.propTypes = {
  current: PropTypes.string,
  onChange: PropTypes.func,
  timeRange: PropTypes.string
};

Granularity.defaultProps = {
  timeRange: 'monthToDate'
};
