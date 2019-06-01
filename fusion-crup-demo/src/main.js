import App from 'fusion-react';
import Router from 'fusion-plugin-react-router';
import Styletron from 'fusion-plugin-styletron-react';

import root from './root.js';
import registerApp from './register-app.js';

export default () => {
	const app = new App(root);

	app.register(Styletron);
	app.register(Router);

	registerApp(app);

	return app;
};
