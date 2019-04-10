import moment from 'moment';

//  time ranges relative to current day
const today = () => [moment.utc(), moment.utc()];

const thisWeek = () => [
  moment
    .utc()
    .startOf('week')
    .add(1, 'day'),
  moment.utc()
];

const thisMonth = () => [moment.utc().startOf('month'), moment.utc()];

const thisYear = () => [moment.utc().startOf('year'), moment.utc()];

// time ranges relative to day in the past
const yesterday = () => [
  moment.utc().subtract(1, 'day'),
  moment.utc().subtract(1, 'day')
];

const lastWeek = () => [
  moment
    .utc()
    .subtract(1, 'week')
    .startOf('week')
    .add(1, 'day'),
  moment
    .utc()
    .subtract(1, 'week')
    .endOf('week')
    .add(1, 'day')
];

const lastMonth = () => [
  moment
    .utc()
    .subtract(1, 'month')
    .startOf('month'),
  moment
    .utc()
    .subtract(1, 'month')
    .endOf('month')
];

const lastYear = () => [
  moment
    .utc()
    .subtract(1, 'year')
    .startOf('year'),
  moment
    .utc()
    .subtract(1, 'year')
    .endOf('year')
];

const last12Months = () => [
  moment
    .utc()
    .subtract(12, 'month')
    .startOf('month'),
  moment.utc().startOf('month')
];

export default {
  today,
  thisWeek,
  weekToDate: thisWeek,
  thisMonth,
  monthToDate: thisMonth,
  thisYear,
  yearToDate: thisYear,
  yesterday,
  lastWeek,
  lastMonth,
  lastYear,
  last12Months
};
