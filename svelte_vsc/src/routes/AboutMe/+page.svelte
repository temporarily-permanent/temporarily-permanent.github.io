<script>
	import { onMount } from 'svelte';
	import { aboutMeData } from '$lib/data/content_options.js';

	onMount(() => {
		document.title = 'About Me';
	});


	let hoverOverSub = false;
	//thanks webstorm
	/*onkeydown(event) {
		if (event.key === 'Escape') {
			window.history.back();
		}
	}*/
</script>

<div class="container">

	<!-- introduction -->
	<div
		class="base"
		style="height: {hoverOverSub ? 'var(--hidden-size)':'var(--normal-size)'}"
	>
		hjhujlgulfgtguk
		<h2>{aboutMeData.introduction_naming}</h2>
		<p>{aboutMeData.introduction}</p>
	</div>
	<!-- skills -->
	<div
		class="sub"
		on:mouseenter={hoverOverSub = true}
		on:mouseleave={hoverOverSub = false}
	>

	</div>


	<!-- interests -->
	<!-- work experience -->

</div>


<style>
    .container {
				--normal-size: 400px;
				--hidden-size: 100px;
    }

		.container * {
				background: var(--dark-gray);
		}

    .sub {
        height: var(--hidden-size);
        color: var(--dark-red-8);
				transition: height 2s ease;
    }

		.sub:hover {
				height: var(--normal-size);
		}

    .base {
        height: var(--normal-size);
        color: var(--dark-red-4);
				border: 30px var(--dark-red) solid;
        transition: height 2s;
    }

		.base *{
        color: var(--dark-red-4);

		}


</style>


<!--
<h1>skills</h1>
<div>

</div>
<h1>Welcome to AboutMe</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
-->
