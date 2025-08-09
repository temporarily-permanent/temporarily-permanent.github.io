
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
			<img src={'/' + contentItem.content} alt="something went wrong" />
		{/if}

	<!--intro card-->
	{:else if contentItem.type === 3}
		<div class="introCard">
		</div>
	{/if}

{/each}


<style>
</style>