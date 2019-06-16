const handlers = __NODE__ && {
	connect: async function (args, ctx) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const { connection } = args

				if (connection === 'github') {
					return reject();
				}

				return resolve({
					status: 'connected',
					connection,
				});
			}, 2000);
		});
	},
};

export default handlers;
