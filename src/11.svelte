<!-- 구문1과 구문2는 같은 기능을 한다 -->
<script>
	let text = '';
</script>

<h1>
	{text}
</h1>

<!-- 구문 1 -->
<input
	text="text"
	on:input={e => {
		text = e.target.value;
	}}
/>
<!-- 구문 1 -->

<!-- 구문 2 -->
<input text="text" bind:value={text} />

<button
	on:click={() => {
		text = 'heropy';
	}}
>
	클릭
</button>
<!-- 구문 2 -->
