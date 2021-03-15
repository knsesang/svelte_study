<!-- 
	비동기 처리 이해와 패턴
	대기(pending) :  이행하거나 거부되지 않은 초기 상태
	이행 (fulfilled) : 연산이 성공적으로 완료됨
	거부 (rejected) : 연산이 실패함 
-->
<script>
	// 비동기식 #4
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

	async function asyncFn() {
		await aa();
		await bb();
		await cc();
	}

	asyncFn();

	// 비동기식 #5
	//	reject : 실행이 되지 못할때 return
	let isError = false;
	function abc() {
		return new Promise((resolve, reject) => {
			if (isError) {
				reject();
			}
			setTimeout(() => {
				console.log('abc');
				resolve();
			}, 5000);
		});
	}

	abc()
		.then(() => {
			console.log('done');
		})
		.catch(() => {
			console.log('error');
		});

	// 비동기식 #6
	//	reject(str) : 실행이 되지 못할때 str return
	let isError_2 = true;
	function abc_2() {
		return new Promise((resolve, reject) => {
			if (isError_2) {
				reject('sorry_2');
			}
			setTimeout(() => {
				console.log('abc_2');
				resolve('success');
			}, 10000);
		});
	}

	abc_2()
		.then(() => {
			console.log('done_2');
		})
		.catch(err => {
			console.log(err);
		});

	// 비동기식 #7
	//	reject(str) : 실행이 되지 못할때 str return
	let isError_3 = true;
	function abc_3() {
		return new Promise((resolve, reject) => {
			if (isError_3) {
				reject('sorry_3');
				return;
			}
			setTimeout(() => {
				console.log('abc_3');
				resolve();
			}, 10000);
		});
	}

	abc_3()
		.then(() => {
			console.log('done_3');
		})
		.catch(err => {
			console.log(err);
		});

	// 비동기식 #8
	//	reject(str) : 실행이 되지 못할때 str return
	let isError_4 = true;
	function abc_4() {
		return new Promise((resolve, reject) => {
			if (isError_4) {
				reject('sorry_4');
				return;
			}
			setTimeout(() => {
				console.log('abc_4');
				resolve();
			}, 10000);
		});
	}

	async function asyncFunction() {
		try {
			await abc_4();
			console.log('success_4');
		} catch (err) {
			console.log('err_4');
		}
	}
	asyncFunction();

	// 비동기식 #9
	//	reject(str) : 실행이 되지 못할때
	// finally
	let isError_5 = true;
	function abc_5() {
		return new Promise((resolve, reject) => {
			if (isError_5) {
				reject('sorry_5');
				return;
			}
			setTimeout(() => {
				console.log('abc_5');
				resolve();
			}, 10000);
		});
	}

	abc_5()
		.then(() => {
			console.log('done_5');
		})
		.catch(err => {
			console.log(err);
		})

		// then() 이 실행되던지 catch() 가 실행되던지 한번은 무조건 실행됨
		.finally(() => {
			console.log('finally_5');
		});

	// 비동기식 #10
	//	reject(str) : 실행이 되지 못할때
	// async finally
	let isError_6 = false;
	function abc_6() {
		return new Promise((resolve, reject) => {
			if (isError_6) {
				reject('sorry_6'); //	문자열 전달
				// reject(new Error('sorry_66'));		//	에러 객체로도 전달 가능
				return;
			}
			setTimeout(() => {
				console.log('abc_6');
				resolve('heropy');
			}, 10000);
		});
	}

	async function asyncFunction_6() {
		try {
			const res = await abc_6();
			console.log('res = ' + res);
			console.log('success_6');
		} catch (err) {
			console.log('err_6');
		} finally {
			console.log('finally_6');
		}
	}
	asyncFunction_6();

	// 비동기식 #11
	//	reject(str) : 실행이 되지 못할때
	// finally
	let isError_7 = false;
	function abc_7() {
		return new Promise((resolve, reject) => {
			if (isError_7) {
				reject('sorry_7');
				return;
			}
			setTimeout(() => {
				console.log('abc_7');
				resolve('heropy_2');
			}, 10000);
		});
	}

	abc_7()
		.then(res_2 => {
			console.log('res_2 = ' + res_2);
			console.log('done_7');
		})
		.catch(err => {
			console.log(err);
		})

		// then() 이 실행되던지 catch() 가 실행되던지 한번은 무조건 실행됨
		.finally(() => {
			console.log('finally_7');
		});
</script>

<!-- 비공기 async await -->
