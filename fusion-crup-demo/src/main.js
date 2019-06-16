import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';
import I18n, { I18nToken, I18nLoaderToken, createI18nLoader } from 'fusion-plugin-i18n-react';
import UniversalEvents, { UniversalEventsToken } from 'fusion-plugin-universal-events';

import root from './root.js';
import registerApp from './register-app.js';

export default () => {
	const app = new App(root);

	app.register(Styletron);
	app.register(Router);
	app.register(I18nToken, I18n);
	__NODE__ && app.register(I18nLoaderToken, createI18nLoader());
	app.register(UniversalEventsToken, UniversalEvents);

	registerApp(app);

	return app;
};
