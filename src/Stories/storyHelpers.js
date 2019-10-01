import React from 'react';
import formatters from '../Charts/utils/formatters';

export function Palette({ color, name }) {
  const paletteWrapper = {
    width: 150,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    flexDirection: 'column'
  };

  const paletteLabel = {
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white'
  };
  return (
    <div style={{ ...paletteWrapper, backgroundColor: color }}>
      <div style={paletteLabel}>
        <div>{name}</div>
        <div>{color}</div>
      </div>
    </div>
  );
}

export class WindowWidthMonitor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth
    };
  }

  updateWidth = () => {
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  render() {
    const { width } = this.state;
    return <p>Window width: {width}px</p>;
  }
}

export const data = [
  { sms: 200, text: 1, organic: 2, date: '2018-01-01T00:00:00.000Z' },
  { sms: 3000, text: 5, organic: 0, date: '2018-02-01T00:00:00.000Z' },
  { sms: 500, text: 3, date: '2018-03-01T00:00:00.000Z' },
  { sms: 200, text: 0, organic: 3, date: '2018-04-01T00:00:00.000Z' },
  { sms: 300, text: 1, organic: 4, date: '2018-05-01T00:00:00.000Z' },
  { sms: 4000, text: 2.33, organic: 8, date: '2018-06-01T00:00:00.000Z' },
  { sms: 400, text: 2.33, organic: 9, date: '2018-07-01T00:00:00.000Z' },
  { sms: 200, text: 2.33, organic: 15, date: '2018-08-01T00:00:00.000Z' },
  { sms: 100, text: 5, organic: 13, date: '2018-09-01T00:00:00.000Z' },
  { sms: null, text: null, organic: null, date: '2018-10-01T00:00:00.000Z' },
  { sms: 100, text: 2.33, organic: 0, date: '2018-11-01T00:00:00.000Z' },
  { sms: 400, text: 2.33, organic: 0, date: '2018-12-01T00:00:00.000Z' }
];

export const dataLegend = {
  sms: 9100,
  text: 26.5,
  organic: 44
};

export const reviewsData = [
  {
    date: '2018-09-15T23:43:32',
    facebook: {
      reviewRating: 4.5,
      reviewCount: 3
    },
    google: {
      reviewRating: 4.2,
      reviewCount: 7
    },
    yelp: {
      reviewRating: 2.5,
      reviewCount: 2
    }
  },
  {
    date: '2018-10-15T23:43:32',
    facebook: {
      reviewRating: 3.7,
      reviewCount: 6
    },
    yelp: {
      reviewRating: 1.0,
      reviewCount: 1
    }
  },
  {
    date: '2018-11-15T23:43:32',
    google: {
      reviewRating: 4.6,
      reviewCount: 9
    }
  },
  {
    date: '2018-12-15T23:43:32',
    facebook: {
      reviewRating: 4.5,
      reviewCount: 7
    },
    google: {
      reviewRating: 4.2,
      reviewCount: 15
    },
    yelp: {
      reviewRating: 2.5,
      reviewCount: 2
    }
  }
];

export const currData = [
  { value: 605, granularity: '2018-12-01T00:00:00.000Z' },
  { value: 1000, granularity: '2018-12-02T00:00:00.000Z' },
  { value: 1283, granularity: '2018-12-03T00:00:00.000Z' },
  { value: 4838, granularity: '2018-12-04T00:00:00.000Z' },
  { value: 0, granularity: '2018-12-05T00:00:00.000Z' },
  { value: 492, granularity: '2018-12-06T00:00:00.000Z' },
  { value: 0, granularity: '2018-12-07T00:00:00.000Z' },
  { value: 0, granularity: '2018-12-08T00:00:00.000Z' },
  { value: 0, granularity: '2018-12-09T00:00:00.000Z' },
  { value: 0, granularity: '2018-12-10T00:00:00.000Z' }
];

export const prevData = [
  { value: 600, granularity: '2018-11-01T00:00:00.000Z' },
  { value: 223, granularity: '2018-11-02T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-03T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-04T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-05T00:00:00.000Z' },
  { value: 454, granularity: '2018-11-06T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-07T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-08T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-09T00:00:00.000Z' },
  { value: 0, granularity: '2018-11-10T00:00:00.000Z' }
];

export const powerLevels = [
  {
    granularity: '2018-11-01T00:00:00.000Z',
    goku: 5000,
    piccolo: 3500,
    vegeta: 18000,
    turtle: null
  },
  {
    granularity: '2018-11-02T00:00:00.000Z',
    goku: 6000,
    piccolo: 3750,
    vegeta: 19000,
    turtle: null
  },
  {
    granularity: '2018-11-03T00:00:00.000Z',
    goku: 7500,
    piccolo: 3600,
    vegeta: 20000,
    turtle: null
  },
  {
    granularity: '2018-11-04T00:00:00.000Z',
    goku: 24000,
    piccolo: 4000,
    vegeta: 21000,
    turtle: null
  }
];

export const powerLevelsLegend = {
  goku: 10625,
  piccolo: 3712.5,
  vegeta: 19500,
  turtle: null
};

export const weightedAvgData = [
  {
    dogs: { cuteness: 5, amount: 10 },
    cats: { cuteness: 2.5, amount: 15 },
    date: '2018-09-15T23:43:32'
  },
  {
    dogs: { cuteness: 2, amount: 20 },
    cats: { cuteness: 7, amount: 18 },
    date: '2018-10-15T23:43:32'
  },
  {
    dogs: { cuteness: 1, amount: 5 },
    cats: { cuteness: 0.5, amount: 8 },
    date: '2018-11-15T23:43:32'
  }
];

export const weightedAvgDataLegend = {
  dogs: 2.7,
  cats: 4.1
};

export const weightedAvgDataPrev = [
  {
    dogs: { cuteness: 4, amount: 9 },
    cats: { cuteness: 1.5, amount: 14 },
    date: '2018-06-15T23:43:32'
  },
  {
    dogs: { cuteness: 1, amount: 19 },
    cats: { cuteness: 5, amount: 17 },
    date: '2018-07-15T23:43:32'
  },
  {
    dogs: { cuteness: 2, amount: 6 },
    cats: { cuteness: 2.5, amount: 7 },
    date: '2018-08-15T23:43:32'
  }
];

export const timeData = [
  { waitTime: 150, date: '2018-08-15T23:43:32' },
  { waitTime: 1500, date: '2018-09-15T23:43:32' },
  { waitTime: 500, date: '2018-10-15T23:43:32' },
  { waitTime: 980, date: '2018-11-15T23:43:32' }
];

export const customFormatter = (value, dataKey) => {
  if (dataKey === 'text') {
    return (
      <a href="//yelp.com" target="_blank" rel="noopener noreferrer">
        Enable!
      </a>
    );
  }
  return formatters.roundToPlaces(1)(value);
};
