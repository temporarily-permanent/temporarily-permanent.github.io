<script>
	import projects from '$lib/json/projects.json'
</script>




<p class="funny">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend proident congue te consetetur deserunt zzril nulla aliquip suscipit. Molestie consequat eu. Eos consectetuer dignissim. Non dignissim sed praesent. Rebum eum ullamco. Sea ut qui exercitation facer congue. Elitr facilisis consetetur. Cillum delenit nihil, congue eros autem mazim stet enim option proident aliquip congue sanctus augue culpa erat velit exercitation sanctus clita excepteur consectetuer congue aliquam sed in tempor. Odio duo cillum pariatur liber iriure deserunt, cum exerci feugiat aliqua ullamco stet quod nobis luptatum imperdiet velit placerat id euismod consectetuer zzril iriure. Euismod reprehenderit ad doming. Exerci aliquip duis. Laboris justo tincidunt obcaecat dignissim nibh quod delenit illum molestie ullamco dolor cum option feugiat gubergren, cum nonumy aliquid mazim aliquam, sed no zzril aliquid quis nobis elitr takimata iriure lorem nonumy aliquyam. Autem duo liber sunt molestie. Facilisis rebum laboris quod. Feugiat pariatur, minim feugiat velit soluta commodi consectetur veniam soluta iure, feugait magna gubergren euismod hendrerit dolor sed placerat mollit sed non, volutpat culpa cupiditat voluptua gubergren.</p>

{#each Object.entries(projects) as [key, value]}
	<p>{key}: {value}</p>
{/each}

<style>
	p.funny{
			word-spacing: -50px;
	}
</style>
