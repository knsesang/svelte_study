<!-- 편집가능 요소 바인딩 -->
<script>
	let innerHTML = '';
	let textContent = 'hello world23';
</script>

<!-- contenteditable tag를 수정 가능하게 만들어줌 -->
<!-- 
아래는 출력되지만
<div contenteditable>hello world</div>
아래는 출력이 안된다
<div contenteditable bind:innerHTML bind:textContent>hello world</div> -->

1:
<div contenteditable bind:innerHTML bind:textContent />
2:
<div>{innerHTML}</div>
3:
<div>{textContent}</div>
4:
<div>{@html innerHTML}</div>

<style>
	div {
		border: 1px solid red;
		margin-bottom: 10px;
	}
</style>
