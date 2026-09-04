<script lang="ts">
  import Icon from "@/components/Icon.svelte";
  import { resumeFilename, resumeUrl } from "@/data/resume";

  interface Props {
    isScrolled: boolean;
  }

  let { isScrolled }: Props = $props();
</script>

<a
  href={resumeUrl}
  download={resumeFilename}
  class={[
    "hidden invisible md:flex gap-2 opacity-0 rounded-full hover:text-sky-300 focusable-item",
    isScrolled && "visible opacity-100",
  ]}
>
  <Icon name="download" class="h-5" />
  <span>Resume</span>
</a>
