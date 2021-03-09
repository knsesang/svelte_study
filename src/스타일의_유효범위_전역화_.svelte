<!-- 
	스타일의 유효범위 ( scope, hash ) 와 전역화 (`:global`) 
	콤포넌트 내부에서만 가능
	인클루드된 파일에까지 적용이 되지 않는다

	<ul class="fruits svelte-kq1uw7">
		              ------------- 이것을 svelte 해쉬라고 부른다  

	전역으로 쓰려고 한다면 	:global(.클래스명) 방식으로 사용한다

	:global 로 된다면 svelte  해시가 생기지 않는다

	동적으로 사용하는 클래스는 :global 을 사용한다
	그렇지 않으면 svelte 컴파일하면서 불필요하다고 제거하게 된다
-->
<script>
	import Fruits from './fruits.svelte';
</script>

<h2>app.svelte</h2>
<ul class="fruits">
	<li>apple</li>
	<li>banana</li>
	<li>cherry</li>
</ul>

<ul class="nation">
	<li>korea</li>
	<li>china</li>
	<li>japan</li>
</ul>

<Fruits />

<style>
	.fruits {
		color: red;
	}

	:global(.nation) {
		color: green;
	}
</style>
