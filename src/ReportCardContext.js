import React from 'react';

const ReportCardContext = React.createContext({
  selectedKey: null,
  onSelectKey: () => {}
});

export default ReportCardContext;
