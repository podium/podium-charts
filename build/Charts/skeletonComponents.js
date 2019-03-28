import PropTypes from 'prop-types';
import formatters from './utils/formatters';
export function Bar() {
  return null;
}
Bar.propTypes = {
  dataKey: PropTypes.string.isRequired,
  stackId: PropTypes.string,
  color: PropTypes.string,
  name: PropTypes.string
};
export function Line() {
  return null;
}
Line.propTypes = {
  dataKey: PropTypes.string.isRequired,
  color: PropTypes.string,
  name: PropTypes.string,
  connectNulls: PropTypes.bool
};
export function SummaryLine() {
  return null;
}
SummaryLine.propTypes = {
  dataKey: PropTypes.string.isRequired,
  color: PropTypes.string,
  name: PropTypes.string
};
export function Tooltip() {
  return null;
}
Tooltip.propTypes = {
  content: PropTypes.element.isRequired,
  formatter: PropTypes.func
};
export function XAxis() {
  return null;
}
XAxis.propTypes = {
  dataKey: PropTypes.string.isRequired,
  tickFormatter: PropTypes.func
};
XAxis.defaultProps = {
  tickFormatter: formatters.capitalizeFormatter
};
export function YAxis() {
  return null;
}
YAxis.propTypes = {
  tickFormatter: PropTypes.func
};
YAxis.defaultProps = {
  tickFormatter: function tickFormatter(tick) {
    return tick;
  }
};