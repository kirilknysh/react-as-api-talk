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

const PATH_SEPARATOR = '/';

export function resolvePath(base, ...adds) {
	if (adds.length === 0) {
		return base;
	}

	const path = adds.shift();
	const basePaths = base.split(PATH_SEPARATOR);
	const paths = path.split(PATH_SEPARATOR);

	if (basePaths.length > 0 && basePaths[basePaths.length - 1] === '') {
		basePaths.pop();
	}

	if (paths[0] === '') {
		basePaths.length = 0;
	} else if (paths[0] === '.') {
		paths.shift();
	} else if (paths[0] === '..') {
		while (paths.length && paths[0] === '..') {
			paths.shift();
			basePaths.pop();
		}
		if (basePaths.length === 0) {
			basePaths.push('');
		}
	}

	const newBase = [...basePaths, ...paths].join(PATH_SEPARATOR);

	return resolvePath(newBase, ...adds);
}
