<script>
	import {page} from '$app/state';
	import projects from '$lib/json/projects.json'
	// import bootstrap
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
	// import all assets
	// find list of all projects
	import {portfolioData} from '$lib/json/content_options.js'

	import Article from '$lib/components/Article.svelte'
	import ProjectPreview from '$lib/components/ProjectPreview.svelte';

</script>

<!--use bootstrap to loop through list of projects-->
<Container>
	<Row>
		{#each portfolioData.projects as projectItem, i}
			<Col>
<!--				asdhsdghbjksdfjksdfbnkmasdfn-->
				<ProjectPreview
					title 			= {projectItem.title}
					description = {projectItem.description}
					image 			=	{projectItem.image}
					path 				=	{page.url.toString()}
				/>
<!--				<Article  title={projectItem.title} content={projectItem.image} />-->
<!--				<p>{projectItem.title}</p>-->
			</Col>
		{/each}
	</Row>
</Container>

<!--use article component to show project -->



{#each Object.entries(projects) as [key, value]}
	<p>{key}: {value}</p>
{/each}

<style>
</style>
