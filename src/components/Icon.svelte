<script lang="ts">
  let { name, class: className = '' }: { name: string; class?: string } = $props();

  const icons = import.meta.glob('/src/assets/icons/*.svg', {
    query: '?raw',
    import: 'default',
    eager: true,
  }) as Record<string, string>;

  const svg = $derived(
    className
      ? (icons[`/src/assets/icons/${name}.svg`] ?? '').replace('<svg', `<svg class="${className}"`)
      : (icons[`/src/assets/icons/${name}.svg`] ?? '')
  );
</script>

{@html svg}
