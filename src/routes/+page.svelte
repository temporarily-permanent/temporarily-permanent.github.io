<script>
    import {genericMetaData, portfolioData} from "$lib/data/content_options.js";
    import { elasticOut } from 'svelte/easing';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import {page} from '$app/state'

    let index = [0, 1];
    let showcaseProjects = [portfolioData.projects[index[0]], portfolioData.projects[index[1]]];

    let visible = $state(false);

    function spin(node, { duration }) {
        return {
            duration,
            css: (t, u) => {
                const eased = elasticOut(t);

                return `
					transform: scale(${eased}) rotate(${eased * 3 * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * u)}%,
						${Math.min(50, 500 * u)}%
					);`;
            }
        };
    }
</script>

<h2>
    <a>{genericMetaData.psudo_name}</a>
</h2>
<p class="text_centered">
    I'm a 22 year old software developer who is interested in the computationally low-level and the technically complex
   <!-- i'm a low level engineer and i like to figure stuff out.-->
</p>
<p class="text_centered">
    and i like to figure out mathematically complex problems -->

    <input type="checkbox" bind:checked={visible} />



</p>
<div class="checkbox-wrapper-22">
    <label class="switch" for="checkbox">
        <input type="checkbox" id="checkbox" />
        <div class="slider round"></div>
    </label>
</div>



<div class="centered flex-row">
    <ProjectCard>
        title={showcaseProjects[0].title}
        description={showcaseProjects[0].description}
        image={showcaseProjects[0].image}
        path={page.url.toString() + '/' + index[0]}
    </ProjectCard>
    {#if visible}
        <div
            class="centered-spinning"
            in:spin={{ duration: 8000 }}
            out:spin={{ duration: 8000 }}
        >
            <span>transitions!</span>
        </div>
    {/if}
    <ProjectCard>
        title={showcaseProjects[0].title}
        description={showcaseProjects[0].description}
        image={showcaseProjects[0].image}
        path={page.url.toString() + '/' + index[0]}
    </ProjectCard>
</div>

<style>
    h2 {
        text-align: center;
        font-size: 2em;
        letter-spacing: 15px;
    }
    .flex-row{
        display: flex;
        flex-direction: row;
    }

    .centered {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .centered-spinning{
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    span {
        position: absolute;
        transform: translate(-50%, -50%);
        font-size: 4em;
        color: unset;
    }

</style>
