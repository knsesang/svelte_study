<!-- 반응성 구문 패턴 -->
<script>
	import { log } from 'node:console';

	let count = 0;

	//  선언
	$: double = count * 2;

	//  블록
	$: {
		console.log(count);
		console.log(double);
	}

	//  함수실행
	$: count, logs();

	// 즉시실행 함수(IIFE)
	$: count,
		() => {
			console.log('iife:heropy');
		};

	// 조건문(if)
	$: if (count < 0) {
		console.log('if : ', double);
	}

	// 반복문 ( for )
	$: for (let i = 0; i < 3; i++) {
		count;
		console.log('for : ', i);
	}

	// 조건문 ( switch)
	$: switch (count) {
		case 1:
			console.log('switch : 1');
			break;
		default:
			console.log('switch : default');
	}

	// 유효범위
	$: {
		function scope1() {
			console.log('scope1');
			function scope2() {
				console.log('scope2');
				function scope3() {
					console.log('scope3', count);
				}
				scope3();
			}
			scope2();
		}
		scope(1);
	}

	function logs() {
		console.log('fn:history');
	}

	function assign() {
		count = count + 1;
	}
</script>
