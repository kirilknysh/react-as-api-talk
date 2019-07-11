import { createPlugin } from 'fusion-core';
import { LoggerToken } from 'fusion-tokens';

export default createPlugin({
	deps: { logger: LoggerToken },
	middleware(deps) {
		const { logger } = deps;

		return async function requestTimeMiddleware(ctx, next) {
			const start = Date.now();

			await next();

			__NODE__ && logger.verbose(`Request done in ${Date.now() - start}ms; url = ${ctx.url}`);
		};
	},
});
