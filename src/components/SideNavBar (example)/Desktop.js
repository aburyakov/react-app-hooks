import React, { useContext } from 'react';
import { map } from 'lodash/fp';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import SideNavBarContext from './SideNavBarContext';

const ListItems = styled.ul`
  list-style: none;
  padding-left: 0;
  margin: 0;

  @media screen and (max-width: 899px) {
    display: none;
  }
`;

const ChildsListItems = styled.ul`
  list-style: none;
  padding-left: ${themeGet('space.4')};
`;

const Item = styled.li`
  cursor: pointer;
  color: ${props => (props.isActive ? themeGet('colors.body.0') : themeGet('colors.gray.0'))};
  font-weight: ${themeGet('fontWeights.bold')};
  font-size: ${themeGet('fontSizes.h6')};
  background-color: ${props => (props.isActive ? themeGet('colors.secondary.3.1') : 'inherit')};
  padding: ${themeGet('space.3')} ${themeGet('space.3')} ${themeGet('space.3')}
    ${themeGet('space.4')};
  margin-bottom: 0.3rem;
  border-radius: 3px;
  vertical-align: middle;
  transition: 0.3s;

  &:hover {
    background-color: ${themeGet('colors.secondary.3.1')};
    color: ${themeGet('colors.body.0')};
  }
`;

const ChildItem = styled.li`
  cursor: pointer;
  color: ${props => (props.isActive ? themeGet('colors.gray.0') : themeGet('colors.gray.6'))};
  font-weight: ${themeGet('fontWeights.bold')};
  margin: ${themeGet('space.3')} 0 ${themeGet('space.4')} 0;
  padding: 0 ${themeGet('space.3')} 0 ${themeGet('space.4')};
  vertical-align: middle;
  border-left: ${props =>
    props.isActive
      ? `0.4rem solid ${props.theme.colors.secondary[3][1]}`
      : '0.4rem solid transparent'};
  transition: 0.3s;

  &:hover {
    color: ${themeGet('colors.gray.0')};
  }
`;

const ScrollItems = ({ items, onChange, ListComponent, ItemComponent }) => {
  const { activeItem } = useContext(SideNavBarContext);

  const onClick = id => () => {
    onChange(id);
  };

  return (
    <ListComponent>
      {map(
        item => (
          <ItemComponent onClick={onClick(item.id)} key={item.id} isActive={activeItem === item.id}>
            {item.text}
          </ItemComponent>
        ),
        items,
      )}
    </ListComponent>
  );
};

const Tabs = ({ items, onChange }) => {
  const { activeTab, setActiveTab, setActiveItem } = useContext(SideNavBarContext);

  const onClickTab = name => () => {
    if (activeTab === name) {
      return false;
    }
    if (window && window.scrollTo) {
      window.scrollTo(0, 0);
    }
    setActiveItem(null);
    setActiveTab(name);
  };

  return (
    <ListItems>
      {map(
        item => (
          <React.Fragment key={item.name}>
            <Item onClick={onClickTab(item.name)} isActive={activeTab === item.name}>
              {item.text}
            </Item>
            {item.links && activeTab === item.name ? (
              <ScrollItems
                items={item.links}
                onChange={onChange}
                ListComponent={ChildsListItems}
                ItemComponent={ChildItem}
              />
            ) : null}
          </React.Fragment>
        ),
        items,
      )}
    </ListItems>
  );
};

const Desktop = ({ items, onChange, withTabs }) =>
  withTabs ? (
    <Tabs items={items} onChange={onChange} />
  ) : (
    <ScrollItems items={items} onChange={onChange} ListComponent={ListItems} ItemComponent={Item} />
  );

export default Desktop;
