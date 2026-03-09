<script lang="ts">
	import NavBarItem, { type NavBarItemProps } from '$lib/components/layout/NavBarItem.svelte';
	import { House, Info } from '@lucide/svelte';

	const tabs: NavBarItemProps[] = [
		{ id: 'home', label: 'Home', icon: House },
		{ id: 'about', label: 'About', icon: Info }
	];
</script>

<div class="fixed bottom-0 left-0 w-full p-4 md:hidden">
	<nav>
		<ul class="flex bg-slate-300">
			{#each tabs as tab (tab.id)}
				<NavBarItem {...tab} />
			{/each}
		</ul>
	</nav>
</div>
