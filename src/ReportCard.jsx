import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from 'podium-ui';

const ReportCardWrapper = styled.div`
  display: flex;
  border: 1px solid ${colors.mystic};
  border-radius: 6px;
  ${({ width }) => width && `width: ${width};`};
`;

const ReportCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReportCardMain = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : '75%')};
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
  padding: 16px 24px 16px 24px;
`;

export default class ReportCard extends React.Component {
  render() {
    const { title, chart, summary, legend, width } = this.props;
    return (
      <ReportCardWrapper width={width}>
        <ReportCardMain fullWidth={!summary && !legend}>
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
  legend: PropTypes.element,
  width: PropTypes.string
};
