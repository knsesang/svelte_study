<script>
	// props
	// f 는 13.svelte 파일과 주고 받는 변수명
	// 	export let f
	export let 과일들;
	export let reverse;
	export let slice;

	let computedFruits = [];
	let name = '';

	if (reverse) {
		computedFruits = [...과일들].reverse();
		name = 'reverse';
	} else if (slice) {
		// 		...slice.split(',')
		// 				'-2' = > ['-2']
		// 		'0,3' => ['0','3']

		computedFruits = 과일들.slice(...slice.split(','));
		// 		name = 'slice' + slice
		name = `slice ${slice}`;
	} else {
		computedFruits = 과일들;
		name = '';
	}
</script>

<h2>과일들 {name}</h2>

<ul>
	{#each computedFruits as 과일}
		<li>
			{과일}
		</li>
	{/each}
</ul>
