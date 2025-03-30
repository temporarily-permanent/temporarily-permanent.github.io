<script lang="ts">
	import '$lib/styles/Global.css';

	import Header from "$lib/components/Header.svelte";


	let { children } = $props();
</script>

<Header />
{@render children()}
