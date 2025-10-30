<script>
	import {page} from '$app/state';
	// import bootstrap
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
	// import all assets
	// find list of all projects
	import {portfolioData, archiveMetaData} from '$lib/data/content_options.js'
	import ProjectCard from '$lib/components/ProjectCard.svelte';
</script>

<svelte:head>
	<title>overview - temporarily permanent</title>
</svelte:head>

<div class="projects-container">
	<h2>Projects</h2>

	<div class="projects-grid">
		{#each portfolioData.projects as projectItem, i}
			{#if projectItem.publish}
			<ProjectCard
					title={projectItem.title}
					description={projectItem.description}
					image={projectItem.image}
					path={page.url.toString() + "/" + i}
				/>
			{/if}
		{/each}
	</div>
</div>

<h2>Things I wrote down during the dev process of the site</h2>
<p>This site uses YouTube embed; I haven't so far been able to prevent error code 153. <br/>Any help would be appreciated.</p>
{#each Object.entries(archiveMetaData) as [key, value]}
	<a href="{value}">{key}<br/></a>
{/each}

<style>
	.projects-container {
		width: 100%;
		max-width: 1400px;
		margin: 0 auto;
		padding: 2rem 1rem;
	}

	h2 {
		margin-bottom: 2rem;
		font-size: 2rem;
	}

	.projects-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.5rem;
		margin-bottom: 4rem;
	}

	/* Tablet: 2 columns */
	@media (max-width: 1199px) {
		.projects-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	/* Mobile: 1 column */
	@media (max-width: 767px) {
		.projects-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
