<script>
	import Something from './something.svelte';

	let toggle = false;
</script>

<button
	on:click={() => {
		toggle = !toggle;
	}}
>
	토글
</button>

{#if toggle}
	<Something />
{/if}
