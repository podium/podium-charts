function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  color: orange;\n  text-decoration: underline;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 50%;\n  height: 28px;\n  width: 28px;\n  margin-right: 8px;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  background: #ffffff;\n  border-radius: 4px 4px 4px 4px;\n  border: 1px solid #e8e9ec;\n  overflow-y: scroll;\n  padding: 0 26px;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  color: #778692;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: #778692;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-weight: 500;\n  font-size: 14px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: row;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-flow: column;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  width: 100px;\n  height: 25px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Stars, IconCheck, SiteLogo } from '@podiumhq/podium-ui';
import { ReportingTable } from '../Table';
import { DefaultNotes, FixedHeaderNotes, HeaderTooltipNotes, HeaderComponentNotes } from './TableHelpers';
var FavGradient = styled.div(_templateObject(), function (props) {
  return props.gradient;
});
var ContactField = styled.div(_templateObject2());
var ReviewContainer = styled.div(_templateObject3());
var UserName = styled.div(_templateObject4());
var UserContact = styled.div(_templateObject5());
var SentByName = styled.div(_templateObject6());
var SentByContact = styled.div(_templateObject7());
var Container = styled.div(_templateObject8());
var StyledLogo = styled(SiteLogo)(_templateObject9());
var StyledHeader = styled.div(_templateObject10());
var dataForComponents = [{
  name: {
    name: 'Luke Skywalker',
    contact: '1-801-555-1234'
  },
  sentBy: {
    name: 'Obi Wan Kenobi',
    location: 'Tatooine'
  },
  timeSent: 'March 1, 12:00 AM',
  followedLink: true,
  review: {
    site: 'google',
    rating: 5
  },
  favoriteGradient: 'linear-gradient(to right, rgb(5, 117, 230), rgb(0, 242, 96))'
}, {
  name: {
    name: 'Anakin Skywalker',
    contact: '1-801-555-1235'
  },
  sentBy: {
    name: 'Qui-Gon Jinn',
    location: 'Naboo'
  },
  timeSent: 'March 2, 12:00 AM',
  followedLink: false,
  review: {
    site: 'yelp',
    rating: 1
  },
  favoriteGradient: 'linear-gradient(to right, rgb(195, 20, 50), rgb(36, 11, 54))'
}, {
  name: {
    name: 'Ben Solo',
    contact: '1-801-555-1236'
  },
  sentBy: {
    name: 'Luke Skywalker',
    location: 'Tatooine'
  },
  timeSent: 'March 3, 12:00 AM',
  followedLink: true,
  review: {
    site: 'facebook',
    rating: 3.5
  },
  favoriteGradient: 'linear-gradient(to right, #f7ff00, #212121);'
}];
var textOnlyData = [{
  name: 'Frodo Baggins',
  sentBy: 'Gandalf the Grey',
  timeSent: 'March 1, 12:00 AM',
  followedLink: true,
  review: 5
}, {
  name: 'Frodo Baggins',
  sentBy: 'Gandalf the Grey',
  timeSent: 'March 1, 12:00 AM',
  followedLink: true,
  review: 3.5
}, {
  name: 'Samwise Gamgee',
  sentBy: 'Gandalf the White',
  timeSent: 'March 1, 12:00 AM',
  followedLink: true,
  review: 2
}];
var fixedWidthHeaders = [{
  id: 'name',
  content: React.createElement(StyledHeader, null, "Name & Phone/Email"),
  width: '350px'
}, {
  id: 'sentBy',
  content: 'Sent By',
  width: '15%'
}, {
  id: 'timeSent',
  content: 'Time Sent',
  width: '15%'
}, {
  id: 'followedLink',
  content: 'Followed Link',
  width: '15%'
}, {
  id: 'review',
  content: 'Review',
  width: '15%'
}, {
  id: 'favoriteGradient',
  content: 'Favorite Gradient',
  width: '15%'
}];
var headersForComponents = [{
  id: 'name',
  content: React.createElement(StyledHeader, null, "Name & Phone/Email")
}, {
  id: 'sentBy',
  content: 'Sent By'
}, {
  id: 'timeSent',
  content: 'Time Sent'
}, {
  id: 'followedLink',
  content: 'Followed Link'
}, {
  id: 'review',
  content: 'Review'
}, {
  id: 'favoriteGradient',
  content: 'Favorite Gradient'
}];
var textOnlyHeaders = [{
  id: 'name',
  content: 'Name & Phone/Email'
}, {
  id: 'sentBy',
  content: 'Sent By'
}, {
  id: 'timeSent',
  content: 'Time Sent'
}, {
  id: 'followedLink',
  content: 'Followed Link'
}, {
  id: 'review',
  content: 'Review'
}];
var headersWithTooltip = [{
  id: 'name',
  content: 'Name & Phone/Email'
}, {
  id: 'sentBy',
  content: 'Sent By'
}, {
  id: 'timeSent',
  content: 'Time Sent',
  tooltip: 'I am a tooltip!'
}, {
  id: 'followedLink',
  content: 'Followed Link',
  tooltip: 'I am also a tooltip!'
}, {
  id: 'review',
  content: 'Review'
}];

