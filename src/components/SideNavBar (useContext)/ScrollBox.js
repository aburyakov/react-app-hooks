import React, { useContext } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';
import { Box } from '@hockeystickco/ui';

import SideNavBarContext from './SideNavBarContext';

const ScrollBlock = styled(Box)`
  scroll-margin: 5rem;
`;

const ScrollBox = ({ id, children }) => {
  const { onVisibleChange } = useContext(SideNavBarContext);

  return (
    <VisibilitySensor onChange={onVisibleChange(id)} partialVisibility={true} offset={{ top: 400 }}>
      <ScrollBlock id={id}>{children}</ScrollBlock>
    </VisibilitySensor>
  );
};

export default ScrollBox;
