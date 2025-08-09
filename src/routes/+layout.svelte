<script lang="ts">
	import '$lib/styles/Global.css';
	import Header from "$lib/components/Header.svelte";
    import {dev} from "$app/environment";

	let { children } = $props();

</script>

<svelte:head>
    <link rel="icon" href="{dev ? '/faviconDEV.png' : 'favicon.png'}" />
</svelte:head>

<Header />
<!--set sizing of page here-->
<div class="page-content">
{@render children()}
</div>