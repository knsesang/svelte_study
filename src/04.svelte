<script>
	let name = 'world';
	let age = 85;
	function assign() {
		name = 'heropy';
		age = 36;
	}
</script>

<h1>Hello {name}</h1>
<h2 class={age < 85 ? 'active' : ''}>{age}</h2>
<!-- 중괄호안에 비교구문 삽입 가능  -->

<img src="" alt={name} />
<input type="text" bind:value={name} />
<button on:click={assign}> assign </button>

<style>
	h1 {
		color: red;
	}

	.active {
		color: blue;
	}
</style>
