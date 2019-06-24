import { ResponseError } from 'fusion-plugin-rpc';

export default async function(args) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			const { connection } = args;

			if (connection === 'github') {
				const error = new ResponseError('Github verifcation failed');

				error.code = 'failed';
				error.meta = { connection };

				return reject(error);
			}

			return resolve({
				code: 'verified',
				meta: { connection },
			});
		}, 2000);
	});
};
