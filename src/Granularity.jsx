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
  gtNinetyDays: [byMonth, byWeek, byDay],
  gtThirtyOneDays: [byWeek, byMonth, byDay],
  ltThirtyOneDays: [byDay, byWeek],
  lastMonth: [byWeek, byDay],
  lastTwelveMonths: [byMonth, byWeek, byDay],
  lastWeek: [byDay, byHour],
  lastYear: [byMonth, byWeek],
  monthToDate: [byWeek, byDay],
  today: [byHour],
  weekToDate: [byDay, byHour],
  yearToDate: [byMonth, byWeek],
  yesterday: [byHour]
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

  componentDidUpdate(prevProps, props) {
    if (prevProps.timeRange !== props.timeRange) {
      const options = this.getOptions();
      const validRangeValues = options.map(option => option.value);
      if (!(props.value in validRangeValues) && props.value !== 'custom')
        props.onChange(validRangeValues[0]);
    }
  }

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
    'custom',
    'lastMonth',
    'lastTwelveMonths',
    'lastWeek',
    'lastYear',
    'monthToDate',
    'today',
    'weekToDate',
    'yearToDate',
    'yesterday'
  ])
};

Granularity.defaultProps = {
  timeRange: 'monthToDate'
};
