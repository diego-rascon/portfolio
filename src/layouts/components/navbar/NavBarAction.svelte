<script lang="ts">
  import Icon from "@/components/Icon.svelte";

  interface Props {
    isScrolled: boolean;
  }

  let { isScrolled }: Props = $props();
</script>

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
