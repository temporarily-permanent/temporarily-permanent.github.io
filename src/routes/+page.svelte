<script>
    import {genericMetaData} from "$lib/data/content_options.js";
    import { elasticOut } from 'svelte/easing';

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
    <label>
    <input type="checkbox" bind:checked={visible} />
</label>
</p>



{#if visible}
    <div
      class="centered"
      in:spin={{ duration: 8000 }}
      out:spin={{ duration: 8000 }}
    >
        <span>transitions!</span>
    </div>
{/if}

<style>
    h2 {
        text-align: center;
        font-size: 2em;
        letter-spacing: 15px;
    }

    .centered {
        position: absolute;
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
