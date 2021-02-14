import React, { useReducer } from 'react';
import Cookies from 'js-cookie';

const getMessages = async locale => {
  const messages = await import(`lang/${locale}`);
  const taxonomy = await import(`lang/taxonomy/${locale}`);

  return { ...taxonomy, ...messages };
};

const LanguageContext = React.createContext({});

function reducer(state, action) {
  switch (action.type) {
    case 'setLocale':
      return {
        ...state,
        locale: action.payload,
      };
    case 'setMessages':
      return {
        ...state,
        messages: action.payload,
      };
    case 'setLanguage':
      return {
        ...state,
        locale: action.payload.locale,
        messages: action.payload.messages,
      };
    default:
      return state;
  }
}

const LanguageProvider = ({ children, defaultLocale, defaultMessages }) => {
  const [state, dispatch] = useReducer(reducer, {
    locale: defaultLocale,
    messages: defaultMessages,
  });

  const updateLanguage = lang => {
    const existing = Cookies.get('user-locale');
    if (existing !== lang) {
      Cookies.set('user-locale', lang);
      getMessages(lang).then(msgs =>
        dispatch({ type: 'setLanguage', payload: { locale: lang, messages: msgs } }),
      );
    }
  };

  const providerValue = {
    locale: state.locale,
    messages: state.messages,
    setLocale: locale => dispatch({ type: 'setLocale', payload: locale }),
    setMessages: messages => dispatch({ type: 'setMessages', payload: messages }),
    updateLanguage,
  };

  return (
    <LanguageContext.Provider value={providerValue}>
      <>{children}</>
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
export { LanguageProvider, getMessages };
