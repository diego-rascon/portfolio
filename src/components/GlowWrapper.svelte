<script lang="ts">
  let coords = $state({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent) {
    coords = { x: e.clientX, y: e.clientY };
  }
</script>

<svelte:window onmousemove={handleMouseMove} />

<div
  class="-z-10 fixed inset-0 pointer-events-none"
  style:background="radial-gradient(600px at {coords.x}px {coords.y}px, rgba(29,
  78, 216, 0.05), transparent 80%)"
></div>
