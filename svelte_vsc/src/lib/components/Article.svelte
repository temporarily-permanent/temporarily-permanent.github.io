<script>
	export let title = "";
	export let content = "";
	export let direction = "left";
	export let image = null;

	export let style = "";
	export let titleStyle = "";
	export let contentStyle = "";
</script>

<div class="article fade-slide-blur {direction}" {style}>
	<div>
		<h2 style={titleStyle}>{title}</h2>
		<p style={contentStyle}>{content}</p>
	</div>

	{#if image}
		<img alt="article pic" src={image}/>
	{/if}
</div>

<style>
    .article {
        padding: 25px;
        --direction: 0;
    }

    .article.left {
        --direction: translateX(-50px);
        border-left: 1px solid white;

        & h2::first-letter {
            margin-left: -0.05em;
        }
    }

    .article.right {
        --direction: translateX(50px);
        border-right: 1px solid white;
        text-align: end;
    }

    h2 {
        margin: 0;
        font-family: sans-serif;
    }

    p {
        margin: 0;
        font-weight: 350;
        font-size: 1.2rem;
    }

    img {
        height: 100%;
    }
</style>