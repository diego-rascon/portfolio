<script module lang="ts">
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
		><span class={`icon-[${icon}]`}></span></a
	>
</li>
