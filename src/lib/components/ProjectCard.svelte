<script>
	export let title = "";
	export let description = "";
	export let image = "";
	export let path = "";

	let isExpanded = false;
</script>

<a href={path} class="card" class:expanded={isExpanded}
   on:mouseenter={() => isExpanded = true}
   on:mouseleave={() => isExpanded = false}
   on:focus={() => isExpanded = true}
   on:blur={() => isExpanded = false}>

	<div class="card-image">
		{#if image}
			<img src={image} alt={title} loading="lazy" />
		{:else}
			<div class="placeholder-image">
				<span class="placeholder-text">No Image</span>
			</div>
		{/if}
	</div>

	<div class="card-content">
		<h3 class="card-title">{title}</h3>

		<div class="card-description">
			<p>{description}</p>
		</div>
	</div>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		overflow: hidden;
		transition: all 0.2s ease;
		cursor: pointer;
		text-decoration: none;
		box-shadow: 0 2px 12px rgba(0, 0, 0, 0.25);
		position: relative;
	}

	.card:hover,
	.card:focus {
		transform: translateY(-4px) scale(1.01);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
		border-color: rgba(255, 255, 255, 0.2);
	}

	.card:focus {
		outline: 2px solid var(--dark-red-8);
		outline-offset: 2px;
	}

	.card-image {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		background: rgba(0, 0, 0, 0.3);
		position: relative;
	}

	.card-image img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 0.3s ease, opacity 0.2s ease;
	}

	.card:hover .card-image img,
	.card.expanded .card-image img {
		transform: scale(1.05);
		opacity: 0.85;
	}

	.placeholder-image {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: linear-gradient(135deg, rgba(152, 16, 16, 0.2), rgba(182, 28, 28, 0.2));
	}

	.placeholder-text {
		color: var(--dark-red-14);
		font-size: 0.875rem;
		opacity: 0.6;
	}

	.card-content {
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		flex: 1;
	}

	.card-title {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--dark-red-14);
		margin: 0;
		line-height: 1.3;
		transition: font-size 0.2s ease, color 0.2s ease;
	}

	.card:hover .card-title,
	.card.expanded .card-title {
		color: var(--dark-red-16);
	}

	.card-description {
		max-height: 0;
		opacity: 0;
		overflow: hidden;
		transition: max-height 0.3s ease, opacity 0.25s ease;
	}

	.card:hover .card-description,
	.card.expanded .card-description {
		max-height: 200px;
		opacity: 1;
	}

	.card-description p {
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.5;
		color: var(--dark-red-12);
	}

	/* Mobile: tap-to-expand instead of hover */
	@media (max-width: 767px) {
		.card:hover {
			transform: none;
		}

		.card:active {
			transform: scale(0.98);
		}

		.card-description {
			max-height: 0;
			opacity: 0;
		}

		.card.expanded .card-description {
			max-height: 200px;
			opacity: 1;
		}
	}
</style>

