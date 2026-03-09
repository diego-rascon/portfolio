<script>
	import ContactLink from '$lib/components/ContactLink.svelte';
</script>

<div
	class="h-screen w-screen place-content-center bg-[#f4eded] p-8 text-center font-[Lexend] *:text-[#01295f]"
>
	<header>
		<h1 class="mb-2 text-4xl font-semibold">Diego Rascón</h1>
		<p class="mb-6 text-xl font-light">Software Engineer</p>
	</header>
	<main>
		<div class="mx-auto mt-2 flex max-w-3xl flex-col justify-center gap-4 font-light md:flex-row">
			<ContactLink href="mailto:contact@drascon.com">contact@drascon.com</ContactLink>
			<ContactLink href="https://github.com/diego-rascon">GitHub</ContactLink>
			<ContactLink href="https://www.linkedin.com/in/diegorascon/">LinkedIn</ContactLink>
		</div>
	</main>
</div>
