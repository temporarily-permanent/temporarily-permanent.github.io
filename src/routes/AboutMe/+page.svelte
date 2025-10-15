<script>
	import { onMount } from 'svelte';
	import { aboutMeData } from '$lib/data/content_options.js';
	let selected = 0;

	let hoverOverSub = false;

</script>

<svelte:head>
	<title>About Me - Jannes Veuger</title>
</svelte:head>

<div class="container">

	<article>

	</article>




















	<!-- introduction -->
	<article
		class="base {hoverOverSub ? 'hidden' : ''}"
		style="min-height: {hoverOverSub ? 'var(--hidden-size)':'var(--normal-size)'}"
	>
		<h3> {aboutMeData.openBracket}<br>{aboutMeData.name}<br>{aboutMeData.psudo_name}<br>{aboutMeData.closedBracket}</h3><!--dont look at this war crime-->
		<p><br>{aboutMeData.introduction}<br></p>
		<p><br>{aboutMeData.introduction_continuation}</p>
	</article>

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
		h3{
				font-size: 1.4em;
		}
    .container {
				margin: auto;
				width: 70%;
				background: var(--dark-blue-1);

				--normal-size: 400px;
				--hidden-size: auto;
    }

		.container * {
				margin: 0;
		}

    .sub{
        height: var(--hidden-size);
        color: var(--dark-red-8);
        border: 30px var(--dark-red-2) solid;
				transition: height 2s ease;
    }

		.sub:hover {
				height: var(--normal-size);
		}

    .base {
				padding: 20px;
        min-height: var(--normal-size);
        color: var(--dark-red-4);
				border: 30px var(--dark-red) solid;
        transition: height 2s;
        overflow: auto;
    }

		.selected {
				border: 30px var(--dark-red) solid;
				color: var(--dark-red-5);
		}

    .link{
        color: var(--dark-red-14);
        text-decoration: underline;
        text-decoration-color: var(--dark-red-14);
        text-decoration-thickness: 2px;
        text-underline-offset: 0.2rem;
    }
</style>


<!--
<h1>skills</h1>
<div>

</div>
<h1>Welcome to AboutMe</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
-->
