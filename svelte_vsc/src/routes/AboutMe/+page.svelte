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
		class="base {hoverOverSub ? 'hidden' : ''}"
		style="height: {hoverOverSub ? 'var(--hidden-size)':'var(--normal-size)'}"
	>
		<h2>{aboutMeData.introduction_naming}</h2>
		<p>{aboutMeData.introduction}</p>
	</div>
	<!-- skills -->
	<article
		class="sub"
		on:mouseenter={() => hoverOverSub = true}
		on:mouseleave={() => hoverOverSub = false}
	>
		<h2>skills</h2>
	</article>


	<!-- interests -->
	<article
		class="sub"
		on:mouseenter={() => hoverOverSub = true}
		on:mouseleave={() => hoverOverSub = false}
	>
		<h2>interests</h2>
	</article>

	<!-- work experience -->
	<article
		class="sub"
		on:mouseenter={() => hoverOverSub = true}
		on:mouseleave={() => hoverOverSub = false}
	>
		<h2>work Experience</h2>
	</article>
</div>


<style>
    .container {
				margin: auto;
				width: 66%;
				background: var(--dark-gray);

				--normal-size: 400px;
				--hidden-size: auto;
    }

		.container * {
				margin: 0;
		}

    .sub{
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

		/*.base *{
        color: var(--dark-red-5);

		}*/


</style>


<!--
<h1>skills</h1>
<div>

</div>
<h1>Welcome to AboutMe</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
-->
