import React from 'react';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  flex-flow: row;
`;

const ChangeLink = styled.div`
  color: ${colors.cobaltBlue};
  cursor: pointer;
  margin: 0 2px;
`;

const Label = styled.div`
  margin: 0 2px;
`;

const Page = styled.div`
  margin: 0 2px;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <Container>
      {currentPage > 1 && (
        <ChangeLink onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </ChangeLink>
      )}
      <Label>Page</Label>
      <Page>{currentPage} /</Page>
      <Page>{totalPages}</Page>
      {currentPage < totalPages && (
        <ChangeLink onClick={() => onPageChange(currentPage + 1)}>
          Next
        </ChangeLink>
      )}
    </Container>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

Pagination.defaultProps = {
  currentPage: 1
};

export default Pagination;
