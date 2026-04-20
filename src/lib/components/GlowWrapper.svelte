<script lang="ts">
	let { children } = $props();

	let coords = $state({ x: 0, y: 0 });

	function handleMouseMove(e: MouseEvent) {
		coords = { x: e.clientX, y: e.clientY };
	}
</script>

<svelte:window onmousemove={handleMouseMove} />

<div class="relative min-h-screen overflow-hidden">
	<div
		class="pointer-events-none fixed inset-0 z-5 hidden transition-opacity duration-300 md:block"
		style:background="radial-gradient(600px at {coords.x}px {coords.y}px, rgba(29, 78, 216, 0.1),
		transparent 80%)"
	></div>

	<div class="relative z-10 container mx-auto flex h-screen flex-col">
		{@render children()}
	</div>
</div>
