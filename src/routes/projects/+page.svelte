<script lang="ts">
	import { projects } from '$lib/projects';
</script>

<h1>Projects</h1>

<ul class="grid">
	{#each projects as p}
		<li class="card">
			<h3><a href={p.link ?? '#'}>{p.title}</a></h3>
			<p class="desc">{p.desc}</p>
			{#if p.tech}
				<p class="meta">Tech: {p.tech}</p>
			{/if}
		</li>
	{/each}
</ul>

<style>
	.grid {
		list-style: none;
		padding: 0;
		margin: 1rem 0 0 0;
		display: grid;
		gap: 1rem;
	}
	.card {
		padding: 1rem;
		border: 1px solid #eef2f6;
		border-radius: 8px;
	}
	.desc {
		margin: 0.5rem 0 0 0;
		color: #374151;
	}
	.meta {
		margin-top: 0.5rem;
		font-size: 0.9rem;
		color: #6b7280;
	}
	a {
		color: #0b4dd8;
		text-decoration: none;
	}
</style>

