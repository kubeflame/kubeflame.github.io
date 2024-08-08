<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import About from "$lib/components/About.svelte";
  import Carousel from "$lib/components/Carousel.svelte";
  import NavBar from "$lib/components/NavBar.svelte";
  import InstallNotes from "$lib/components/InstallNotes.svelte";
  import { onMount } from "svelte";
  import { internalHrefs } from "$lib/utilities/util";

  onMount(() => {
    if ($page.url.hash === "") {
      goto(internalHrefs.about);
    }
  });
</script>

<NavBar />

{#if $page.url.hash === internalHrefs.about}
  <About />
{:else if $page.url.hash === internalHrefs.screenshots}
  <Carousel />
{:else if $page.url.hash === internalHrefs.installNotes}
  <InstallNotes />
{/if}
