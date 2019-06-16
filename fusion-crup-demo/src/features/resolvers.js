export function noopResolver() {
	return {
		resolve() {
			console.log('noop resolver: resolve');
		},
		reject() {
			console.log('noop resolver: reject');
		},
		notify() {
			console.log('noop resolver: notify');
		}
	};
}

export function alertResolver() {
	return {
		resolve() {
			alert('alert resolver: resolve');
		},
		reject() {
			alert('alert resolver: reject');
		},
		notify() {
			alert('alert resolver: notify');
		}
	};
}
