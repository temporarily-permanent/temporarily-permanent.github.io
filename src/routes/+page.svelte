<script>
    import {genericMetaData, portfolioData} from "$lib/data/content_options.js";
    import { elasticOut } from 'svelte/easing';
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import {page} from '$app/state'

    let index = [0, 1];
    let showcaseProjects = [portfolioData.projects[index[0]], portfolioData.projects[index[1]]];

    console.log(showcaseProjects[1]);

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
    and i like to figure out mathematically complex problems
</p>
<p class="text_centered">
    <label class="switch">
        <input type="checkbox" bind:checked={visible}>
        <span class="slider"></span>
    </label>
</p>

<div class="centered flex-row">
    <ProjectCard
        title={showcaseProjects[0].title}
        description={showcaseProjects[0].description}
        image={showcaseProjects[0].image}
        path={page.url.toString() + 'Projects/' + index[0]}
    />
    {#if visible}
        <div
            class="centered-spinning"
            in:spin={{ duration: 8000 }}
            out:spin={{ duration: 8000 }}
        >
            <span>transitions!</span>
        </div>
    {/if}
    <ProjectCard
        title={showcaseProjects[1].title}
        description={showcaseProjects[1].description}
        image={showcaseProjects[1].image}
        path={page.url.toString() + 'Projects/' + index[1]}
    />
</div>

<style>
    h2 {
        text-align: center;
        font-size: 2em;
        letter-spacing: 15px;
    }
    .flex-row{
        max-height: 40vh;
        display: flex;
        flex-direction: row;
        gap: 20px;
    }

    .centered {
        position: absolute;
        left: 50%;
        top: 55%;
        transform: translate(-50%, -40%);
    }

    .centered-spinning{
        position: relative;
        margin: auto 0;
    }

    span {/*
        position: absolute;*//*
        transform: translate(-50%, -50%);*/
        --span-font-size: 4em;
        font-size: var(--span-font-size);
        color: unset;
    }


    /*begin uiverse toggle*/

    /* From Uiverse.io by gharsh11032000 */
    /* The switch - the box around the slider */
    .switch {
        font-size: 17px;
        position: relative;
        display: inline-block;
        width: 3.5em;
        height: 2em;
    }

    /* Hide default HTML checkbox */
    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    /* The slider */
    .slider {
        position: absolute;
        cursor: pointer;
        inset: 0;
        background: #9fccfa;
        border-radius: 50px;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .slider:before {
        font-size: .25em !important;
        position: absolute;
        content: "";
        display: flex;
        align-items: center;
        justify-content: center;
        height: 2em;
        width: 2em;
        inset: 0;
        background-color: white;
        border-radius: 50px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.4);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    .switch input:checked + .slider {
        background: #0974f1;
    }

    .switch input:focus + .slider {
        box-shadow: 0 0 1px #0974f1;
    }

    .switch input:checked + .slider:before {
        transform: translateX(1.6em);
    }

    /*end uiverse toggle*/

</style>
