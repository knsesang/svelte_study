<script>
	import Fruits from './13_child.svelte';

	let 과일들 = ['사과', '바나나', '체리', '오렌지', '망고'];
</script>

<!-- 
f 는 13_child.svelte 와 주고 받을 변수명 
주고 받는 변수명과 배열 이름이 같으면 단축이 가능하다
<Fruits {과일들} />
-->

<Fruits {과일들} />

<!-- 
과일목록 반대로 전달
<Fruits {과일들} reverse/> = <Fruits {과일들} reverse={true}/>
 -->
<Fruits {과일들} reverse />

<Fruits {과일들} slice="-2" />

<!-- 과일들 배열에서 0 ~ [3-1] 개의 배열을 가져온다 -->
<Fruits {과일들} slice="0,3" />
