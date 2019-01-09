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

const ReportCardSummaryLoading = ({ title, width }) => {
  return (
    <ReportCard width={width}>
      <ReportSummaryTitle title={title} loading data={data} dataKeys={['uv']} />
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
