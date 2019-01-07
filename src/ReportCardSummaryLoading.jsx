import React from 'react';
import PropTypes from 'prop-types';
import { Chart, YAxis, ReportCard, ReportSummaryTitle } from './';

const data = [
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 }
];

const ReportCardSummaryLoading = ({ title }) => {
  return (
    <ReportCard width="270px">
      <ReportSummaryTitle title={title} loading />
      <Chart data={data} height={100}>
        <YAxis width={1} tickCount={3} tickFormatter={() => ''} dataKey="uv" />
      </Chart>
    </ReportCard>
  );
};

ReportCardSummaryLoading.propTypes = {
  title: PropTypes.string.isRequired
};

export default ReportCardSummaryLoading;
