<!-- 08.svelte 가 onMount 가 필요 -->
<script>
	let name = 'world';
	let isRed = false;

	const box = document.querySelector('.box');
	box.addEventListener('click', () => {
		isRed = !isRed;
	});
</script>

<!-- Cannot read property 'addEventListner' of null  오류 발생 -->

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
