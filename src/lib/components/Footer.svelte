<script module lang="ts">
	import type { ContactButtonProps } from './ContactButton.svelte';
	import ContactButton from './ContactButton.svelte';
	import FooterLink from './FooterLink.svelte';

	const contactButtons: ContactButtonProps[] = [
		{
			icon: 'lucide:mail',
			href: 'mailto:contact@drascon.com'
		},
		{
			icon: 'streamline-logos:linkedin-logo-block',
			href: 'https://www.linkedin.com/in/diegorascon'
		},
		{
			icon: 'streamline-logos:github-logo-2-solid',
			href: 'https://github.com/diego-rascon'
		}
	];
</script>

<footer class="m-4 flex items-end justify-between gap-12 text-gray-500">
	<p class="text-sm font-light">
		Coded on <FooterLink href="https://zed.dev/">Zed</FooterLink>. Built with
		<FooterLink href="https://svelte.dev/">SvelteKit</FooterLink>
		and
		<FooterLink href="https://tailwindcss.com/">TailwindCSS</FooterLink>. Hosted on
		<FooterLink href="https://www.cloudflare.com/">Cloudflare</FooterLink>.
	</p>
	<ul class="flex items-center justify-center gap-4 text-2xl **:flex md:gap-6">
		{#each contactButtons as { icon, href } (href)}
			<ContactButton {icon} {href} />
		{/each}
	</ul>
</footer>
