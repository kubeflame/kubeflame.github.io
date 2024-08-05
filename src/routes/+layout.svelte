<script lang="ts">
  import { themeChange } from "theme-change";
  import { onMount } from "svelte";

  import "../app.css";

  onMount(() => themeChange());
</script>

<div class="h-screen w-screen pt-12 font-mono tracking-wide">
  <slot />
</div>
