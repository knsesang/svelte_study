<script>
	import { tick } from 'svelte';

	let name = 'world';

	// 함수안에서 실행중일때는 안에 모든 내용을 실행한후에 화면을 갱신한다
	// 그러므로  name='heropy'를 설정했다고 해도
	// h1.innerText 는 변경전의 값인 'world'를 불러올수밖에 없다

	//	이를 위해서 tick을 사용함. asp의  flush  같은 느낌
	//	비동기이므로 await 를 추가해야 함

	async function handler() {
		name = 'heropy';
		await tick();
		const h1 = document.querySelector('h1');
		console.log(h1);
	}
</script>

<h1 on:click={handler}>{name}</h1>
