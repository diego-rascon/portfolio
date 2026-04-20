<script module lang="ts">
	export interface SkillTagProps {
		label: string;
		color: string;
	}
</script>

<script lang="ts">
	let { label, color }: SkillTagProps = $props();
</script>

<span class={color}>{label}</span>
