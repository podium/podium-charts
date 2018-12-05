import React, { Component } from 'react'
//import PropTypes from 'prop-types'
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

const byMonth = {value: 'month', label: "By Month"}
const byWeek = {value: 'week', label: "By Week"}
const byDay = {value: 'day', label: "By Day"}
const byHour = {value: 'hour', label: "By Hour"}

const optionsMap = {
	lastTwelveMonths: [byMonth, byWeek, byDay],
	monthToDate: [byWeek, byDay],
	today: [byHour],
	weekToDate: [byDay, byHour]
}

const displayMap = {
  month: byMonth['label'],
  week: byWeek['label'],
  day: byDay['label'],
	hour: byHour['label'],
	lastTwelveMonths: byMonth['label'],
	monthToDate: byWeek['label'],
	weekToDate: byDay['label'],
	today: byHour['label']
}

export default class Granularity extends Component {
	render() {
		const { current, timeRange, onChange } = this.props;

		return (
			<GranularityWrapper>
				<Select
					options={optionsMap[timeRange]}
					placeholder={displayMap[current] || displayMap[timeRange]}
					onChange={onChange}
					theme="light"
				/>
			</GranularityWrapper>
		)
	}
}

Granularity.defaultProps = {
  timeRange: 'monthToDate'
};
