<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import GlowWrapper from '$lib/components/GlowWrapper.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Diego Rascón</title>
	<meta
		name="description"
		content="Full-Stack Engineer focused on modern web and mobile development. I bridge the gap between elegant client-side experiences and high-performance server architectures."
	/>
	<meta
		name="keywords"
		content="Diego Rascón, Diego, Rascón, Engineer, Developer, Fullstack, Backend, Frontend, HTML, CSS, JavaScript, TypeScript, Java, React, Elixir, Spring, SQL, Docker, AWS, Svelte"
	/>
	<meta name="author" content="Diego Rascón" />
</svelte:head>

<GlowWrapper>
	{@render children()}
</GlowWrapper>
