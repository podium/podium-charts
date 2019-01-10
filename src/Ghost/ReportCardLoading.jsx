import React from 'react';
import PropTypes from 'prop-types';
import { Legend, Summary, ReportCard, ReportTitle } from '../';
import GhostChart from './GhostChart';
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
      <GhostChart />
      <Summary loading data={data} dataKeys={['uv']} />
      <Legend loading data={data} config={[]} />
    </ReportCard>
  );
};

ReportCardLoading.propTypes = {
  title: PropTypes.string.isRequired
};

export default ReportCardLoading;
