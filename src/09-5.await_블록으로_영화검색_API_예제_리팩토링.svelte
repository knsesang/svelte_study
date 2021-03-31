<script>
	import axios from 'axios';

	let apiKey = 'c324a8b8'; //   API 키
	let title = ''; //  타이틀
	// let movies = null; //  영화제목... await 구문에서 체크 하므로 따로 체크할 필요없다
	// let error = null; //  에러... await 구문에서 체크 하므로 따로 체크할 필요없다
	// let loading = false; // 로딩중... await 구문에서 체크 하므로 따로 체크할 필요없다

	let promise = Promise.resolve([]);

	// 위와 동일
	// let promise = new Promise(resolve => {
	// 	resolve([]);
	// });

	async function searchMovies() {
		// searchMovies 실행후 promise 객체를 반환해야 한다
		return new Promise(async (resolve, reject) => {
			try {
				const res = await axios.get(
					`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${title}`
				);
				console.log(res);
				// movies = res.data.Search;
				resolve(res.data.Search);
			} catch (err) {
				console.log(err.message);
				// error = err;
				reject(err);
			} finally {
				console.log('Done');
			}
		});
	}
</script>

<input bind:value={title} />

<!-- <button on:click={searchMovies}>검색</button> -->
<!-- 함수를 실행시킬 예정이므로 아래와 같이 바꾼다 -->
<button
	on:click={() => {
		promise = searchMovies();
	}}>검색</button
>

{#await promise}
	<p>
		대기...pending<br />
		promise 결과를 기다리는 동안 표시된다.
	</p>
	<p>loading....</p>
{:then movies}
	<ul>
		{#each movies as movie}
			<li>{movie.Title}</li>
		{/each}
	</ul>
{:catch error}
	<p>거부...reject</p>
	<p>{error.message}</p>
{/await}
