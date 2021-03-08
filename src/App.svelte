<script>
	let href = 'https://heropy.blog';
	let name = 'heropy';
	let value = 'new input value';
	let isUpperCase = false;
</script>

<!-- 3개 모두 같은 표현 방식 -->
<a href="https://heropy.blog">heropy</a> <br />

<!-- 보간 한다고 표현 -->
<!-- 
	<a href={href}>{name}</a> <br />
	▼ 
-->
<a {href}>{name}</a> <br />

<!-- <input type="text" value="default value" /> -->
<!-- 
	<input {value} on:input={(e) => {value = e.target.value}} /> 
	▼ 
-->
<input {value} on:input={e => (value = e.target.value)} />

<!-- 
	<input bind:value={value} />
	▼ 
-->
<input bind:value />

<div>
	{isUpperCase ? 'DIV' : 'div'}
</div>
