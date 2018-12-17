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

const components = {
  title: null,
  chart: null,
  summary: null,
  granularity: null,
  legend: null
};

const collectChildren = children => {
  if (!children) return components;
  React.Children.forEach(children, child => {
    if (componentKeyMap[child.type.name]) {
      components[componentKeyMap[child.type.name]] = child;
    } else if (child.props.children) {
      React.Children.forEach(child.props.children, subChild => {
        if (componentKeyMap[subChild.type.name]) {
          components[componentKeyMap[subChild.type.name]] = child;
        }
      });
    }
  });
  return components;
};

export default class ReportCard extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.children);
    this.components = collectChildren(props.children);
  }

  componentDidUpdate(prevProps) {
    this.components = collectChildren(this.props.children);
  }

  render() {
    const { width } = this.props;
    const { title, chart, summary, legend, granularity } = this.components;
    return (
      <ReportCardWrapper width={width}>
        <ReportCardMain fullWidth={!summary && !legend}>
          <ReportCardHeader>
            {' '}
            {title} {granularity}{' '}
          </ReportCardHeader>
          {chart}
        </ReportCardMain>
        {(summary || legend) && (
          <ReportCardRight>
            <ReportCardSummary>
              <Padding>
                {' '}
                {summary} {legend}{' '}
              </Padding>
            </ReportCardSummary>
          </ReportCardRight>
        )}
      </ReportCardWrapper>
    );
  }
}

ReportCard.propTypes = {
  children: PropTypes.array,
  width: PropTypes.string
};
