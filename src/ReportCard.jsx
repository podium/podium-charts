import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';

import ReportTitle from './ReportTitle';
import ReportSummaryTitle from './ReportSummaryTitle';
import Chart from './Chart';
import Summary from './Summary';
import Granularity from './Granularity';
import Legend from './Legend';
import GhostChart from './Ghost/GhostChart';

const ReportCardWrapper = styled.div`
  display: flex;
  border: 1px solid ${colors.mystic};
  border-radius: 6px;
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

const componentKeyMap = new Map([
  [ReportTitle, 'title'],
  [ReportSummaryTitle, 'title'],
  [Chart, 'chart'],
  [Summary, 'summary'],
  [Granularity, 'granularity'],
  [Legend, 'legend'],
  [GhostChart, 'ghost']
]);

const defaultComponents = {
  title: null,
  chart: null,
  summary: null,
  granularity: null,
  legend: null,
  ghost: null
};

export const ReportCardContext = React.createContext({
  selectedKey: null,
  onSelectKey: () => {}
});

export default class ReportCard extends React.Component {
  constructor(props) {
    super(props);

    this.onSelectKey = dataKey => {
      this.setState({ selectedKey: dataKey });
    };

    this.state = {
      selectedKey: null,
      onSelectKey: this.onSelectKey
    };
  }

  render() {
    const { children, loading } = this.props;

    const collectChildren = () => {
      if (!children) return { ...defaultComponents };
      const newComponents = { ...defaultComponents };
      React.Children.forEach(children, child => {
        if (componentKeyMap.has(child.type)) {
          newComponents[componentKeyMap.get(child.type)] = React.cloneElement(
            child,
            { loading: loading }
          );
        } else if (child.props.children) {
          React.Children.forEach(child.props.children, subChild => {
            if (componentKeyMap.has(subChild.type)) {
              newComponents[
                componentKeyMap.get(subChild.type)
              ] = React.cloneElement(child, { loading: loading });
            }
          });
        }
      });

      return newComponents;
    };

    const { title, chart, summary, legend, granularity } = collectChildren();

    return (
      <ReportCardContext.Provider value={this.state}>
        <ReportCardWrapper>
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
      </ReportCardContext.Provider>
    );
  }
}

ReportCard.propTypes = {
  children: PropTypes.array,
  loading: PropTypes.bool
};
