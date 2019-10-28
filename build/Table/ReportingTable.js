function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 4px;\n  color: ", ";\n  div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  &&& {\n    svg {\n      fill: ", ";\n      position: initial;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  height: 12px;\n  width: ", ";\n  margin: 8px 0;\n  background: ", ";\n  border-radius: 4px;\n  background: linear-gradient(\n    -90deg,\n    rgba(232, 233, 236, 0.3) 0%,\n    ", " 100%\n  );\n\n  animation: ", " 1.5s linear;\n  -webkit-animation: ", " 1.5s linear;\n  -webkit-animation-iteration-count: infinite;\n\n  background-size: 200% auto;\n  background-clip: text;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\tto { background-position: -200% center; }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { ToolTip, IconInfo, colors } from '@podiumhq/podium-ui';
import { Table, TableHeader, TableBody, TableCell, TableRow, TableHeaderCell } from './';
var pulsate = keyframes(_templateObject());
var BodyGhost = styled.div(_templateObject2(), function (_ref) {
  var width = _ref.width;
  return width;
}, colors.mystic, colors.mystic, pulsate, pulsate);
var MoreInfo = styled.span(_templateObject3(), colors.lightSteel, colors.lightSteel);
var HeaderData = styled.div(_templateObject4());

var ReportingTable =
/*#__PURE__*/
function (_Component) {
  _inherits(ReportingTable, _Component);

  function ReportingTable() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, ReportingTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ReportingTable)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.renderTableHeaders = function () {
      var headers = _this.props.headers;
      return React.createElement(TableRow, null, headers && headers.map(function (header, index) {
        return React.createElement(TableHeaderCell, {
          key: header.id,
          width: header.width
        }, React.createElement(HeaderData, null, React.createElement("span", null, header.content), header.tooltip && React.createElement(MoreInfo, null, React.createElement(ToolTip, {
          position: "bottom",
          type: "arrow",
          tip: header.tooltip
        }, React.createElement(IconInfo, {
          size: "small"
        })))));
      }));
    }, _this.renderLoadingBody = function () {
      var headers = _this.props.headers;
      return _toConsumableArray(new Array(6)).map(function (row, rowIndex) {
        var ghostWidth = "".concat(Math.floor(Math.random() * 50) + 20, "%");
        return React.createElement(TableRow, {
          key: "row|".concat(rowIndex)
        }, headers.map(function (header, headerIndex) {
          return React.createElement(TableCell, {
            key: "cell|".concat(rowIndex, "|").concat(headerIndex),
            width: header.width
          }, React.createElement(BodyGhost, {
            width: ghostWidth
          }));
        }));
      });
    }, _this.renderTableBody = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          dataComponents = _this$props.dataComponents,
          headers = _this$props.headers,
          _onRowClick = _this$props.onRowClick,
          onRowHoverColor = _this$props.onRowHoverColor,
          loading = _this$props.loading;
      if (loading) return _this.renderLoadingBody();
      return data && data.map(function (row, rowIndex) {
        return React.createElement(TableRow, {
          key: "row|".concat(rowIndex),
          onRowClick: function onRowClick() {
            return _onRowClick && _onRowClick(row);
          },
          rowClickable: _onRowClick != null,
          hoverColor: onRowHoverColor
        }, headers.map(function (header, headerIndex) {
          var tableCellComponent = dataComponents[header.id];
          var Component = tableCellComponent && React.cloneElement(tableCellComponent, {
            rowData: row
          });
          return React.createElement(TableCell, {
            key: "cell|".concat(rowIndex, "|").concat(headerIndex),
            width: header.width
          }, Component || row[header.id]);
        }));
      });
    }, _temp));
  }

  _createClass(ReportingTable, [{
    key: "render",
    value: function render() {
      return React.createElement(Table, null, React.createElement(TableHeader, null, this.renderTableHeaders()), React.createElement(TableBody, null, this.renderTableBody()));
    }
  }]);

  return ReportingTable;
}(Component);

ReportingTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  headers: PropTypes.arrayOf(PropTypes.object).isRequired,
  dataComponents: PropTypes.object,
  loading: PropTypes.bool
};
ReportingTable.defaultProps = {
  dataComponents: {},
  loading: false,
  data: [],
  headers: []
};
export default ReportingTable;