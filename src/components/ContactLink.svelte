<script lang="ts">
  let { children, href } = $props();
</script>

<a target="_blank" {href}>
  {@render children?.()}
</a>

<style>
  a {
    flex: 1 1 0;
    padding: 0.8rem 1.6rem;
    text-decoration: none;
    background-color: transparent;
    border: 1px solid #01295f;
    transition:
      color 300ms,
      background-color 300ms,
      border-color 300ms;
  }

  a:hover {
    color: #f4eded;
    background-color: #01295f;
    border-color: #01295f;
  }
</style>
