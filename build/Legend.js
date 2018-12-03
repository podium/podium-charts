import PropTypes from 'prop-types';
export default function Legend() {
  return null;
}
Legend.propTypes = {
  data: PropTypes.array,
  aggType: PropTypes.oneOf(['avg', 'sum'])
};
Legend.defaultProps = {
  aggType: 'sum'
};