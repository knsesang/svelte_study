<!-- 반복블록의 패턴 -->
<script>
	let fruits = [
		{ id: 1, name: '사과' },
		{ id: 2, name: '바나나' },
		{ id: 3, name: '체리' },
		{ id: 4, name: '사과' },
		{ id: 5, name: '오렌지' },
	];

	let todos = [];
	let fruits2D = [
		[1, '사과'],
		[2, '바나나'],
		[3, '체리'],
		[4, '오렌지'],
	];

	let user = {
		name: 'heropy',
		age: 85,
		email: 'aaa@gmail.com',
	};
</script>

<section>
	<h2>기본</h2>
	<!-- {#each 배열 as 속성} -->
	{#each fruits as fruit}
		<div>{fruit.name}</div>
	{/each}
</section>

<section>
	<h2>순서(index)</h2>
	<!-- {#each 배열 as 속성, 순서} -->
	{#each fruits as fruit, i}
		<div>{i} / {fruit.name}</div>
	{/each}
</section>

<section>
	<h2>아이템 고유화(key)</h2>
	<!-- {#each 배열 as 속성, 순서(키)} -->
	{#each fruits as fruit, i (fruit.id)}
		<div>{i} / {fruit.name}</div>
	{/each}
</section>

<section>
	<h2>빈배열 처리( else )</h2>
	<!-- {#each} {:else}	{/each} -->
	{#each todos as todo (todo.id)}
		<div>{todo.name}</div>
	{:else}
		<div>아이템이 없어요</div>
	{/each}
</section>

<section>
	<h2>구조분해 ( destructuring )</h2>
	<!-- {#each 배열 as { id, name}} -->

	{#each fruits as { id, name } (id)}
		<div>{name}</div>
	{/each}
</section>

<section>
	<h2>2차원배열</h2>
	<!-- {#each 배열 as [id, name] -->

	{#each fruits2D as [id, name] (id)}
		<div>{name}</div>
	{/each}
</section>

<section>
	<h2>나머지 연산자 ( rest )</h2>

	<!-- {#each 배열 as {id, ...rest} -->
	{#each fruits as { id, ...rest } (id)}
		<div>{rest.name}</div>
	{/each}
</section>

<section>
	<h2>객체 데이터</h2>

	{#each Object.entries(user) as [key, value] (key)}
		<div>{key}:{value}</div>
	{/each}
</section>

<style>
	section {
		border: 1px solid red;
	}
</style>
