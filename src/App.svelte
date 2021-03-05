<script>
	import { lifeCycle, delayRender } from './lifecycle.js';
	import Something_2 from './something_2.svelte';

	let done = delayRender();
	lifeCycle();
</script>

{#if $done}
	<h1>라이프 사이클</h1>
{/if}

<Something_2 />