var Name = function Name(_ref) {
  var rowData = _ref.rowData;
  var _rowData$name = rowData.name,
      name = _rowData$name.name,
      contact = _rowData$name.contact;
  return React.createElement(ContactField, null, React.createElement(UserName, null, name), React.createElement(UserContact, null, contact));
};

var SentBy = function SentBy(_ref2) {
  var rowData = _ref2.rowData;
  var _rowData$sentBy = rowData.sentBy,
      name = _rowData$sentBy.name,
      location = _rowData$sentBy.location;
  return React.createElement(ContactField, null, React.createElement(SentByName, null, name), React.createElement(SentByContact, null, location));
};

var FollowedLink = function FollowedLink(_ref3) {
  var rowData = _ref3.rowData;
  return rowData.followedLink ? React.createElement(IconCheck, {
    color: "#3B5CAD"
  }) : '';
};

var Review = function Review(_ref4) {
  var rowData = _ref4.rowData;
  return React.createElement(ReviewContainer, null, React.createElement(StyledLogo, {
    site: rowData.review.site
  }), React.createElement(Stars, {
    rating: rowData.review.rating,
    size: 20
  }));
};

var Gradient = function Gradient(_ref5) {
  var rowData = _ref5.rowData;
  return React.createElement(FavGradient, {
    gradient: rowData.favoriteGradient
  });
};

var dataComponents = {
  name: React.createElement(Name, null),
  favoriteGradient: React.createElement(Gradient, null),
  followedLink: React.createElement(FollowedLink, null),
  review: React.createElement(Review, null),
  sentBy: React.createElement(SentBy, null)
};
storiesOf('Reporting Table', module).add('Default', function () {
  return React.createElement(Container, null, React.createElement(ReportingTable, {
    loading: false,
    data: textOnlyData,
    headers: textOnlyHeaders
  }));
}, {
  notes: DefaultNotes
}).add('Fixed Width Headers', function () {
  return React.createElement(Container, null, React.createElement(ReportingTable, {
    loading: false,
    data: textOnlyData,
    headers: fixedWidthHeaders
  }));
}, {
  notes: FixedHeaderNotes
}).add('Tooltips in Headers', function () {
  return React.createElement(ReportingTable, {
    loading: false,
    data: textOnlyData,
    headers: headersWithTooltip
  });
}, {
  notes: HeaderTooltipNotes
}).add('Components in Cells', function () {
  return React.createElement(Container, null, React.createElement(ReportingTable, {
    loading: false,
    data: dataForComponents,
    headers: headersForComponents,
    dataComponents: dataComponents
  }));
}, {
  notes: HeaderComponentNotes
}).add('Loading', function () {
  return React.createElement("div", null, React.createElement(ReportingTable, {
    loading: true,
    data: textOnlyData,
    headers: textOnlyHeaders,
    dataComponents: dataComponents
  }));
});