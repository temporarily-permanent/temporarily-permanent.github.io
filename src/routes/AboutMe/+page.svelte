<script lang="ts">
	import { aboutMeData, socialsData } from '$lib/data/content_options.js';

	let selected = 0;

	let hoverOverSub = false;
	function activateByKey(event: KeyboardEvent, idx: number) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			selected = idx;
		}
	}

</script>

<svelte:head>
	<title>About Me - Jannes Veuger</title>
</svelte:head>

<div class="container">

	<article
		role="button"
		tabindex="0"
		on:click={() => selected = 0}
		on:keydown={(e) => activateByKey(e, 0)}
		class=" {selected === 0 ? 'selected' : 'not-selected'} clickable"
	>
			<h3>{aboutMeData.openBracket}<br>{aboutMeData.name}<br>{aboutMeData.psudo_name}<br>{aboutMeData.closedBracket}</h3>
		<div class="hide {selected === 0 ? 'selected' : 'not-selected'}">
			<p><br>{aboutMeData.introduction}<br></p>
			<p><br>{aboutMeData.introduction_continuation}</p>
<div class="centered">
			<a href="{socialsData.github.url}"><img src="git-icon-link-aboutme.png" class="icon" alt="Icon 1"></a>

			<a href="{socialsData.linkedin.url}"><img src="linkedin-icon-link-aboutme.png" class="icon" alt="Icon 2"></a>

			<a href="mailto:37171"><img src="mailto-icon.png" class="icon" alt="Icon 3"></a>
			<a href="/New_Resume.pdf" target="_blank" rel="noopener"><img src="cv-icon-link-aboutme.png" class="icon" alt="Icon 3"></a>
		</div>
		</div>
	</article>

	<article
		role="button"
		tabindex="0"
		on:click={() => selected = 1}
		on:keydown={(e) => activateByKey(e, 1)}
		class=" {selected === 1 ? 'selected' : 'not-selected'} clickable"
	>
	<!-- content --><h2 class="clickable {selected === 1 ? 'selected' : 'not-selected'}">{aboutMeData.items[0]}</h2>
	<div class=" {selected === 1 ? 'selected' : 'not-selected'}">
		<p class="">other</p>
	</div>
</article>

<article
	role="button"
	tabindex="0"
	on:click={() => selected = 2}
	on:keydown={(e) => activateByKey(e, 2)}
	class=" {selected === 2 ? 'selected' : 'not-selected'} clickable"
>
	<!-- content --><h2 class="test_override_root_color">test</h2>
	<div class="{selected === 2 ? 'selected' : 'not-selected'}"></div>
</article>

<article
	role="button"
	tabindex="0"
	on:click={() => selected = 3}
	on:keydown={(e) => activateByKey(e, 3)}
	class=" {selected === 3 ? 'selected' : 'not-selected'} clickable"
>
	<!-- content --><h2>test</h2>
	<div class="{selected === 3 ? 'selected' : 'not-selected'}"></div>
</article>




<!--
fun things and facts learnt during development of site'

 thanks copilot, but you're getting in the way
- svelte transitions can be customized with css function that takes in time and progress
- svelte transitions can be used in if blocks
- svelte stores can be used to share state between components
- sveltekit routing is file based and dynamic routes can be made with [param]
- sveltekit has a built in way to handle 404 errors with the error function from @sveltejs/kit
- sveltekit has a built in way to handle metadata with the svelte:head tag
- sveltekit has a built in way to handle paths with the $app/paths module
- sveltekit has a built in way to handle state with the $app/state module
- sveltekit has a built in way to handle server side rendering with the load function in +page.js files
- sveltekit has a built in way to handle actions with the actions function in +page.js files
- sveltekit has a built in way to handle forms with the form action in +page.js files
- sveltekit has a built in way to handle cookies with the cookies function in +page.js files
- sveltekit has a built in way to handle sessions with the session function in +page.js files
- sveltekit has a built in way to handle authentication with the hooks function in +layout.js <files></files>-->














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
		.test_override_root_color {
				color : var(--dev-pink);
    }

    * {
        text-align: justify;
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

    h3{
				font-size: 1.4em;
				white-space: pre;
		}

    :focus { outline: 3px solid Highlight; outline-offset: 2px; }
		/*
    .selected { border-color: var(--dark-red-5); }*/

		.selected {/*
				color: var(--dark-red-5);*/
		}

		.not-selected.clickable {
        color: var(--dark-red-14);
        text-decoration: underline;
        text-decoration-color: var(--dark-red-14);
        text-decoration-thickness: 2px;
        text-underline-offset: 0.2rem;
		}

    article.selected {
        padding: 20px;

        border: 30px var(--dark-red) solid;
    }
		article.not-selected {
				padding: 10px;
				border: 30px var(--dark-red-2) solid;
    }
		article.not-selected:hover {
				border: 30px var(--dark-red-5) solid;
				color: var(--dark-red-5);
		}
		.hide.not-selected {
				pointer-events: none;
				font-size: 0px;
				height: 0px;
				width: 0px;
				opacity: 0;
		}
		.hide.selected {
				opacity: 1;
				transition: opacity .5s ease;
		}
		/*.clickable.not-selected {
				cursor: pointer;
        color: var(--dark-red-14) !important;
        text-decoration: underline;
        text-decoration-color: var(--dark-red-14);
        text-underline-offset: 0.2rem;
		}*/

    .sub{
        height: var(--hidden-size);
        color: var(--dark-red-8);
        border: 30px var(--dark-red-2) solid;
        padding: 20px;
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
