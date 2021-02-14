import React, { useRef, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Box } from '@hockeystickco/ui';
import { debounce, once } from 'lodash/fp';
import smoothscroll from 'smoothscroll-polyfill';

import Desktop from './Desktop';
import Mobile from './Mobile';
import ScrollBox from './ScrollBox';
import SideNavBarTab from './SideNavBarTab';
import SideNavBarContext, { SideNavBarProvider } from './SideNavBarContext';

const smoothscrollInitialize = once(smoothscroll.polyfill);

const Container = styled(Box)`
  position: sticky;
  width: 100%;
  top: 1.8rem;
  z-index: 100;
  ${styled.alignSelf}
`;

const debounced = debounce(1500, setLock => {
  setLock(false);
});

const SideNavBar = ({ items, withTabs, restProps }) => {
  const { setActiveItem, setLock } = useContext(SideNavBarContext);
  const stickyContainerRef = useRef(null);

  const scrollTo = element => {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  };

  const onChange = id => {
    const element = document.getElementById(id);
    if (element) {
      setLock(true);
      debounced.cancel();
      scrollTo(element);
      setActiveItem(id);
      debounced(setLock);
    }
  };

  const navProps = {
    items,
    onChange,
    withTabs,
  };

  useEffect(() => {
    smoothscrollInitialize();
  }, []);

  return (
    <Container innerRef={stickyContainerRef} {...restProps}>
      <Desktop {...navProps} />
      <Mobile {...navProps} />
    </Container>
  );
};

export default SideNavBar;
export { SideNavBarContext, SideNavBarProvider, ScrollBox, SideNavBarTab };
