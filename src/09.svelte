<script>
	// import { onMount } from 'svelte'; //  콜백함수가 준비되면 실행하겠다

	let name = 'world';
	let isRed = false;

	// onMount(() => {
	// 	const box = document.querySelector('.box');
	// 	box.addEventListener('click', () => {
	// 		isRed = !isRed;
	// 	});
	// });

	function enter() {
		name = 'enter2';
	}
	function leave() {
		name = 'leave2';
	}
</script>

<h1>
	hello {name}
</h1>

<div
	class="box"
	style="background-color:{isRed ? 'red' : 'orange'}"
	on:click={() => {
		isRed = !isRed;
	}}
	on:mouseenter={() => {
		name = 'enter';
	}}
	on:mouseleave={() => {
		name = 'leave';
	}}
>
	박스
</div>

<style>
	.box {
		width: 300px;
		height: 100px;
		background-color: orange;
	}
</style>
