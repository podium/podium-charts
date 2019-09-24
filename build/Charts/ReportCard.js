function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  max-width: 320px;\n  min-width: 178px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  min-width: 75%;\n  flex: 3;\n  width: ", ";\n"]);

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
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  border: 1px solid ", ";\n  border-radius: 6px;\n  min-width: 178px;\n  background: white;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '@podiumhq/podium-ui';
import ReportTitle from './ReportTitle';
import ReportSummaryTitle from './ReportSummaryTitle';
import Chart from './Chart';
import Summary from './Summary';
import Granularity from './Granularity';
import Legend from './Legend';
import GhostChart from './Ghost/GhostChart';
import ReportCardContext from './ReportCardContext';
var ReportCardWrapper = styled.div(_templateObject(), colors.mystic);
var ReportCardHeader = styled.div(_templateObject2());
var ReportCardMain = styled.div(_templateObject3(), function (_ref) {
  var fullWidth = _ref.fullWidth;
  return fullWidth ? '100%' : '75%';
});
var ReportCardRight = styled.div(_templateObject4());
var ReportCardSummary = styled.div(_templateObject5(), colors.mystic);
var Padding = styled.div(_templateObject6());
var componentKeyMap = new Map([[ReportTitle, 'title'], [ReportSummaryTitle, 'title'], [Chart, 'chart'], [Summary, 'summary'], [Granularity, 'granularity'], [Legend, 'legend'], [GhostChart, 'ghost']]);
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

        React.Children.forEach(children, function (child) {
          if (componentKeyMap.has(child.type)) {
            newComponents[componentKeyMap.get(child.type)] = React.cloneElement(child, {
              loading: loading
            });
          } else if (child.props.children) {
            var subChildren = [];
            var type;
            React.Children.forEach(child.props.children, function (subChild) {
              if (componentKeyMap.has(subChild.type)) {
                subChildren.push(React.cloneElement(subChild, {
                  loading: loading
                }));
                type = componentKeyMap.get(subChild.type);
              }
            });

            if (type) {
              newComponents[type] = React.cloneElement.apply(React, [child, {}].concat(subChildren));
            }
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

      return React.createElement(ReportCardContext.Provider, {
        value: this.state
      }, React.createElement(ReportCardWrapper, null, React.createElement(ReportCardMain, {
        fullWidth: !summary && !legend
      }, React.createElement(ReportCardHeader, null, title, " ", granularity), chart), (summary || legend) && React.createElement(ReportCardRight, null, React.createElement(ReportCardSummary, null, React.createElement(Padding, null, summary, " ", legend)))));
    }
  }]);

  return ReportCard;
}(React.Component);

export { ReportCard as default };
ReportCard.propTypes = {
  children: PropTypes.array,
  loading: PropTypes.bool
};