<script>
	import projects from '$lib/json/projects.json'
	// import bootstrap
	import { Col, Container, Row } from '@sveltestrap/sveltestrap';
	// import all assets
	import portfolioData from '$lib/json/content_options.js'
	portfolioData.portfolioData
	// find list of all projects
</script>

<!--use bootstrap to loop through list of projects-->
<Container>
	<Row>
		{#each portfolioData.portfolioData.projects as projectItem}
			<Col>
				<p>{projectItem.title}</p>
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
