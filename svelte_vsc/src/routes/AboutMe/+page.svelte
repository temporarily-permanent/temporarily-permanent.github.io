<script>
	import { onMount } from 'svelte';

	onMount(() => {
		document.title = 'About Me';
	});

	let data = [
		{ ref: 'AboutMe', text: 'About Me' },
		{ ref: 'ColorPalette', text: 'Color Palette' },
	];
</script>



<h1>skills</h1>
<div>

</div>
<h1>Welcome to AboutMe</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
