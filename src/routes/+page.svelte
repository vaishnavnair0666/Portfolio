<script lang="ts">
	const hero = {
		name: 'Vaishnav Nair',
		role: 'Frontend Developer (Entry-Level)',
		pitch: 'I build some interesting magic'
	};
</script>

<section>
	<h1>{hero.name}</h1>
	<p class="muted">{hero.role}</p>
	<p>{hero.pitch}</p>

	<div class="actions">
		<a href="/projects" class="btn">View projects →</a>
		<a href="/about" class="btn ghost">About →</a>
	</div>
</section>

<style>
	h1 {
		font-size: 2rem;
		margin: 0 0 0.25rem;
	}
	.muted {
		color: #556;
		margin: 0 0 0.75rem;
	}
	.actions {
		margin-top: 1.25rem;
		display: flex;
		gap: 0.75rem;
	}
	.btn {
		text-decoration: none;
		padding: 0.5rem 0.8rem;
		border-radius: 6px;
		background: #0b74ff;
		color: #fff;
	}
	.btn.ghost {
		background: #eef2ff;
		color: #0b4dd8;
	}
</style>
