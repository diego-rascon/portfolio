<script>
	import ProfilePicture from '$lib/assets/images/profile-picture.jpg';
	import Icon from '@iconify/svelte';
</script>

<section
	class="mx-4 my-24 flex max-w-4xl flex-col-reverse items-center justify-center gap-8 md:mx-auto md:my-0 md:flex-row md:gap-18"
>
	<div>
		<h1 class="mb-6 text-4xl font-bold text-gray-300 md:text-5xl">Diego Rascón</h1>
		<p class="font-light text-gray-400 md:text-lg">
			Full-Stack Engineer focused on modern web and mobile development. I bridge the gap between
			elegant client-side experiences and high-performance server architectures.
		</p>
		<a
			rel="external"
			href="/resume.pdf"
			download="diego_rascon_resume.pdf"
			class="mt-4 flex items-center justify-center gap-2 justify-self-start rounded-lg border px-4 py-2 text-gray-300 transition-colors duration-300 hover:text-sky-300"
		>
			<Icon icon="lucide:download" width="20" height="20" />
			<span>Resume</span>
		</a>
	</div>
	<enhanced:img
		src={ProfilePicture}
		alt="Diego Rascón"
		class="size-64 rounded-2xl object-cover shadow-2xl md:my-48 md:size-80"
	/>
</section>
