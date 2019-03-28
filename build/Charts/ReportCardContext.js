import React from 'react';
var ReportCardContext = React.createContext({
  selectedKey: null,
  onSelectKey: function onSelectKey() {}
});
export default ReportCardContext;