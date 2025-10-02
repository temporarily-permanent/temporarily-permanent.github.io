
<script>
	import { portfolioData } from '$lib/data/content_options.js';
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';

	// get selected path from pathname
	let index = page.url.pathname.split('/').at(-1);

	// check whether given path matches with a project in portfolioData
	let currentItem;
	try {
		 currentItem = portfolioData.projects[Number(index)]}
	catch {
		throw error(404, "Invalid Route");
	}
</script>

<svelte:head>
	<title>{currentItem.title}</title>
</svelte:head>

{#each currentItem.content as contentItem}
	<!--0 - header text-->
	{#if contentItem.type === 0}
		<h2 class="headerText">{contentItem.content}</h2>

	<!--1 - normal text-->
	{:else if contentItem.type === 1}
		<p>{contentItem.content}</p>

	<!--2 - image-->
	{:else if contentItem.type === 2}
		{#if Object.hasOwn(contentItem, "url")}
			<a href="{contentItem.url}" target="_blank">
				<img src={'/' + contentItem.content} alt="link to external site" />
			</a>
		{:else }
			<img class="width-100" src={'/' + contentItem.content} alt="something went wrong" />
		{/if}

	<!--intro card-->
	{:else if contentItem.type === 3}
		<iframe
			width="528" height="297" src="https://www.youtube-nocookie.com/embed/{contentItem.video_id}?autoplay=1"
			title="YouTube video player" frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
	{/if}

{/each}


<style>
	width-100 {
		width: 100%;
	}
</style>