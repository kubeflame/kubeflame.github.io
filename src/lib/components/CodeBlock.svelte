<script lang="ts">
  import { clipboard } from "@skeletonlabs/skeleton";
  import SvgIcon from "./SvgIcon.svelte";

  export let codeData = "";
  export let classNames = "";

  let elem: Element;
</script>

<div
  class="flex items-center justify-between text-base-content border
    border-base-content/20 bg-base-100 max-w-sm font-mono text-sm py-3 px-4
    w-64 rounded-lg shadow-md tracking-wider {classNames}"
>
  <div class="flex gap-2">
    <span>$</span><span>{codeData}</span>
  </div>

  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <span
    bind:this={elem}
    class="flex text-base-content cursor-pointer w-5 h-5
      hover:text-base-content/50 duration-200 items-center"
    use:clipboard={codeData}
    on:mousedown={() => {
      elem.classList.add("animate-ping");
    }}
    on:mouseup={() => {
      elem.classList.remove("animate-ping");
    }}
  >
    <SvgIcon icon={"clipboard"} />
  </span>
</div>
