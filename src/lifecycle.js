import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
import { writable } from 'svelte/store';

export function lifeCycle() {
	beforeUpdate(() => {
		console.log('beforeUpdate...');
	});

	afterUpdate(() => {
		console.log('afterUpdate...');
	});

	onMount(() => {
		console.log('onMount...');
	});

	onDestroy(() => {
		console.log('onDestroy...');
	});
}

export function delayRender(delay = 3000) {
	let render = writable(false);

	onMount(() => {
		setTimeout(() => {
			// store 를 활용한 자동구독 $는 확장자가 svelte 일경우에만 사용 가능
			// 그러므로 $render = true 는 실행이 되지 않는다

			console.log('render : ' + render); //  set, update, subscribe
			render.set(true);
		}, delay);
	});
	return render;
}
