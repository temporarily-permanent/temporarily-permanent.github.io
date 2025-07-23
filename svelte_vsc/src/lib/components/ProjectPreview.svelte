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
		<h2 class="title">{title}</h2>
		<p class="show-on-hover">{description}</p>
	</div>
</a>

<style>
	img{
			height: 100px;
			width: auto;
	}

	.test {
	}

	.container {
			outline: var(--dark-red-3) solid 5px;
			margin: 5px;
			display: flex;
			flex-direction: row-reverse ;
	}


  .container .show-on-hover {
			height: 0px;
			transition: height 0.5s;
  }
  .container:hover .show-on-hover {
			height: 200px;
  }

	.show-on-hover {
			height: var(--size-assdfsdfdfs);
	}

	.show-on-hover:hover {
			height: 30px;
	}

</style>