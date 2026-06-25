<script lang="ts">
  import { navBarItemsList } from "@/layouts/data/NavBarItemsList";
    import { onMount } from "svelte";

  interface Props {
    isScrolled: boolean;
  }

  let { isScrolled }: Props = $props();
  let activeId = $state<string | null>(null);

  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);
        if (visible) activeId = visible.target.id;
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    navBarItemsList.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  });
</script>

<ol
  class={[
    "flex text-sm md:text-base transition-all duration-300 navbar-link",
    isScrolled ? "gap-4 md:gap-8" : "gap-8 md:gap-16",
  ]}
>
  {#each navBarItemsList as {id, label}}
    <li>
      <a class={isScrolled && activeId === id ? "pb-1 border-b-2 text-sky-300" : ""} href={`#${id}`}>
        {label}
      </a>
    </li>
  {/each}
</ol>
