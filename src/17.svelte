<!-- 
라이프사이클
 onMount
 onDestroy
 beforeUpdate : 화면에 출력되기 전
 afterUpdate : 완벽히 떨어지기전에, 분리가 되기전에, 연결이 실제로 해제되기전에
 Tick 
-->
<script>
	import Something from './17_something.svelte';

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
