<script>
	// let promise;		//	시작하자마자 값이  undefined 가 찍힘

	let promise = new Promise(resolve => {
		resolve('start');
	});

	// 위와 동일 #1
	// let promise = new Promise(resolve => resolve('start'));

	// 위와 동일 #2
	// let promise = Promise.resolve('start');

	let isError = false;

	function fetchName(params) {
		// resolve : 약속이 실행되었을때 실행하는 함수
		// reject : 약속에 문제가 생겨 약속을 거부할때 실행하는 함수
		return new Promise((resolve, reject) => {
			if (isError) {
				// 오류가 발생하면 sorry  를 반환한다
				reject(new Error('sorry'));
			}
			setTimeout(() => {
				resolve('heropy');
			}, 2000);
		});
	}
</script>

<!-- heropy 안 찍힘
<button
	on:click={() => {
		promise = fetchName();
		console.log(promise);
	}}>fetchName</button
> -->

<!-- 2초후에 heropy 찍힘 -->
<button
	on:click={async () => {
		promise = await fetchName();
		console.log(promise);
	}}>fetchName</button
>
<!-- 
	위와 같은 결과를 가져온다 #1
<button
	on:click={async () => {
		promise =  fetchName();
		console.log(await promise);
	}}>fetchName</button
> 

위와 같은 결과를 가져온다 #2
<button
	on:click={async () => {
		promise = fetchName();
		promise.then(res => {
			console.log(res);
		});
	}}>fetchName</button
>

-->

<button
	on:click={() => {
		promise = fetchName();
	}}>fetchName_2</button
>

{#await promise}
	<p>
		대기...pending<br />
		promise 결과를 기다리는 동안 표시된다.
	</p>
	<p>loading....</p>
{:then name}
	<p>
		이행..fullfilled<br />
		name : return 되는 heropy 를 받을 변수명
	</p>
	<p>{name}</p>
{:catch error}
	<p>거부...reject</p>
	<p>{error.message}</p>
{/await}

<!-- {#await promise then name}
	<p>
		빠르개 반응이 일어나는 상황이라면 loading 보일 시간도 없을것이다 <br />
		또한 에러가 없는 상황이라면 아래와 같이 적용가능하다
	</p>
	<p>{name}</p>
{/await} -->
