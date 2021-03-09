<!-- 일반요소 바인딩 -->
<script>
	import { tick } from 'svelte';

	let isShow = false;

	async function toggle() {
		isShow = !isShow;
		await tick();

		const inputEl = document.querySelector('input');
		inputEl && inputEl.focus();
	}
</script>

<button on:click={toggle}>수정</button>

{#if isShow}
	<input />
{/if}
