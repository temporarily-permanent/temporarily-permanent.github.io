<script>
	import { Image } from '@sveltestrap/sveltestrap';

	export let title = "";
	export let description = "";
	export let image = "";
	export let path = "";
</script>


<div class="container">
	<a class="test" href={path}>link test
		<img src={image} alt="">
	</a>
	<h2 class="title">{title}</h2>
	<p class="show-on-hover">{description}</p>

</div>

<style>
	.test {
			color: darkgreen;
	}
</style>