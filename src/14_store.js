import { writable } from 'svelte/store';

// 아래와 같이 하면 외부에서 수정이 안됨
// export let storeName = ''

//	쓰기 가능한 변수로 만듦
// export let storeName = writable('')

//	 초기값을 heoropy 로 설정
export let storeName = writable('heropy');
