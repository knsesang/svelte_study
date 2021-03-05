<script>
	let name = 'world';
	let toggle = false;

	if (toggle) {
	} else {
	}
</script>

<!-- 버튼을 누르면 toggle 값이 바뀌면서 h1 태그가 보였다가 사라졌다 한다 -->
<button
	on:click={() => {
		toggle = !toggle;
	}}
>
	토글
</button>
{#if toggle}
	<h1>
		hello {name}
	</h1>
{:else}
	<div>no name!</div>
{/if}
