import LanguageContext from './LanguageContext';

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