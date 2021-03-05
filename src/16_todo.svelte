<script>
	export let todo;
	export let todos;

	let isEdit = false;
	let title = '';

	function onEdit() {
		isEdit = true;
		title = todo.title;
	}
	function deleteTodo() {
		$todos = $todos.filter(t => t.id !== todo.id);
	}

	function updateTodo() {
		todo.title = title;
		$todos = $todos.offEdit();
		offEdit();
	}
	function offEdit() {
		isEdit = false;
	}
</script>

{todo.title}

{#if isEdit}
	<div>
		<input bind:value={title} on:keydown={() => {}} />
		<button on:click={updateTodo}> 갱신 </button>

		<button on:click={offEdit}> 취소 </button>
	</div>
{:else}
	<div>
		{todo.title}
		<button on:click={onEdit}> 수정 </button>

		<button on:click={deleteTodo}> 삭제 </button>
	</div>
{/if}
