<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children, data } = $props();
	import { page } from '$app/state';

	let path = $derived(() => page.url.pathname);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="nav">
	<a class:active={path() === '/'} href="/">Home</a>
	<a class:active={path().startsWith('/projects')} href="/projects">Projects</a>
	<a class:active={path().startsWith('/about')} href="/about">About</a>
	<a class="cta" href="mailto:vaishnavnair0666@gmail.com">Contact</a>
</nav>
<main>
	{@render children()}
</main>

<footer>
	<small>© {new Date().getFullYear()} — Vaishnav Nair</small>
</footer>

<style>
	:global(html, body) {
		height: 100%;
		margin: 0;
		font-family:
			Inter,
			system-ui,
			-apple-system,
			'Segoe UI',
			Roboto,
			'Helvetica Neue',
			Arial;
		color: #0f172a;
	}
	.nav {
		display: flex;
		gap: 1rem;
		align-items: center;
		padding: 1rem 2rem;
		background: #f8fafc;
		box-shadow: 0 1px 0 rgba(0, 0, 0, 0.04);
	}
	.nav a {
		text-decoration: none;
		color: inherit;
		padding: 0.35rem 0.5rem;
		border-radius: 6px;
	}
	.nav a.active {
		font-weight: 600;
		background: #e6eefc;
	}
	.nav .cta {
		margin-left: auto;
		background: #0b74ff;
		color: #fff;
		padding: 0.45rem 0.8rem;
	}
	main {
		max-width: 980px;
		margin: 2.25rem auto;
		padding: 0 1rem;
	}
	footer {
		text-align: center;
		padding: 1.25rem 0;
		color: #6b7280;
	}
</style>
