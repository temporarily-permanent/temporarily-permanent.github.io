<script src="../json/content_fuck_name.js"></script>
<script>
	//import CustomSelect from '$lib/components/CustomSelect.svelte';
	import socials from '$lib/json/content_fuck_name.js';
		let data = [
		{ type : 0, ref: 'AboutMe', text: 'About Me' },
		{ type : 0, ref: 'ColorPalette', text: 'Color Palette' },
		{ type : 0, ref: 'Projects', text: 'Projects' },
		{ type : 0, ref: 'Pitch',text: 'pitch'},
		{ type : 0, ref: 'ContactMe', text: 'Contact Me' },
	];

</script>

<header>
	{#each data as item,i}

		{#if item.type === 0}
			<a class="item" href={item.ref}>
				{item.text}
			</a>

		{:else if item.type === 1}
			<!--<CustomSelect class="item"/>-->

		{/if}
		<!--{#if i !== data.length - 1}
			<div class="divider"></div>
		{/if}-->
	{/each}
</header>

<style>
    header{
				position: fixed;
				z-index: 5;
				padding: 5px 1rem;
				/*min-height: 60px;*/
				min-height: 15%;
				max-width: 600px;
        bottom: 1vh;
        left: 50%;
        transform: translate(-50%, -5%);
				border-radius: 5vh;
				/*border-radius: 110px 110px 0 0;*/
        outline: 2px solid black;
        display: flex;
        justify-content: space-around;
        flex-flow: row wrap;
        align-items: center;
				gap: 15px;
				font-size: 1vh;
		}



		.item{
        text-align-last: center;
				max-height: 80px;
				margin: auto;
        text-decoration: none;
        /*font-size: 1.5rem;*/
				font-size: calc(1vw + 2vh - 5px);
        font-weight: 600;
		}

		/*.item:not(:last-child) {
				border-right: 2px solid var(--dark-red-14);
		}*/
		.item:hover{
				color: var(--dark-red-14);
				text-decoration: underline;
				text-decoration-color: var(--dark-red-14);
				text-decoration-thickness: 2px;
				text-underline-offset: 0.2rem;
		}

    .divider{
        width: 2px;
        height: 10vh;
        background-color: black;
        color: white;
    }

    /*not(:last-child) {
			border-bottom: 2px solid black;
			padding-bottom: 10px; /* Adjust the spacing as needed
				margin-bottom: 10px; /* Adjust the spacing as needed

						box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
								 transition: all 0.3s ease-in-out;
				}*/
		/*
				padding: 0.5rem 1rem;
				border-radius: 0.5rem;
				transition: all 0.3s ease-in-out;*/
</style>