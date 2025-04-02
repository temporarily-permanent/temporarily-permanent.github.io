<script>
	import CustomSelect from '$lib/components/CustomSelect.svelte';

	let data = [
		{ type : 0, ref: 'AboutMe', text: 'About Me' },
		{ type : 0, ref: 'ColorPalette', text: 'Color Palette' },
	];
</script>

<header>
	{#each data as item}
		{#if item.type === 0}
			<a href={item.ref}>
				{item.text}
			</a>
		{:else if item.type === 1}
			<CustomSelect/>
		{/if}
	{/each}
</header>

<style>
    header{
				position: fixed;
				min-height: 60px;
				height: 15%;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, -5%);
        outline: 2px solid black;
				display: flex;
				flex-direction: row;
				justify-content: space-around;
		}
</style>