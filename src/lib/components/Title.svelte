<script module lang="ts">
	export interface TitleProps {
		label: string;
		id: string;
	}
</script>

<script lang="ts">
	let { label, id }: TitleProps = $props();
</script>

<h2 {id} class="mb-12 text-center text-3xl">{label}</h2>
