<script lang="ts">
  interface Props {
    isScrolled: boolean;
  }

  let { isScrolled }: Props = $props();
</script>

<a
  class={[
    "hidden invisible md:block opacity-0 rounded-full hover:text-sky-300 focusable-item",
    isScrolled && "visible opacity-100",
  ]}
  href="#home"
>
  Diego Rascón
</a>
