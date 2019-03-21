"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@storybook/react");

var _Pagination = _interopRequireDefault(require("../Pagination"));

var _PaginationHelpers = require("./PaginationHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var PaginationParent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(PaginationParent, _React$Component);

  function PaginationParent() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, PaginationParent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PaginationParent)).call.apply(_getPrototypeOf2, [this].concat(args))), _this.state = {
      currentPage: 1,
      totalPages: 15
    }, _this.handlePageChange = function (newPage) {
      _this.setState({
        currentPage: newPage
      });
    }, _temp));
  }

  _createClass(PaginationParent, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", null, _react.default.createElement(_Pagination.default, {
        currentPage: this.state.currentPage,
        totalPages: this.state.totalPages,
        onPageChange: this.handlePageChange
      }));
    }
  }]);

  return PaginationParent;
}(_react.default.Component);

(0, _react2.storiesOf)('Pagination', module).add('default', function () {
  return _react.default.createElement(PaginationParent, null);
}, {
  notes: _PaginationHelpers.DefaultNotes
});