<script lang="ts">
  import NavBarContainer from "@/layouts/components/navbar/NavBarContainer.svelte";
  import NavBarTitle from "@/layouts/components/navbar/NavBarTitle.svelte";
  import NavBarAction from "@/layouts/components/navbar/NavBarAction.svelte";
  import NavBarItems from "@/layouts/components/navbar/NavBarItems.svelte";

  let scrollY = $state(0);
  let isScrolled = $derived(scrollY > 0);
</script>

<svelte:window bind:scrollY/>

<NavBarContainer {isScrolled}>
  <NavBarTitle {isScrolled} />
  <NavBarItems {isScrolled} />
  <NavBarAction {isScrolled} />
</NavBarContainer>
