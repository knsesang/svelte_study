<!-- 키블록 -->
<script>
	import Count from './Count.svelte';
	let reset = false;
</script>

<!-- {#key 연결할_데이타명} -->
<!-- 연결할_데이타가 변경이 되면 블럭안에 내용을 파괴하고 다시 생성 -->

{#key reset}
	<Count />
	<ul>
		<li />
		<li />
		<li />
	</ul>
{/key}

<button on:click={() => (reset = !reset)}> reset</button>
