<!-- 반복블록의 key 사용 -->
<script>
	let fruits = ['사과', '바나나', '체리', '오렌지']; //	같은 값이 없어야 키를 사용할수 있음
	let fruits_2 = [
		{ id: '1', name: '사과' },
		{ id: '2', name: '바나나' },
		{ id: '3', name: '체리' },
		{ id: '4', name: '사과' },
	];

	function deleteFirst() {
		fruits = fruits.slice(1); //	[ '바나나', '체리', '오렌지'];
		fruits_2 = fruits_2.slice(1);
	}
</script>

<button on:click={deleteFirst}>첫째 과일 지우기</button>

<!-- 개발자도구에서 보면 ul 태그 안에 li 까지 모두 refresh 된다 -->
<ul>
	{#each fruits as fruit}
		<li>{fruit}</li>
	{/each}
</ul>

<!-- 개발자도구에서 보면 ul 태그민 refresh 된다 -->
<!-- 고유키 (string or number)를 임의로 지정할 경우에는 중복되는 값은 없어야 한다 -->
<ul>
	{#each fruits as fruit (fruit)}
		<li>{fruit}</li>
	{/each}
</ul>

<!-- 개발자도구에서 보면 ul 태그민 refresh 된다 -->
<!-- id 를 이용해서 name 이 중복되는 경우도 처리가 된다 -->
<ul>
	{#each fruits_2 as fruit (fruit.id)}
		<li>{fruit.name}</li>
	{/each}
</ul>
