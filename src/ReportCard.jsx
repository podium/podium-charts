import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'podium-ui';

const ReportCardWrapper = styled.div`
  display: flex;
  border: 1px solid ${colors.mystic};
  border-radius: 6px;
  padding: 0 24px 0 24px;
`;

const ReportCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReportCardMain = styled.div`
  display: flex;
  flex-direction: column;
  width: 75%;
`;

const ReportCardRight = styled.div`
  width: 25%;
`;

const ReportCardSummary = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-left: 1px solid ${colors.mystic};
`;

const Padding = styled.div`
  height: 100%;
  padding: 16px 0px 16px 24px;
`;

export default class ReportCard extends React.Component {
  render() {
    const { title, chart, summary, legend } = this.props;
    return (
      <ReportCardWrapper>
        <ReportCardMain>
          <ReportCardHeader>{title}</ReportCardHeader>
          {chart}
        </ReportCardMain>
        {(summary || legend) && (
          <ReportCardRight>
            <ReportCardSummary>
              <Padding>
                {summary}
                {legend}
              </Padding>
            </ReportCardSummary>
          </ReportCardRight>
        )}
      </ReportCardWrapper>
    );
  }
}

ReportCard.propTypes = {
  title: PropTypes.element,
  chart: PropTypes.element,
  summary: PropTypes.element,
  legend: PropTypes.element
};
