<script>
	import { Image } from '@sveltestrap/sveltestrap';

	export let title = "";
	export let description = "";
	export let image = "";
	export let path = "";
	console.log("rendered")
</script>
<div class="container">
	<img src={image} alt="">
	<h2 class="title">{title}</h2>
	<p class="show-on-hover">{description}</p>

</div>