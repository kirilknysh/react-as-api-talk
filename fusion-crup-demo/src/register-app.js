import RPC, { RPCToken, RPCHandlersToken } from 'fusion-plugin-rpc';
import { FetchToken } from 'fusion-tokens';

import resetCss from './plugins/reset-css.js';
import handlers from './rpc/handlers.js';

export default function registerApp(app) {
	app.register(RPCToken, RPC);

	if (__NODE__) {
		app.middleware(resetCss);
		app.register(RPCHandlersToken, handlers);
	} else {
		app.register(FetchToken, window.fetch);
	}
}
