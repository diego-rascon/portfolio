<script lang="ts">
  import { onMount } from "svelte";

  let coords = $state({ x: 0, y: 0 });
  let reducedMotion = $state(false);

  function handleMouseMove(e: MouseEvent) {
    if (reducedMotion) return;
    coords = { x: e.clientX, y: e.clientY };
  }

  onMount(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion = mq.matches;

    const handler = (e: MediaQueryListEvent) => (reducedMotion = e.matches);
    mq.addEventListener("change", handler);

    return () => mq.removeEventListener("change", handler);
  });
</script>

<svelte:window onmousemove={handleMouseMove} />

<div
  class="-z-10 fixed inset-0 pointer-events-none invisible md:visible"
  style:background="radial-gradient(600px at {coords.x}px {coords.y}px, rgba(29,
  78, 216, 0.10), transparent 80%)"
></div>
