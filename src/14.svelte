<script>
	import { storeName } from './store.js';
	import Parent from './14_parent.svelte';

	let name = 'world';

	console.log('storeName : ' + storeName);

	$storeName = name;

	//	안에 데이타를 표시
	//	set, update, subscribe  대신에 $ 을 사용하는것을 자동구독이라도 한다
	console.log('storeName : ' + $storeName);
</script>

<h1>
	hello {name}
</h1>

<Parent {name} />
