import {window} from 'global';

export function noopResolver() {
	return {
		resolve() {
			// eslint-disable-next-line no-console
			console.log('noop resolver: resolve');
		},
		reject() {
			// eslint-disable-next-line no-console
			console.log('noop resolver: reject');
		},
		notify() {
			// eslint-disable-next-line no-console
			console.log('noop resolver: notify');
		}
	};
}

export function alertResolver() {
	return {
		resolve() {
			window.alert('alert resolver: resolve');
		},
		reject() {
			window.alert('alert resolver: reject');
		},
		notify() {
			window.alert('alert resolver: notify');
		}
	};
}
