import resetCss from './plugins/reset-css.js';

export default function registerApp(app) {
	if (__NODE__) {
		app.middleware(resetCss);
	}
}
