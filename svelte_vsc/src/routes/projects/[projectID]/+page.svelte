
<script>
	import { portfolioData } from '$lib/data/content_options.js';
	import { page } from '$app/state';
	import { error } from '@sveltejs/kit';
	console.log(page.data)
	let index = $state(page.url.pathname.split('/').at(-1));

	// check whether given path matches with a project in portfolioData
	let currentItem ;
	try {
		 currentItem = portfolioData.projects[Number(index)]}
	catch (err) {
		throw error(404, "Invalid Route");
	}
</script>

{#each currentItem.content as contentItem}

{/each}

<style>
</style>