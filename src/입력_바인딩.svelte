<!-- 입력요소 바인딩 -->
<script>
	let text = '';
	let number = 3;
	let checked = false;
	let fruits = ['사과', '바나나', '체리'];
	let selectedFruits = [];
	let group = '바나나';
	let textarea = '';
	let select = '바나나';
	let multipleSelect = ['바나나', '체리'];
</script>

<!-- let text -->
<section>
	<h2>Text</h2>
	<input type="text" bind:value={text} />
</section>

<!-- let number -->
<section>
	<h2>Number/Range</h2>
	<div>
		<input type="number" bind:value={number} min="0" max="10" />
	</div>
	<div>
		<input type="range" bind:value={number} min="0" max="10" />
	</div>
</section>

<!-- let checked -->
<section>
	<h2>checkbox</h2>
	<input type="checkbox" bind:checked /> agree?
	<label for="">
		<input type="checkbox" bind:checked /> agree? (label wrapping)
	</label>
</section>

<!-- let fruits : 체크박스 다중선택 -->
<section>
	<h2>checkbox 다중 선택</h2>
	<strong>selected:{selectedFruits}</strong>
	{#each fruits as fruit}
		<label for="">
			<input type="checkbox" value={fruit} bind:group={selectedFruits} />
			{fruit}
		</label>
	{/each}
</section>

<!-- 라디오 버튼 -->
<section>
	<h2>radio</h2>
	<strong>selected:{group} </strong>
	<label for="">
		<input type="radio" value="사과" bind:group />사과
	</label>
	<label for="">
		<input type="radio" value="바나나" bind:group />바나나
	</label>
	<label for="">
		<input type="radio" value="체리" bind:group />체리
	</label>
</section>

<!-- textarea -->
<section>
	<h2>textarea</h2>
	<pre>{textarea}</pre>
	<textarea name="" id="" cols="30" rows="10" bind:value={textarea} />
</section>

<!-- select -->

<section>
	<h2>select 단일선택</h2>
	<strong>selected :{select}</strong>

	<div>
		<select name="" id="" bind:value={select}>
			<option disabled value="">select one</option>
			<option value="">사과</option>
			<option value="">바나나</option>
			<option value="">체리</option>
		</select>
	</div>
</section>

<section>
	<h2>select 다중선택</h2>
	<strong>selected :{multipleSelect}</strong>

	<div>
		<select multiple name="" id="" bind:value={multipleSelect}>
			<option disabled value="">select one</option>
			<option>사과</option>
			<option>바나나</option>
			<option>체리</option>
		</select>
	</div>
</section>
