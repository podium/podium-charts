import moment from 'moment'; //  time ranges relative to current day

var today = function today() {
  return [moment.utc(), moment.utc()];
};

var thisWeek = function thisWeek() {
  return [moment.utc().startOf('week').add(1, 'day'), moment.utc()];
};

var thisMonth = function thisMonth() {
  return [moment.utc().startOf('month'), moment.utc()];
};

var thisYear = function thisYear() {
  return [moment.utc().startOf('year'), moment.utc()];
}; // time ranges relative to day in the past


var yesterday = function yesterday() {
  return [moment.utc().subtract(1, 'day'), moment.utc().subtract(1, 'day')];
};

var lastWeek = function lastWeek() {
  return [moment.utc().subtract(1, 'week').startOf('week').add(1, 'day'), moment.utc().subtract(1, 'week').endOf('week').add(1, 'day')];
};

var lastMonth = function lastMonth() {
  return [moment.utc().subtract(1, 'month').startOf('month'), moment.utc().subtract(1, 'month').endOf('month')];
};

var lastYear = function lastYear() {
  return [moment.utc().subtract(1, 'year').startOf('year'), moment.utc().subtract(1, 'year').endOf('year')];
};

var last12Months = function last12Months() {
  return [moment.utc().subtract(12, 'month').startOf('month'), moment.utc().startOf('month')];
};

export default {
  today: today,
  thisWeek: thisWeek,
  weekToDate: thisWeek,
  thisMonth: thisMonth,
  monthToDate: thisMonth,
  thisYear: thisYear,
  yearToDate: thisYear,
  yesterday: yesterday,
  lastWeek: lastWeek,
  lastMonth: lastMonth,
  lastYear: lastYear,
  last12Months: last12Months
};