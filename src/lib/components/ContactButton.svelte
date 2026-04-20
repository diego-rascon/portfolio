<script module lang="ts">
	import Icon from '@iconify/svelte';

	export interface ContactButtonProps {
		icon: string;
		href: string;
	}
</script>

<script lang="ts">
	let { icon, href }: ContactButtonProps = $props();
</script>

<li class="flex">
	<a
		{href}
		aria-label="linkedin"
		rel="external"
		target="_blank"
		class="transition-colors duration-300 hover:text-sky-300"
		><Icon {icon} width="24" height="24" /></a
	>
</li>
