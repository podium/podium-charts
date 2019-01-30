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
    border: 1px solid #e4e9f0;
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
  gtNinetyDays: [byMonth, byWeek],
  gtThirtyOneDays: [byMonth, byWeek, byDay],
  ltThirtyOneDays: [byWeek, byDay],
  lastMonth: [byWeek, byDay],
  last12Months: [byMonth, byWeek],
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
    const { dateStart, dateEnd } = this.props;
    const dateStartMoment = moment(dateStart);
    const dateEndMoment = moment(dateEnd);
    const days = dateEndMoment.diff(dateStartMoment, 'days');

    if (days <= 31) {
      return optionsMap['ltThirtyOneDays'];
    } else if (days <= 90) {
      return optionsMap['gtThirtyOneDays'];
    } else {
      return optionsMap['gtNinetyDays'];
    }
  };

  timeRangeChanged = prevProps => {
    const { timeRange, dateStart, dateEnd } = this.props;
    return (
      prevProps.timeRange !== timeRange ||
      prevProps.dateStart !== dateStart ||
      prevProps.dateEnd !== dateEnd
    );
  };

  componentDidUpdate = prevProps => {
    const { value, onChange } = this.props;
    if (this.timeRangeChanged(prevProps)) {
      const options = this.getOptions();
      const validRangeValues = options.map(option => option.value);
      if (!validRangeValues.includes(value)) onChange(validRangeValues[0]);
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
  dateEnd: PropTypes.string,
  onChange: PropTypes.func,
  dateStart: PropTypes.string,
  timeRange: PropTypes.oneOf([
    'custom',
    'lastMonth',
    'last12Months',
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
