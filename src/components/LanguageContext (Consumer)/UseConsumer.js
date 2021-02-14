import React from 'react';
import LanguageContext from './LanguageContext';
import ThemeContext from './ThemeContext';

<LanguageContext.Consumer>
  {({ updateLanguage }) => (
    <UserLanguageUpdater
	  locale={userInfo.locale}
	  updateLanguage={updateLanguage}
    />
  )}
</LanguageContext.Consumer>

OR

<LanguageContext.Consumer>
  {({ messages, locale }) => (
	<IntlProvider key={locale} locale={locale} messages={messages} initialNow={initialNow}>
	  {children}
	</IntlProvider>
  )}
</LanguageContext.Consumer>

OR

class ThemedButton extends React.Component {
  render() {
    let theme = this.context;
    
    return (
      <button
        style={{backgroundColor: theme.background}}
      />
    );
  }
}
ThemedButton.contextType = ThemeContext;