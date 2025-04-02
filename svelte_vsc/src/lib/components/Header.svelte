<script>
	let data = [
		{ ref: 'AboutMe', text: 'About Me' },
		{ ref: 'ColorPalette', text: 'Color Palette' },
	];
</script>

<header>
	{#each data as item}
		<a href={item.ref}>
			{item.text}
		</a>
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