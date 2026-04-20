<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';
	import GlowWrapper from '$lib/components/GlowWrapper.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<GlowWrapper>
	{@render children()}
</GlowWrapper>
