<!-- 401은 인증에러 

개발자도구 네트워킹 스로틀 도구
네트워크 반응속도 조절 가능 -->
<script>
	import axios from 'axios';

	let apiKey = 'c324a8b8'; //   API 키
	let title = ''; //  타이틀
	let movies = null; //  영화제목
	let error = null; //  에러
	let loading = false; // 로딩중

	async function searchMovies() {
		if (loading) {
			return;
		}

		// 출력 결과가 있다면 초기화
		movies = true;
		error = null;
		loading = true;

		try {
			const res = await axios.get(
				`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&s=${title}`
			);
			console.log(res);
			movies = res.data.Search;
		} catch (err) {
			console.log(err.message);
			error = err;
		} finally {
			loading = false;
		}
	}
</script>

<input bind:value={title} />
<button on:click={searchMovies}>검색</button>

{#if loading}
	<p style="color:blue">loading</p>
{:else if movies}
	<ul>
		{#each movies as movie}
			<li>{movie.Title}</li>
		{/each}
	</ul>
{:else if error}
	<p style="color:red">{error.message}</p>
{/if}
