<!-- 자바스크립트의 비동기 처리 이해 및 패턴 #1 -->
<script>
	// 동기식
	function a() {
		setTimeout(() => {
			console.log('a');
		}, 1000);
	}

	function b() {
		console.log('b');
	}

	a();
	b();

	// 비동기식 #1
	function c(callback) {
		setTimeout(() => {
			console.log('c');
			callback();
		}, 1000);
	}

	function d() {
		console.log('d');
	}

	c(() => {
		d();
	});

	// 비동기식 #2
	function a_1(callback) {
		setTimeout(() => {
			console.log('a_1');
			callback();
		}, 1000);
	}

	function b_1(callback) {
		setTimeout(() => {
			console.log('b_1');
			callback();
		}, 1000);
	}

	function c_1(callback) {
		setTimeout(() => {
			console.log('c_1');
			callback();
		}, 1000);
	}

	a_1(() => {
		b_1(() => {
			c_1(() => {
				console.log('done');
			});
		});
	});

	// 비동기식 #3
	function aa() {
		return new Promise(resolve => {
			setTimeout(() => {
				console.log('aa');
				resolve();
			}, 5000);
		});
	}

	function bb() {
		return new Promise(resolve => {
			setTimeout(() => {
				console.log('bb');
				resolve();
			}, 1000);
		});
	}

	function cc() {
		return new Promise(resolve => {
			setTimeout(() => {
				console.log('cc');
				resolve();
			}, 1000);
		});
	}

	aa()
		.then(() => bb())
		.then(() => cc());
</script>
