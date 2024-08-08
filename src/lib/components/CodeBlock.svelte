<script lang="ts">
  import { clipboard } from "@skeletonlabs/skeleton";
  import SvgIcon from "./SvgIcon.svelte";
  import type { CodeBlockData } from "$lib/global_types";

  export let classNames = "";
  export let codeData: CodeBlockData[];

  let copied = false;
  let activeTab = 0;

  function copyAction() {
    copied = true;
    setTimeout(() => (copied = false), 500);
  }
</script>

{#if codeData && codeData[0].tab}
  <div role="tablist" class="tabs tabs-bordered gap-x-2">
    {#each codeData as data, id}
      <button
        role="tab"
        class="tab mb-2 ml-2 px-0 text-nowrap hover:border-b-[0.2rem]
          {id === activeTab
          ? 'tab-active !border-primary'
          : '!border-base-300 hover:!border-primary'}"
        on:click={() => (activeTab = id)}
      >
        {data.tab}
      </button>

      <div
        role="tabpanel"
        class="tab-content col-span-12 max-w-full overflow-x-scroll bg-base-100
          shadow-md rounded-lg text-base-content border border-base-content/20
          {copied ? 'border-primary ' : ''} {classNames}"
      >
        <div class="flex text-sm py-3 px-4 text-start space-x-2">
          <div class="flex gap-2 w-full">
            <span class="flex items-start text-primary">$</span>
            <span class="items-center overflow-x-scroll">
              {data.code}
            </span>
          </div>
          <button
            class="absolute text-base-content cursor-pointer size-5
              hover:text-base-content/50 right-4
              {copied ? 'animate-ping' : ''}"
            use:clipboard={data.code}
            on:click={copyAction}
          >
            <SvgIcon
              icon={"clipboard"}
              size={"size-5"}
              classNames={copied ? "text-primary " : ""}
            />
          </button>
        </div>
      </div>
    {/each}
  </div>
{:else if codeData}
  <div>
    <div
      class="flex text-base-content border border-base-content/20
      bg-base-100 text-sm py-3 px-4 text-start
      rounded-lg shadow-md space-x-2
      {copied ? 'border-primary ' : ''} {classNames}"
    >
      <div class="flex gap-2 w-full">
        <span class="flex items-start text-primary">$</span>
        <span class="items-cente overflow-x-scroll">
          {codeData[0].code}
        </span>
      </div>
      <button
        class="absolute text-base-content cursor-pointer size-5
        hover:text-base-content/50 right-4
        {copied ? 'animate-ping' : ''}"
        use:clipboard={codeData[0].code}
        on:click={copyAction}
      >
        <SvgIcon
          icon={"clipboard"}
          size={"size-5"}
          classNames={copied ? "text-primary " : ""}
        />
      </button>
    </div>
  </div>
{/if}
