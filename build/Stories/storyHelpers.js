function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import formatters from '../Charts/utils/formatters';
export function Palette(_ref) {
  var color = _ref.color,
      name = _ref.name;
  var paletteWrapper = {
    width: 150,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    flexDirection: 'column'
  };
  var paletteLabel = {
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white'
  };
  return React.createElement("div", {
    style: _objectSpread({}, paletteWrapper, {
      backgroundColor: color
    })
  }, React.createElement("div", {
    style: paletteLabel
  }, React.createElement("div", null, name), React.createElement("div", null, color)));
}
export var WindowWidthMonitor =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WindowWidthMonitor, _React$Component);

  function WindowWidthMonitor(props) {
    var _this;

    _classCallCheck(this, WindowWidthMonitor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WindowWidthMonitor).call(this, props));

    _this.updateWidth = function () {
      _this.setState({
        width: window.innerWidth
      });
    };

    _this.state = {
      width: window.innerWidth
    };
    return _this;
  }

  _createClass(WindowWidthMonitor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateWidth);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateWidth);
    }
  }, {
    key: "render",
    value: function render() {
      var width = this.state.width;
      return React.createElement("p", null, "Window width: ", width, "px");
    }
  }]);

  return WindowWidthMonitor;
}(React.Component);
export var data = [{
  sms: 200,
  text: 1,
  organic: 2,
  date: '2018-01-01T00:00:00.000Z'
}, {
  sms: 3000,
  text: 5,
  organic: 0,
  date: '2018-02-01T00:00:00.000Z'
}, {
  sms: 500,
  text: 3,
  date: '2018-03-01T00:00:00.000Z'
}, {
  sms: 200,
  text: 0,
  organic: 3,
  date: '2018-04-01T00:00:00.000Z'
}, {
  sms: 300,
  text: 1,
  organic: 4,
  date: '2018-05-01T00:00:00.000Z'
}, {
  sms: 4000,
  text: 2.33,
  organic: 8,
  date: '2018-06-01T00:00:00.000Z'
}, {
  sms: 400,
  text: 2.33,
  organic: 9,
  date: '2018-07-01T00:00:00.000Z'
}, {
  sms: 200,
  text: 2.33,
  organic: 15,
  date: '2018-08-01T00:00:00.000Z'
}, {
  sms: 100,
  text: 5,
  organic: 13,
  date: '2018-09-01T00:00:00.000Z'
}, {
  sms: null,
  text: null,
  organic: null,
  date: '2018-10-01T00:00:00.000Z'
}, {
  sms: 100,
  text: 2.33,
  organic: 0,
  date: '2018-11-01T00:00:00.000Z'
}, {
  sms: 400,
  text: 2.33,
  organic: 0,
  date: '2018-12-01T00:00:00.000Z'
}];
export var dataLegend = {
  sms: 9100,
  text: 26.5,
  organic: 44
};
export var reviewsData = [{
  date: '2018-09-15T23:43:32',
  facebook: {
    reviewRating: 4.5,
    reviewCount: 3
  },
  google: {
    reviewRating: 4.2,
    reviewCount: 7
  },
  yelp: {
    reviewRating: 2.5,
    reviewCount: 2
  }
}, {
  date: '2018-10-15T23:43:32',
  facebook: {
    reviewRating: 3.7,
    reviewCount: 6
  },
  yelp: {
    reviewRating: 1.0,
    reviewCount: 1
  }
}, {
  date: '2018-11-15T23:43:32',
  google: {
    reviewRating: 4.6,
    reviewCount: 9
  }
}, {
  date: '2018-12-15T23:43:32',
  facebook: {
    reviewRating: 4.5,
    reviewCount: 7
  },
  google: {
    reviewRating: 4.2,
    reviewCount: 15
  },
  yelp: {
    reviewRating: 2.5,
    reviewCount: 2
  }
}];
export var currData = [{
  value: 605,
  granularity: '2018-12-01T00:00:00.000Z'
}, {
  value: 1000,
  granularity: '2018-12-02T00:00:00.000Z'
}, {
  value: 1283,
  granularity: '2018-12-03T00:00:00.000Z'
}, {
  value: 4838,
  granularity: '2018-12-04T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-12-05T00:00:00.000Z'
}, {
  value: 492,
  granularity: '2018-12-06T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-12-07T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-12-08T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-12-09T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-12-10T00:00:00.000Z'
}];
export var prevData = [{
  value: 600,
  granularity: '2018-11-01T00:00:00.000Z'
}, {
  value: 223,
  granularity: '2018-11-02T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-03T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-04T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-05T00:00:00.000Z'
}, {
  value: 454,
  granularity: '2018-11-06T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-07T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-08T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-09T00:00:00.000Z'
}, {
  value: 0,
  granularity: '2018-11-10T00:00:00.000Z'
}];
export var powerLevels = [{
  granularity: '2018-11-01T00:00:00.000Z',
  goku: 5000,
  piccolo: 3500,
  vegeta: 18000,
  turtle: null
}, {
  granularity: '2018-11-02T00:00:00.000Z',
  goku: 6000,
  piccolo: 3750,
  vegeta: 19000,
  turtle: null
}, {
  granularity: '2018-11-03T00:00:00.000Z',
  goku: 7500,
  piccolo: 3600,
  vegeta: 20000,
  turtle: null
}, {
  granularity: '2018-11-04T00:00:00.000Z',
  goku: 24000,
  piccolo: 4000,
  vegeta: 21000,
  turtle: null
}];
export var powerLevelsLegend = {
  goku: 10625,
  piccolo: 3712.5,
  vegeta: 19500,
  turtle: null
};
export var weightedAvgData = [{
  dogs: {
    cuteness: 5,
    amount: 10
  },
  cats: {
    cuteness: 2.5,
    amount: 15
  },
  date: '2018-09-15T23:43:32'
}, {
  dogs: {
    cuteness: 2,
    amount: 20
  },
  cats: {
    cuteness: 7,
    amount: 18
  },
  date: '2018-10-15T23:43:32'
}, {
  dogs: {
    cuteness: 1,
    amount: 5
  },
  cats: {
    cuteness: 0.5,
    amount: 8
  },
  date: '2018-11-15T23:43:32'
}];
export var weightedAvgDataLegend = {
  dogs: 2.7,
  cats: 4.1
};
export var weightedAvgDataPrev = [{
  dogs: {
    cuteness: 4,
    amount: 9
  },
  cats: {
    cuteness: 1.5,
    amount: 14
  },
  date: '2018-06-15T23:43:32'
}, {
  dogs: {
    cuteness: 1,
    amount: 19
  },
  cats: {
    cuteness: 5,
    amount: 17
  },
  date: '2018-07-15T23:43:32'
}, {
  dogs: {
    cuteness: 2,
    amount: 6
  },
  cats: {
    cuteness: 2.5,
    amount: 7
  },
  date: '2018-08-15T23:43:32'
}];
export var timeData = [{
  waitTime: 150,
  date: '2018-08-15T23:43:32'
}, {
  waitTime: 1500,
  date: '2018-09-15T23:43:32'
}, {
  waitTime: 500,
  date: '2018-10-15T23:43:32'
}, {
  waitTime: 980,
  date: '2018-11-15T23:43:32'
}];
export var customFormatter = function customFormatter(value, dataKey) {
  if (dataKey === 'text') {
    return React.createElement("a", {
      href: "//yelp.com",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Enable!");
  }

  return formatters.roundToPlaces(1)(value);
};