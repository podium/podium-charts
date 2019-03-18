# Reporting Table

## Components In Headers Example:
```js
const headers = [
  {
    id: 'name',
    content: <StyledHeader>Name & Phone/Email</StyledHeader>,
  },
  {
    id: 'sentBy',
    content: 'Sent By',
  },
  {
    id: 'timeSent',
    content: 'Time Sent',
  },
  {
    id: 'followedLink',
    content: 'Followed Link',
  },
  {
    id: 'review',
    content: 'Review',
  },
  {
    id: 'favoriteGradient',
    content: 'Favorite Gradient',
  }
];
```

## Components in Data Cells Example
```js
const dataForComponents = [
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
```

## Required Data Components Example
```js
const dataComponents = {
  name: <Name />,
  favoriteGradient: <Gradient />,
  followedLink: <FollowedLink />,
  review: <Review />,
  sentBy: <SentBy />
};
```
With example component:

```jsx
const Name = ({ rowData }) => {
  const { name, contact } = rowData.name;
  return (
    <ContactField>
      <UserName>{name}</UserName>
      <UserContact>{contact}</UserContact>
    </ContactField>
  );
};
```
