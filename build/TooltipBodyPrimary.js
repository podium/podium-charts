import _taggedTemplateLiteral from "/Users/gkkirsch/development/podium-charts/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral";

function _templateObject7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  font-weight: 600;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin-bottom: 8px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 8px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 12px;\n  border-radius: 2px;\n  background-color: ", ";\n  margin-right: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: ", ";\n  text-align: left;\n  justify-content: center;\n  font-size: 12px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { colors } from 'podium-ui';
var TooltipBodyWrapper = styled.div(_templateObject(), colors.mineShaft);
var ColorLabel = styled.div(_templateObject2(), function (props) {
  return props.fill;
});
var TooltipData = styled.div(_templateObject3());
var Label = styled.div(_templateObject4());
var Header = styled.div(_templateObject5());
var Summary = styled.div(_templateObject6());
var XAxisLabel = styled.div(_templateObject7());

function formatLabel(label) {
  if (moment(label).isValid) return moment(label).format('MMMM YYYY');
  return label;
}

var typeHandler = {
  total: function total(payload) {
    return payload.reduce(function (acc, dataField) {
      return dataField.value + acc;
    }, 0);
  },
  avg: function avg(payload) {
    return (payload.reduce(function (acc, dataField) {
      return dataField.value + acc;
    }, 0) / payload.length).toFixed(1);
  }
};
export default function TooltipBodyPrimary(props) {
  var renderSummary = function renderSummary() {
    var payload = props.payload,
        summaryTitle = props.summaryTitle,
        summaryType = props.summaryType;
    var result = typeHandler[summaryType](payload);
    return "".concat(result, " ").concat(summaryTitle);
  };

  var renderTooltipData = function renderTooltipData() {
    return props.payload.map(function (dataField) {
      var dataKey = dataField.dataKey,
          value = dataField.value,
          color = dataField.color;
      return React.createElement(TooltipData, {
        key: dataField.dataKey
      }, React.createElement(Label, null, React.createElement(ColorLabel, {
        fill: color
      }), React.createElement("div", null, dataKey.charAt(0).toUpperCase() + dataKey.slice(1))), React.createElement("div", null, value));
    });
  };

  return React.createElement(TooltipBodyWrapper, null, React.createElement(Header, null, React.createElement(XAxisLabel, null, formatLabel(props.label)), props.summaryType && React.createElement(Summary, null, renderSummary())), renderTooltipData());
}