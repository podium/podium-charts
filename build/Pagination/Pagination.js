function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 2px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 2px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  min-width: 120px;\n  display: flex;\n  justify-content: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  min-width: 65px;\n  margin: 0 4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: ", ";\n  cursor: pointer;\n  margin: 0 4px;\n  min-width: 65px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import PropTypes from 'prop-types';
var Container = styled.div(_templateObject());
var ChangeLink = styled.div(_templateObject2(), colors.cobaltBlue);
var Placeholder = styled.div(_templateObject3());
var PageCountWrapper = styled.div(_templateObject4());
var Label = styled.div(_templateObject5());
var Page = styled.div(_templateObject6());

var Pagination = function Pagination(_ref) {
  var currentPage = _ref.currentPage,
      totalPages = _ref.totalPages,
      onPageChange = _ref.onPageChange;
  return React.createElement(Container, null, currentPage > 1 ? React.createElement(ChangeLink, {
    onClick: function onClick() {
      return onPageChange(currentPage - 1);
    }
  }, "Previous") : React.createElement(Placeholder, null), React.createElement(PageCountWrapper, null, React.createElement(Label, null, "Page"), React.createElement(Page, null, currentPage, " /"), React.createElement(Page, null, totalPages)), currentPage < totalPages ? React.createElement(ChangeLink, {
    onClick: function onClick() {
      return onPageChange(currentPage + 1);
    }
  }, "Next") : React.createElement(Placeholder, null));
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