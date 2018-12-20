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
  padding: 16px 24px 16px 24px;
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

const componentKeyMap = {
  ReportTitle: 'title',
  ReportSummaryTitle: 'title',
  Chart: 'chart',
  Summary: 'summary',
  Granularity: 'granularity',
  Legend: 'legend'
};

const defaultComponents = {
  title: null,
  chart: null,
  summary: null,
  granularity: null,
  legend: null
};

export default function ReportCard({ width, children }) {
  const collectChildren = () => {
    if (!children) return { ...defaultComponents };
    const newComponents = { ...defaultComponents };
    React.Children.forEach(children, child => {
      if (componentKeyMap[child.type.name]) {
        newComponents[componentKeyMap[child.type.name]] = child;
      } else if (child.props.children) {
        React.Children.forEach(child.props.children, subChild => {
          if (componentKeyMap[subChild.type.name]) {
            newComponents[componentKeyMap[subChild.type.name]] = child;
          }
        });
      }
    });
    return newComponents;
  };

  const { title, chart, summary, legend, granularity } = collectChildren();

  return (
    <ReportCardWrapper width={width}>
      <ReportCardMain fullWidth={!summary && !legend}>
        <ReportCardHeader>
          {title} {granularity}
        </ReportCardHeader>
        {chart}
      </ReportCardMain>
      {(summary || legend) && (
        <ReportCardRight>
          <ReportCardSummary>
            <Padding>
              {summary} {legend}
            </Padding>
          </ReportCardSummary>
        </ReportCardRight>
      )}
    </ReportCardWrapper>
  );
}

ReportCard.propTypes = {
  children: PropTypes.array,
  width: PropTypes.string
};
