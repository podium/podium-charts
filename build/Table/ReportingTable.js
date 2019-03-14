"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _podiumUi = require("@podiumhq/podium-ui");

var _ = require("./");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  left: 10px;\n  top: 35%;\n  color: ", ";\n  &&& {\n    svg {\n      fill: ", ";\n      position: initial;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var MoreInfo = _styledComponents.default.div(_templateObject(), _podiumUi.colors.lightSteel, _podiumUi.colors.lightSteel);

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
      return _react.default.createElement(_.TableRow, null, headers && headers.map(function (header, index) {
        return _react.default.createElement(_.TableHeaderCell, {
          key: header.id,
          width: header.width
        }, header.tooltip && _react.default.createElement(MoreInfo, null, _react.default.createElement(_podiumUi.ToolTip, {
          position: "top",
          type: "arrow",
          tip: header.tooltip
        }, _react.default.createElement(_podiumUi.IconInfo, {
          size: "small"
        }))), _react.default.createElement("div", null, header.content));
      }));
    }, _this.renderTableBody = function () {
      var _this$props = _this.props,
          data = _this$props.data,
          dataComponents = _this$props.dataComponents,
          headers = _this$props.headers;
      return data && data.map(function (row, rowIndex) {
        return _react.default.createElement(_.TableRow, {
          key: "row|".concat(rowIndex)
        }, headers.map(function (header, headerIndex) {
          var tableCellComponent = dataComponents[header.id];

          var Component = tableCellComponent && _react.default.cloneElement(tableCellComponent, {
            rowData: row
          });

          return _react.default.createElement(_.TableCell, {
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
      var loading = this.props.loading;
      return loading ? _react.default.createElement(_podiumUi.TableLoading, null) : _react.default.createElement(_.Table, null, _react.default.createElement(_.TableHeader, null, this.renderTableHeaders()), _react.default.createElement(_.TableBody, null, this.renderTableBody()));
    }
  }]);

  return ReportingTable;
}(_react.Component);

ReportingTable.propTypes = {
  data: _propTypes.default.array.isRequired,
  headers: _propTypes.default.array.isRequired,
  dataComponents: _propTypes.default.object,
  loading: _propTypes.default.bool
};
ReportingTable.defaultProps = {
  dataComponents: {}
};
var _default = ReportingTable;
exports.default = _default;