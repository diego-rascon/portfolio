<script module lang="ts">
	import type { Snippet } from 'svelte';

	export interface ContactLinkProps {
		children: Snippet;
		href: string;
	}
</script>

<script lang="ts">
	let { children, href }: ContactLinkProps = $props();
</script>

<a target="_blank" {href} rel="external">
	{@render children?.()}
</a>

<style>
	a {
		flex: 1 1 0;
		padding: 0.8rem 1.6rem;
		text-decoration: none;
		background-color: transparent;
		border: 1px solid #01295f;
		transition:
			color 300ms,
			background-color 300ms,
			border-color 300ms;
	}

	a:hover {
		color: #f4eded;
		background-color: #01295f;
		border-color: #01295f;
	}
</style>
