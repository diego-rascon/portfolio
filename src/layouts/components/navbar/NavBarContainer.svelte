<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    isScrolled: boolean;
  }

  let { children, isScrolled }: Props = $props();
</script>

<header class="z-10 fixed px-4 w-full">
  <nav
    class={[
      "flex justify-center md:justify-between mx-auto px-6 py-4 border-t rounded-full max-w-4xl font-semibold transition-all duration-300 navbar container",
      isScrolled ? "border-slate-700 shadow-lg backdrop-blur bg-slate-800/80 my-4 text-slate-300" : "my-8 md:my-12 text-slate-400 bg-slate-800/0 border-slate-700/0"
    ]}
  >
    {@render children()}
  </nav>
</header>
