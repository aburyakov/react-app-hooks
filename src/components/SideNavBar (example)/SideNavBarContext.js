import React, { useReducer } from 'react';
import { isNull, pickBy, keys, flow, forEach } from 'lodash/fp';

const SideNavBarContext = React.createContext({});

const getActiveItem = elements => {
  const activeElements = flow(
    pickBy(function(status) {
      return status;
    }),
    keys,
  )(elements);
  const result = {
    active: null,
  };
  forEach(id => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top;
      if (isNull(result.active)) {
        result.active = { id, top };
      } else {
        if (result.active.top > top) {
          result.active = { id, top };
        }
      }
    }
  }, activeElements);

  return result.active ? result.active.id : false;
};

function reducer(state, action) {
  switch (action.type) {
    case 'setActiveItem':
      return {
        ...state,
        activeItem: action.payload,
      };
    case 'setLock':
      return {
        ...state,
        lock: action.payload,
      };
    case 'setActiveTab':
      return {
        ...state,
        activeTab: action.payload,
      };
    case 'setVisibleElements':
      const newState = {
        ...state,
        visibleElements: {
          ...state.visibleElements,
          [action.payload.elementId]: action.payload.status,
        },
      };
      if (!state.lock) {
        const active = getActiveItem(newState.visibleElements);
        if (active) {
          newState.activeItem = active;
        }
      }
      return newState;
    default:
      throw new Error();
  }
}

const SideNavBarProvider = ({ children, defaultTab }) => {
  const [state, dispatch] = useReducer(reducer, {
    visibleElements: {},
    activeItem: null,
    lock: false,
    activeTab: defaultTab,
  });

  const onVisibleChange = elementId => status => {
    dispatch({
      type: 'setVisibleElements',
      payload: {
        elementId,
        status,
      },
    });
  };

  const providerValue = {
    visibleElements: state.visibleElements,
    activeItem: state.activeItem,
    lock: state.lock,
    activeTab: state.activeTab,
    setActiveItem: id => dispatch({ type: 'setActiveItem', payload: id }),
    setLock: status => dispatch({ type: 'setLock', payload: status }),
    setActiveTab: name => dispatch({ type: 'setActiveTab', payload: name }),
    onVisibleChange,
  };

  return (
    <SideNavBarContext.Provider value={providerValue}>
      <>{children}</>
    </SideNavBarContext.Provider>
  );
};

export default SideNavBarContext;
export { SideNavBarProvider };
