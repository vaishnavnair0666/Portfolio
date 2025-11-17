<script lang="ts">
	export let data: {
		project: { id: string; title: string; desc: string; tech?: string; link?: string };
	};
	const p = data.project;
</script>

<article>
	<h1>{p.title}</h1>
	<p class="desc">{p.desc}</p>
	{#if p.tech}
		<p class="meta">Tech: {p.tech}</p>
	{/if}

	{#if p.link && p.link.startsWith('http')}
		<p><a href={p.link} target="_blank" rel="noopener">External link</a></p>
	{/if}
</article>

<style>
	h1 {
		margin-bottom: 0.25rem;
	}
	.desc {
		color: #374151;
	}
	.meta {
		color: #6b7280;
		margin-top: 0.5rem;
	}
</style>
