import React from 'react';
import { storiesOf } from '@storybook/react';
import { ReportingTable } from '../';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import _ from 'lodash';
const rankForward = (list, col) => {
  let rank = 1;
  for (let i = 0; i < list.length; i++) {
    let nextRow = list[i + 1],
      currentRow = list[i];
    if (currentRow[col] === undefined || currentRow[col] === null) {
      list[i].rank = '';
    } else {
      list[i].rank = rank;
      if (nextRow && currentRow[col] !== nextRow[col]) rank++;
    }
  }
  return list;
};

const rankReverse = (list, col) => {
  let rank = 1;
  for (let i = list.length - 1; i >= 0; i--) {
    let prevRow = list[i - 1],
      currentRow = list[i];
    if (currentRow[col] === undefined || currentRow[col] === null) {
      list[i].rank = '';
    } else {
      list[i].rank = rank;
      if (prevRow && currentRow[col] !== prevRow[col]) rank++;
    }
  }
  return list;
};
const evaluateRank = (list, col, direction = 'forward') => {
  list = [...list];
  if (direction === 'reverse') return rankReverse(list, col);
  return rankForward(list, col);
};
const onSortPrefersLow = (key, sortDirection) => {
  const { activeTab } = this.state;
  const sort = sortDirection === 'asc' ? 'desc' : 'asc';
  let sortedLeaderboard = _.orderBy(
    this.state[activeTab],
    [columns => !!columns[key], columns => columns[key]],
    ['desc', sort]
  );
  sortedLeaderboard = evaluateRank(
    sortedLeaderboard,
    key,
    sortDirection === 'asc' ? 'reverse' : 'forward'
  );
  this.setState({
    [activeTab]: sortedLeaderboard,
    activeHeader: key
  });
};

const onSortPrefersHigh = (key, sortDirection) => {
  const { activeTab } = this.state;
  let sortedLeaderboard = _.orderBy(this.state[activeTab], key, sortDirection);
  sortedLeaderboard = evaluateRank(
    sortedLeaderboard,
    key,
    sortDirection === 'asc' ? 'reverse' : 'forward'
  );
  this.setState({
    [activeTab]: sortedLeaderboard,
    activeHeader: key
  });
};

const containerStyles = {
  width: '100%',
  height: '700px',
  display: 'flex'
};

export const LeaderboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  padding-right: 24px;
  padding-left: 24px;
  max-width: 1440px;
  width: 100%;
`;

export const LeaderboardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

export const PageName = styled.div`
  display: flex;
  color: ${colors.mineShaft};
  font-size: 18px;
  font-weight: 600;
  margin-right: 24px;
`;

export const Card = styled.div`
  border-radius: 4px 4px 4px 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: 24px;
  background-color: white;
`;

export const EmployeeName = styled.div`
  margin-left: 35px;
`;

export const Rank = styled.div`
  min-width: 2.5em;
`;

export const EmployeeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const FirstResponseTimeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Subheader = styled.div`
  color: ${colors.steel};
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column;
`;

export const TabsContainer = styled.div`
  display: inline-flex;
`;

export const HeaderGroupLeft = styled.div``;

export const HeaderGroupRight = styled.div``;

const FirstResponseTime = () => (
  <HeaderContainer>
    <div>First Response Time</div>
  </HeaderContainer>
);

const headers = [
  {
    id: 'name',
    content: <EmployeeName>Name</EmployeeName>,
    width: '350px'
  },
  {
    id: 'totalConversations',
    onSort: onSortPrefersHigh,
    content: 'Total Conversations',
    tooltip: (
      <div style={{ width: 180, textAlign: 'left' }}>
        Number of conversations where employee has sent a message.
      </div>
    )
  },
  {
    id: 'firstResponseTime',
    onSort: onSortPrefersLow,
    content: <FirstResponseTime />,
    tooltip: (
      <div style={{ width: 230, textAlign: 'left' }}>
        Median time it takes to respond to a new inbound conversation.
      </div>
    )
  },
  {
    id: 'invitesSent',
    onSort: onSortPrefersHigh,
    content: 'Invites Sent'
  },
  {
    id: 'reviews',
    onSort: onSortPrefersHigh,
    content: 'Credited Reviews',
    tooltip: (
      <div style={{ width: 216 }}>
        <div style={{ padding: '8px 0px' }}>x</div>
        Auto or manually tagged reviews.
      </div>
    )
  }
];

const data = [
  {
    name: 'Test 1',
    totalConversations: 0,
    firstResponseTime: 0,
    invitesSent: 0,
    reviews: 2.0
  },
  {
    name: 'Test 2',
    totalConversations: 1,
    firstResponseTime: 4,
    invitesSent: 7,
    reviews: 3.0
  },
  {
    name: 'Test 3',
    totalConversations: 2,
    firstResponseTime: 5,
    invitesSent: 8,
    reviews: 4.0
  },
  {
    name: 'Test 4',
    totalConversations: 3,
    firstResponseTime: 6,
    invitesSent: 9,
    reviews: 5.0
  }
];

storiesOf('Table', module).add('Invites Table', () => (
  <div style={containerStyles}>
    <ReportingTable data={data} headers={headers} />
  </div>
));
