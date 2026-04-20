<script>
	let { href, children } = $props();
</script>

<a {href} class="font-bold" rel="external" target="_blank">{@render children()}</a>
