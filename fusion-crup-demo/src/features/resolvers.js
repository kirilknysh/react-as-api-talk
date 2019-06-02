export function noopResolver() {
	return {
		resolve() {
			console.log('noop resolver: resolve');
		},
		reject() {
			console.log('noop resolver: reject');
		},
	};
}

export function alertResolver() {
	return {
		resolve() {
			alert('noop resolver: resolve');
		},
		reject() {
			alert('noop resolver: reject');
		},
	};
}
