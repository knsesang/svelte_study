<!-- @keyframes  전역화 
	@keyframes zoom {}	일반
	@keyframes -global-zoom {}	전역화

-->
<script>
</script>

<div class="box" />

<style>
	/* 
		body {padding: 60px;}		 
		이 콤포넌트에는  body 가 없으므로 작동안한다	
	*/

	:global(body) {
		padding: 60px;
	}

	.box {
		width: 100px;
		height: 100px;
		background-color: tomato;
		border-radius: 10px;
		animation: zoom 0.4s infinite alternate;
	}

	@keyframes -global-zoom {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(1.5);
		}
	}
</style>
