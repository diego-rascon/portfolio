<script lang="ts">
  import Icon from "@/components/Icon.svelte";
  import { navBarItems } from "@/layouts/data/NavBarItems";

  let isScrolled = $state(false);

  function handleScroll() {
    isScrolled = window.scrollY > 0;
  }
</script>

<svelte:window onscroll={handleScroll}/>

<header class="z-10 fixed px-4 w-full">
  <nav
    class={[
      "flex mx-auto px-6 py-4 border-t rounded-full max-w-4xl font-semibold transition-all duration-300 navbar container",
      isScrolled ? "border-slate-700 shadow-lg backdrop-blur bg-slate-800/80 my-4 text-slate-300" : "my-8 md:my-12 text-slate-400 bg-slate-800/0 border-slate-700/0"
    ]}
  >
    <div class="flex justify-center md:justify-between w-full">
      <a
        class={[
          "hidden invisible md:block opacity-0 rounded-full hover:text-sky-300 focusable-item",
          isScrolled && "visible opacity-100",
        ]}
        href="#home">Diego Rascón</a
      >
      <ol
        class={[
          "flex text-sm md:text-base transition-all duration-300 navbar-link",
          isScrolled ? "gap-4 md:gap-8" : "gap-8 md:gap-16"
        ]}
      >
        {#each navBarItems as {id, label}}
          <li>
            <a class="hover:text-sky-300 focusable-item" href={`#${id}`}>
              {label}
            </a>
          </li>
        {/each}
      </ol>
      <a
        href="/documents/resume.pdf"
        download="diego_rascon_resume.pdf"
        class={[
          "hidden invisible md:flex gap-2 opacity-0 rounded-full hover:text-sky-300 focusable-item",
          isScrolled && "visible opacity-100",
        ]}
      >
        <Icon name="download" class="h-5" />
        <span>Resume</span>
      </a>
    </div>
  </nav>
</header>
