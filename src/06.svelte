<script>
	let name = 'world';
	let fruits = ['사과', '배', '오렌지'];

	function deltefruit() {
		fruits = fruits.slice(1);
	}
</script>

<h1>
	hello {name}
</h1>

<ul>
	{#each fruits as items}
		<li>
			{items}
		</li>
	{/each}
</ul>

<button on:click={deltefruit}> 과일먹기 </button>
