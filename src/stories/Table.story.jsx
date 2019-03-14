import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Stars, IconCheck, SiteLogo } from '@podiumhq/podium-ui';
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

const ReviewContainer = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
`;

const UserName = styled.div`
  font-weight: 500;
  font-size: 14px;
`;

const UserContact = styled.div`
  color: #778692;
`;
const SentByName = styled.div``;

const SentByContact = styled.div`
  color: #778692;
`;

const Container = styled.div`
  background: #ffffff;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #e8e9ec;
  overflow-y: scroll;
  padding: 0 26px;
`;

const StyledLogo = styled(SiteLogo)`
  border-radius: 50%;
  height: 28px;
  width: 28px;
  margin-right: 8px;
`;
const data = [
  {
    name: { name: 'Luke Skywalker', contact: '1-801-555-1234' },
    sentBy: { name: 'Obi Wan Kenobi', location: 'Tatooine' },
    timeSent: 'March 1, 12:00 AM',
    followedLink: true,
    review: { site: 'google', rating: 5 },
    favoriteGradient:
      'linear-gradient(to right, rgb(5, 117, 230), rgb(0, 242, 96))'
  },
  {
    name: { name: 'Anakin Skywalker', contact: '1-801-555-1235' },
    sentBy: { name: 'Qui-Gon Jinn', location: 'Naboo' },
    timeSent: 'March 2, 12:00 AM',
    followedLink: false,
    review: { site: 'yelp', rating: 1 },
    favoriteGradient:
      'linear-gradient(to right, rgb(195, 20, 50), rgb(36, 11, 54))'
  },
  {
    name: { name: 'Ben Solo', contact: '1-801-555-1236' },
    sentBy: { name: 'Luke Skywalker', location: 'Tatooine' },
    timeSent: 'March 3, 12:00 AM',
    followedLink: true,
    review: { site: 'facebook', rating: 3.5 },
    favoriteGradient: 'linear-gradient(to right, #f7ff00, #212121);'
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
const SentBy = ({ rowData }) => {
  const { name, location } = rowData.sentBy;
  return (
    <ContactField>
      <SentByName>{name}</SentByName>
      <SentByContact>{location}</SentByContact>
    </ContactField>
  );
};

const FollowedLink = ({ rowData }) =>
  rowData.followedLink ? <IconCheck color="#3B5CAD" /> : '';

const Review = ({ rowData }) => {
  return (
    <ReviewContainer>
      <StyledLogo site={rowData.review.site} />
      <Stars rating={rowData.review.rating} size={20} />
    </ReviewContainer>
  );
};

const Gradient = ({ rowData }) => (
  <FavGradient gradient={rowData.favoriteGradient} />
);

const dataComponents = {
  name: <Name />,
  favoriteGradient: <Gradient />,
  followedLink: <FollowedLink />,
  review: <Review />,
  sentBy: <SentBy />
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
    <ReportingTable
      loading
      data={data}
      headers={headers}
      dataComponents={dataComponents}
    />
  ));
