<script>
	let name = 'world';
	let age = 85;
	function assign() {
		name = 'heropy';
		age = 36;
	}
</script>

<h1>Hello {name}!</h1>
<h1>{age}!</h1>

<img src="" alt={name} />
<input type="text" value={name} />
<button on:click={assign}> assign </button>
