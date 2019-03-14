import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { IconCheck } from '@podiumhq/podium-ui';
import { ReportingTable } from '../Table';

const FavGradient = styled.div`
  background: ${props => props.gradient};
  width: 100px;
  height: 25px;
`;

const ContactField = styled.div`
  display: flex;
  flex-flow: column;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const UserContact = styled.div`
  color: '#778692';
  font-size: 12px;
`;

const Container = styled.div`
  border-radius: 4px 4px 4px 4px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  margin-bottom: 24px;
  background-color: white;
  width: 80%;
  margin: 0 auto;

  overflow-y: scroll;
  padding: 0 26px;
`;

const data = [
  {
    name: { name: 'Luke Skywalker', contact: '1-801-555-1234' },
    sentBy: 'Obi Wan Kenobi',
    timeSent: 'March 1, 12:00 AM',
    followedLink: true,
    review: { site: 'google', rating: 5 },
    favoriteGradient:
      'linear-gradient(to right, rgb(0, 242, 96), rgb(5, 117, 230))'
  },
  {
    name: { name: 'Anakin Skywalker', contact: '1-801-555-1235' },
    sentBy: 'Qui-Gon Jinn',
    timeSent: 'March 2, 12:00 AM',
    followedLink: false,
    review: { site: 'google', rating: 1 },
    favoriteGradient:
      'linear-gradient(to right, rgb(195, 20, 50), rgb(36, 11, 54))'
  }
];

const headers = [
  {
    id: 'name',
    content: 'Name & Phone/Email',
    width: '350px'
  },
  {
    id: 'sentBy',
    content: 'Sent By',
    width: '15%'
  },
  {
    id: 'timeSent',
    content: 'Time Sent',
    width: '15%'
  },
  {
    id: 'followedLink',
    content: 'Followed Link',
    width: '15%'
  },
  {
    id: 'review',
    content: 'Review',
    width: '15%'
  },
  {
    id: 'favoriteGradient',
    content: 'Favorite Gradient',
    width: '15%'
  }
];

const Name = ({ rowData }) => {
  const { name, contact } = rowData.name;
  return (
    <ContactField>
      <UserName>{name}</UserName>
      <UserContact>{contact}</UserContact>
    </ContactField>
  );
};

const FollowedLink = ({ rowData }) =>
  rowData.followedLink ? <IconCheck color="#3B5CAD" /> : '';

const Review = ({ rowData }) => {
  return <div>review</div>;
};

const Gradient = ({ rowData }) => (
  <FavGradient gradient={rowData.favoriteGradient} />
);

const dataComponents = {
  name: <Name />,
  favoriteGradient: <Gradient />,
  followedLink: <FollowedLink />,
  review: <Review />
};

storiesOf('Reporting Table', module)
  .add('Default', () => (
    <Container>
      <ReportingTable
        loading={false}
        data={data}
        headers={headers}
        dataComponents={dataComponents}
      />
    </Container>
  ))
  .add('Loading', () => (
    <Container>
      <ReportingTable
        loading
        data={data}
        headers={headers}
        dataComponents={dataComponents}
      />
    </Container>
  ));
