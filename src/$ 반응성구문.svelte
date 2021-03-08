<!-- 
	svelte 반응성 구문
$
-->
<script>
	import { tick } from 'svelte';

	let count = 0;
	let double = 0;

	//	 count   의 값이 변경된후 대기로직이 처리되고 하면이 갱신되어야
	// 그때 반응성 구문 $ 이 실행된다
	// 그러므로 실행코드 1,2,3 순으로 실행이 되어 double 값을 잘못 가져온다
	//	이를 방지하기 위해서 실행순서 2를 하기전에 tick() 을 넣어서 로직 실행후에 출력하도록 기다린다
	$: {
		double = count * 2; //	실행순서 3
		console.log('double');
	}

	// 위와 아래는 같은 구문
	// $: double = count * 2;

	async function assign() {
		count = count + 1; //	실행순서 1
		console.time('timer');
		await tick();
		console.timeEnd('timer');
		console.log(double); //	실행순서 2
	}
</script>

<button on:click={assign}>assign</button>
<h1>{count}</h1>
<h2>{double}</h2>
