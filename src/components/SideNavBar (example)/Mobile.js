import React, { useContext, useMemo } from 'react';
import styled from 'styled-components';
import { map, forEach, getOr, includes, split } from 'lodash/fp';
import { Select, TreeSelect } from '@hockeystickco/ui';

import SideNavBarContext from './SideNavBarContext';

const Wrapper = styled.div`
  @media screen and (min-width: 900px) {
    display: none;
  }
`;

const buildOptions = ({ items, activeTab }) => {
  const data = {
    options: [],
    labelsByKey: {},
  };

  forEach(item => {
    data.options.push({
      uniqueKey: item.name,
      value: item.name,
      label: item.text,
    });
    data.labelsByKey[item.name] = item.text;

    if (item.name === activeTab) {
      forEach(childItem => {
        const id = item.name + '::' + childItem.id;
        data.options.push({
          uniqueKey: id,
          value: id,
          label: childItem.text,
        });
        data.labelsByKey[id] = childItem.text;
      }, getOr([], 'links', item));
    }
  }, items);

  return data;
};

const NavigationTreeSelect = ({ items, onChange }) => {
  const { activeItem, activeTab, setActiveTab, setActiveItem } = useContext(SideNavBarContext);

  const onChangeValue = ({ value }) => {
    if (includes('::', value)) {
      const [tabName, scrollBoxid] = split('::', value);
      setActiveTab(tabName);
      onChange(scrollBoxid);
    } else {
      if (activeTab === value) {
        return false;
      }
      if (window && window.scrollTo) {
        window.scrollTo(0, 0);
      }
      setActiveTab(value);
      setActiveItem(null);
    }
  };
  const buildData = useMemo(() => buildOptions({ items, activeTab }), [items, activeTab]);
  const activeKey = activeItem ? activeTab + '::' + activeItem : activeTab;
  const value = {
    label: getOr('', `${activeKey}`, buildData.labelsByKey),
    value: activeKey,
  };

  return (
    <Wrapper>
      <TreeSelect
        options={buildData.options}
        treeExpandedKeys={[activeTab]}
        value={value}
        onChange={onChangeValue}
        getPopupContainer={triggerNode => triggerNode.parentNode}
        allowClear={false}
      />
    </Wrapper>
  );
};

const SingleSelect = ({ items, onChange }) => {
  const { activeItem } = useContext(SideNavBarContext);

  const options = map(
    item => ({
      value: item.id,
      label: item.text,
    }),
    items,
  );

  return (
    <Wrapper>
      <Select
        options={options}
        value={activeItem}
        onChange={onChange}
        getPopupContainer={triggerNode => triggerNode.parentNode}
      />
    </Wrapper>
  );
};

const Mobile = ({ items, onChange, withTabs }) =>
  withTabs ? (
    <NavigationTreeSelect items={items} onChange={onChange} />
  ) : (
    <SingleSelect items={items} onChange={onChange} />
  );

export default Mobile;
