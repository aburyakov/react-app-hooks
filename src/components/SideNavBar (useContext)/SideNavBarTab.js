import React, { useContext } from 'react';

import SideNavBarContext from './SideNavBarContext';

const SideNavBarTab = ({ name, children }) => {
  const { activeTab } = useContext(SideNavBarContext);

  return activeTab === name ? <>{children}</> : null;
};

export default SideNavBarTab;
