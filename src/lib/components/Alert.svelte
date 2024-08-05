<script lang="ts">
  import type { icons } from "$lib/utilities/icons";
  import SvgIcon from "./SvgIcon.svelte";

  export let icon: keyof typeof icons;
  export let iconClassNames: string = "";
  export let classNames: string = "";
  export let message: string;
</script>

<div role="alert" class="alert {classNames}">
  <SvgIcon {icon} classNames={iconClassNames} />
  <span>{message}</span>
</div>
