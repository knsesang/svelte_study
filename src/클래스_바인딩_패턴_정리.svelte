<!-- 
	클래스 바인딩 패턴 정리
	class 명은 대부분 소문자로 사용한다
	바인딩시에 소스 단축을 위해서 소문자 사용 추천 
-->
<script>
	let active = true;
	let vaild = false;
	let camelCase = true;

	function multi() {
		return 'active multiple-class';
	}
</script>

<div class={active ? 'active' : ''}>3 항 연산자 보간</div>

<!-- 
	<div class:active={active}>class 지시어 (directive ) 바인딩</div> 
	아래와 같은 문법
-->
<div class:active>class 지시어 (directive ) 바인딩</div>

<div class="active">class 지시어 바인딩 단축 형태</div>

<div class:active class:vaild class:camelCase class:camel-case={camelCase}>
	다중 class 지시어 바인딩
</div>

<div class={multi()}>함수실행</div>
