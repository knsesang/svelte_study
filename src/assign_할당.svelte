<script>
	let name = 'heropy';
	let fruits = ['사과', '바나나', '체리'];

	let user = {
		name: 'heropy',

		depth: {
			a: 'b',
		},
		numbers: [1, 2],
	};

	let numbers = user.numbers;

	let hello = 'world';

	function assign() {
		name = 'Neo';

		let hello2 = 'world';

		// fruits = fruits.push('오렌지');	//	이렇게 하면 카운트만 찍힘

		//	방법 1
		// fruits.push('오렌지');
		// fruits = fruits;

		//	방법 2
		//	svelte 는 할당연산자를 사용해야 반응성을 가진다
		fruits = [...fruits, '오렌지'];
		user.name = 'Neo';
		user.depth.a = 'c';
		user.numbers.push(3);
		//	push만 해도 반응성이 생기네 ? why?
		// user.name = 'Neo'; 를 하는 순간 user 에 대해서 고치고
		// user.depth.a = 'c'; 를 하는 순간도 user 에 대해서 고치므로
		// user.numbers.push(3);	이것에 대한 변경값도 같이 불러오게 됨

		numbers = numbers; //	반응성을 위해서
	}
</script>

<button on:click={assign}>assign</button>
<h2>name:{name}</h2>
<h2>fruits:{fruits}</h2>
<h2>user name : {user.name}</h2>
<h2>user depth a:{user.depth.a}</h2>
<h2>user number: {user.numbers}</h2>
<h2>numbers:{numbers}</h2>
<h2>{hello}</h2>
<!-- <h2>{hello2}</h2>	함수 안에서 정의된 변수는 반응성을 가질수 없다 -->
