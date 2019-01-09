import React from 'react';
import PropTypes from 'prop-types';
import {
  Legend,
  Chart,
  XAxis,
  YAxis,
  Summary,
  ReportCard,
  ReportTitle
} from './';

const data = [
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 },
  { name: '', uv: 0 }
];
const ReportCardLoading = ({ title }) => {
  return (
    <ReportCard>
      <ReportTitle title={title} data={data} />
      <Chart data={data}>
        <YAxis tickFormatter={() => ''} dataKey="uv" />
        <XAxis dataKey="name" />
      </Chart>
      <Summary loading data={data} dataKeys={['uv']} />
      <Legend loading data={data} config={[]} />
    </ReportCard>
  );
};

ReportCardLoading.propTypes = {
  title: PropTypes.string.isRequired
};

export default ReportCardLoading;
