<script>
	import ProfilePicture from '$lib/assets/images/profile-picture.jpg';
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
	</div>
	<enhanced:img
		src={ProfilePicture}
		alt="Profile picture"
		class="size-64 rounded-2xl object-cover shadow-2xl md:my-48 md:size-80"
	/>
</section>
