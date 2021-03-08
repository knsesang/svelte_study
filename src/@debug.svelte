<script>
	let name = 'heropy';
	let isName = true;
	let index = 0;
</script>

<!-- @debug 디버그함수를 이용해서도 값을 찍어볼수 있다-->

{@debug index, name, isName}
<h1
	on:click={() => {
		index = index + 1;
		console.log(index);
	}}
>
	{name}
</h1>
