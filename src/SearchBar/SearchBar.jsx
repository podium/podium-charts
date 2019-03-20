import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { IconSearch, colors } from '@podiumhq/podium-ui';

const Container = styled.div`
  width: 100%;
  display: flex;
  font-family: Graphik, Helvetica, sans-serif;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 4px 8px;
  font-size: 14px;
  border: solid 1px ${colors.iron};
  border-radius: 4px 0 0 4px;

  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

const IconContainer = styled.div`
  height: 40px;
  border: solid 1px ${colors.iron};
  border-radius: 0 4px 4px 0;
  border-left: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  box-sizing: border-box;
  background: ${colors.whiteSmoke};
`;

const SearchBar = ({ onChange }) => {
  return (
    <Container>
      <Input onChange={onChange} placeholder="Search" />
      <IconContainer>
        <IconSearch height="24px" width="24px" color={colors.jumbo} />
      </IconContainer>
    </Container>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SearchBar;
