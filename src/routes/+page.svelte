<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import About from "$lib/components/About.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import { onMount } from "svelte";

  onMount(() => {
    if ($page.url.hash === "") {
      goto("#about");
    }
  });
</script>

<NavBar />

{#if $page.url.hash === "#about"}
  <About />
{:else if $page.url.hash === "#screenshots"}
  <Carousel />
{/if}
