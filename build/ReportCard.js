"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _podiumUi = require("@podiumhq/podium-ui");

var _ReportTitle = _interopRequireDefault(require("./ReportTitle"));

var _ReportSummaryTitle = _interopRequireDefault(require("./ReportSummaryTitle"));

var _Chart = _interopRequireDefault(require("./Chart"));

var _Summary = _interopRequireDefault(require("./Summary"));

var _Granularity = _interopRequireDefault(require("./Granularity"));

var _Legend = _interopRequireDefault(require("./Legend"));

var _GhostChart = _interopRequireDefault(require("./Ghost/GhostChart"));

var _ReportCardContext = _interopRequireDefault(require("./ReportCardContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  padding: 16px 24px 16px 24px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-left: 1px solid ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  width: 25%;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  width: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px 24px 16px 24px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px solid ", ";\n  border-radius: 6px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ReportCardWrapper = _styledComponents.default.div(_templateObject(), _podiumUi.colors.mystic);

var ReportCardHeader = _styledComponents.default.div(_templateObject2());

var ReportCardMain = _styledComponents.default.div(_templateObject3(), function (_ref) {
  var fullWidth = _ref.fullWidth;
  return fullWidth ? '100%' : '75%';
});

var ReportCardRight = _styledComponents.default.div(_templateObject4());

var ReportCardSummary = _styledComponents.default.div(_templateObject5(), _podiumUi.colors.mystic);

var Padding = _styledComponents.default.div(_templateObject6());

var componentKeyMap = new Map([[_ReportTitle.default, 'title'], [_ReportSummaryTitle.default, 'title'], [_Chart.default, 'chart'], [_Summary.default, 'summary'], [_Granularity.default, 'granularity'], [_Legend.default, 'legend'], [_GhostChart.default, 'ghost']]);
var defaultComponents = {
  title: null,
  chart: null,
  summary: null,
  granularity: null,
  legend: null,
  ghost: null
};

var ReportCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ReportCard, _React$Component);

  function ReportCard(props) {
    var _this;

    _classCallCheck(this, ReportCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReportCard).call(this, props));

    _this.onSelectKey = function (dataKey) {
      _this.setState({
        selectedKey: dataKey
      });
    };

    _this.state = {
      selectedKey: null,
      onSelectKey: _this.onSelectKey
    };
    return _this;
  }

  _createClass(ReportCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          loading = _this$props.loading;

      var collectChildren = function collectChildren() {
        if (!children) return _objectSpread({}, defaultComponents);

        var newComponents = _objectSpread({}, defaultComponents);

        _react.default.Children.forEach(children, function (child) {
          if (componentKeyMap.has(child.type)) {
            newComponents[componentKeyMap.get(child.type)] = _react.default.cloneElement(child, {
              loading: loading
            });
          } else if (child.props.children) {
            _react.default.Children.forEach(child.props.children, function (subChild) {
              if (componentKeyMap.has(subChild.type)) {
                newComponents[componentKeyMap.get(subChild.type)] = _react.default.cloneElement(child, {
                  loading: loading
                });
              }
            });
          }
        });

        return newComponents;
      };

      var _collectChildren = collectChildren(),
          title = _collectChildren.title,
          chart = _collectChildren.chart,
          summary = _collectChildren.summary,
          legend = _collectChildren.legend,
          granularity = _collectChildren.granularity;

      return _react.default.createElement(_ReportCardContext.default.Provider, {
        value: this.state
      }, _react.default.createElement(ReportCardWrapper, null, _react.default.createElement(ReportCardMain, {
        fullWidth: !summary && !legend
      }, _react.default.createElement(ReportCardHeader, null, title, " ", granularity), chart), (summary || legend) && _react.default.createElement(ReportCardRight, null, _react.default.createElement(ReportCardSummary, null, _react.default.createElement(Padding, null, summary, " ", legend)))));
    }
  }]);

  return ReportCard;
}(_react.default.Component);

exports.default = ReportCard;
ReportCard.propTypes = {
  children: _propTypes.default.array,
  loading: _propTypes.default.bool
};