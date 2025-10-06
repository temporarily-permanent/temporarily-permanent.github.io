<script>
	import {page} from '$app/state';
	import projects from '$lib/data/projects.json'
	// import bootstrap
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
	// import all assets
	// find list of all projects
	import {portfolioData, archiveMetaData} from '$lib/data/content_options.js'
	import ProjectPreview from '$lib/components/ProjectPreview.svelte';
</script>

<!--make accordion style showcase-->
<!--make details uncover on hover-->

<svelte:head>
	<title>overview - temporarily permanent</title>
</svelte:head>


<!--use bootstrap to loop through list of projects-->
<Container>
	<h2>Projects</h2>
	<Row>
		{#each portfolioData.projects as projectItem, i}
			<Col>
				<ProjectPreview
					title 			= {projectItem.title}
					description = {projectItem.description}
					image 			=	{projectItem.image}
					path 				=	{page.url.toString() + "/" + i}
				/>
			</Col>
		{/each}
	</Row>
</Container>



<!--use article component to show project -->
<h2>things i wrote down during dev process of site</h2>
<p>This site uses youtube embed, i haven't so far been able to prevent error code 153. <br/>Any help would be appreciated</p>
{#each Object.entries(archiveMetaData) as [key, value]}
	<a href="{value}">{key}<br/></a>
{/each}



<!--
{#each Object.entries(projects) as [key, value]}
	<p>{key}: {value}</p>
{/each}
-->

<style>
	.preview{

	}
</style>
