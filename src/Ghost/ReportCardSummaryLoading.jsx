import React from 'react';
import PropTypes from 'prop-types';
import { ReportCard, ReportSummaryTitle } from '../';

import GhostChart from './GhostChart';
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
      <GhostChart summary />
    </ReportCard>
  );
};

ReportCardSummaryLoading.propTypes = {
  title: PropTypes.string.isRequired
};

export default ReportCardSummaryLoading;
