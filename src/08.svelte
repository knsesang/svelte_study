<script>
	import { onMount } from 'svelte'; //  콜백함수가 준비되면 실행하겠다

	let name = 'world';
	let isRed = false;

	onMount(() => {
		const box = document.querySelector('.box');
		box.addEventListener('click', () => {
			isRed = !isRed;
		});
	});
</script>

<h1>
	hello {name}
</h1>

<div class="box" style="background-color:{isRed ? 'red' : 'orange'}">박스</div>

<style>
	.box {
		width: 300px;
		height: 100px;
		background-color: orange;
	}
</style>
