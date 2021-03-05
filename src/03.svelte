<script>
	let name = 'world';
	let age = 85;
	function assign() {
		name = 'heropy';
		age = 36;
	}
</script>

<h1>Hello {name}</h1>
<h1>{age}!</h1>

<img src="" alt={name} />
<input
	type="text"
	bind:value={name}
/><!-- value앞에 bind를 붙여서 양방향 바인딩이 가긍하게 되었다 -->
<button on:click={assign}> assign </button>
