<script>
	import Todo from './15_todo.svelte';

	let title = '';
	let todos = [];
	let id = 0;
	function createTodo() {
		//	변수명과 변수 값 이름이 같다면 변수명을 생략이 가능하디
		// 		title:title
		todos.push({
			// 	id:id,
			id,
			// title:title,
			title,
		});

		//	자기 자신에게 할당하는 이유는 값이 변하는 경우 상태가 변하기 때문이다
		//	값의 변화가 있어야 반응값이 리프레시 된다
		todos = todos;
		title = '';
		id = id + 1;
	}

	// if (e.key === 'Enter') {creteTodo}
	// e.kety === 'Enter'? createJob: undefind
	// e.kety === 'Enter' && createJob()
</script>

<input
	type="text"
	bind:value={title}
	on:keydown={e => {
		e.key === 'Enter' && createTodo;
	}}
/>

<button on:click={createTodo}> create todo </button>

{#each todos as todo}
	<Todo {todo} />
{/each}
