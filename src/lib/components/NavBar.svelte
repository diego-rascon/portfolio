<script>
	import { onMount } from 'svelte';

	let isScrolled = $state(false);

	const handleScroll = () => {
		isScrolled = window.scrollY > 0;
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		handleScroll();

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	const navItems = [
		{
			id: 'about',
			label: 'About'
		},
		{
			id: 'experience',
			label: 'Experience'
		},
		{
			id: 'skills',
			label: 'Skills'
		},
		{
			id: 'certifications',
			label: 'Certifications'
		}
	];
</script>

<header class="fixed w-full">
	<div class="container mx-auto">
		<nav
			class={[
				'my-4 flex justify-between border-slate-500/0 transition-all duration-300 ease-in-out',
				isScrolled && 'rounded-full border border-slate-500 p-4 backdrop-blur-md'
			]}
		>
			<span>Diego Rascón</span>
			<ol class="flex gap-8">
				{#each navItems as navItem (navItem.id)}
					<li><a href={`#${navItem.id}`}>{navItem.label}</a></li>
				{/each}
			</ol>
		</nav>
	</div>
</header>
