import connect from './connect.js';
import verify from './verify.js';

const handlers = __NODE__ && {
	connect,
	verify,
};

export default handlers;
