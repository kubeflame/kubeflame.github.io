<script lang="ts">
  import { icons } from "$lib/utilities/icons";

  export let icon: keyof typeof icons;
  export let size: string = "size-6";
  export let classNames: string = "";
  export let viewBox: string = "0 0 24 24";
  export let strokeWidth: number = 1;
  export let stroke: string = "currentColor";
  export let fill: string = "none";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  {fill}
  {viewBox}
  stroke-width={strokeWidth}
  {stroke}
  class="{size} {classNames}"
>
  <path stroke-linecap="round" stroke-linejoin="round" d={icons[icon]} />
</svg>
