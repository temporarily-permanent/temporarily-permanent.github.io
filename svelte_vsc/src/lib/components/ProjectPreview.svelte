<script>
	import { Image } from '@sveltestrap/sveltestrap';

	export let title = "";
	export let description = "";
	export let image = "";
	export let path = "";
</script>

<a class="test" href={path}>
	<div class="container">
		<img src={image} alt="">
		<div class="text">
			<h2 class="title hide-on-hover">{title}</h2>
			<p class="show-on-hover">{description}</p>
		</div>
	</div>
</a>

<style>
	img{
			height: 100px;
			width: auto;
	}

	.container {
			outline: var(--dark-red-3) solid 5px;
			margin: auto;
			display: flex;
			flex-direction: row-reverse ;
	}


  .container .show-on-hover {
			height: 0;
      opacity: 0;
			transition: height 0.5s;
			transition: opacity 0.5s;
  }
  .container:hover .show-on-hover {
			height: 200px;
      opacity: 1;
  }

	.container .hide-on-hover {
			font-size: 1.5rem;
			transition: font-size 0.5s;
			color: var(--dark-red-14);
			margin: auto;
			text-align: center;
	}
	.container:hover .hide-on-hover {
			font-size: 1rem;
	}

</style>