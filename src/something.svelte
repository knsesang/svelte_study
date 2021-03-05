<script>
	import { onMount, onDestroy } from 'svelte';

	// 아래와 같이 적으면 h1 화면에 렌더링 되기 전이므로 null 오류가 난다
	// const h1 = document.querySelector('h1');
	// console.log(h1.innerText);
	// 해제되기전에 값을 받아올려고 한다면
	// onMount 에서 리턴을 받든지 onDestroy에서 받던지 둘중 하나를 써도 무관하다
	// 그러나 onMount 를 비동기로 쓰는경우에는 return 값이 일치하지 않을 확률이 존재한다
	// 그러므로 onDestroy 를 추천한다
	onMount(() => {
		console.log('mounted');

		const h1 = document.querySelector('h1');
		console.log(h1.innerText);

		return () => {
			console.log('destroy in mount ...해제되기전에 반환');
		};
	});

	onDestroy(() => {
		console.log('before destroy');
		const h1 = document.querySelector('h1');
		console.log(h1.innerText + '... 아직 살아있다');
	});
</script>

<h1>something</h1>
