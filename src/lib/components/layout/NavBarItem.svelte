<script module lang="ts">
	import { type IconProps } from '@lucide/svelte';
	import type { Component } from 'svelte';

	export interface NavBarItemProps {
		id: string;
		label: string;
		icon: Component<IconProps>;
	}
</script>

<script lang="ts">
	let { id, label, icon: Icon }: NavBarItemProps = $props();
</script>

<li class="flex-1">
	<a href={`#${id}`}>
		<p>{label}</p>
		<Icon />
	</a>
</li>
