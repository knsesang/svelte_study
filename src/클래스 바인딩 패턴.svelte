<script>
	let active = false;
	let color = 'orange';
	let white = 'white';

	let color2 = {
		t: 'tomato',
		w: '#FFF',
	};

	let letterSpacing = 'letter-spacing:5px';
</script>

<button
	on:click={() => {
		active = !active;
	}}>toggle</button
>
<div class={active ? 'active' : ''}>hello</div>

<!-- class 지시어 -->
<div class:hello={active}>hi</div>

<h2 style="background-color:{color};color:{white}">heropy</h2>

<h3 style="background-color:{color2.t};color:{color2.w}">heropy blog</h3>

<style>
	div {
		width: 100px;
		height: 100px;
		background-color: red;
		transition: 0.4s;
	}
	.active {
		width: 200px;
		background-color: orange;
	}

	.hello {
		width: 300px;
		background-color: yellow;
	}
</style>
