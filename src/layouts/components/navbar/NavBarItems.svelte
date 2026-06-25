<script lang="ts">
  import { navBarItemsList } from "@/layouts/data/NavBarItemsList";

  interface Props {
    isScrolled: boolean;
  }

  let { isScrolled }: Props = $props();
</script>

<ol
  class={[
    "flex text-sm md:text-base transition-all duration-300 navbar-link",
    isScrolled ? "gap-4 md:gap-8" : "gap-8 md:gap-16"
  ]}
>
  {#each navBarItemsList as {id, label}}
    <li>
      <a class="hover:text-sky-300 focusable-item" href={`#${id}`}>
        {label}
      </a>
    </li>
  {/each}
</ol>
