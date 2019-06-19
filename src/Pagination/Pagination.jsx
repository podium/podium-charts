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
  margin: 0 4px;
  min-width: 65px;
`;

const Placeholder = styled.div`
  min-width: 65px;
  margin: 0 4px;
`;
const PageCountWrapper = styled.div`
  min-width: 120px;
  display: flex;
  justify-content: center;
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
      {currentPage > 1 ? (
        <ChangeLink onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </ChangeLink>
      ) : (
        <Placeholder />
      )}
      <PageCountWrapper>
        <Label>Page</Label>
        <Page>{currentPage} /</Page>
        <Page>{totalPages}</Page>
      </PageCountWrapper>
      {currentPage < totalPages ? (
        <ChangeLink onClick={() => onPageChange(currentPage + 1)}>
          Next
        </ChangeLink>
      ) : (
        <Placeholder />
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
