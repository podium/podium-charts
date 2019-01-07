import React from 'react';
import { Chart, YAxis, ReportCard, ReportSummaryTitle } from './';

const data = [
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 }
];
const SummaryLoading = ({ title }) => {
  return (
    <ReportCard width="270px">
      <ReportSummaryTitle summaryType="total" title={title} loading />
      <Chart data={data} height={100}>
        <YAxis tickFormatter={() => ''} dataKey="uv" />
      </Chart>
    </ReportCard>
  );
};

export default SummaryLoading;
