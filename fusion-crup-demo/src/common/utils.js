import { split } from 'fusion-react';

import Loading from './components/Loading.js';
import FullscreenError from './components/FullscreenError.js';

export function makeComponentLoader(params) {
	return split({
		LoadingComponent: Loading,
		ErrorComponent: FullscreenError,
		...params,
	  });
}
