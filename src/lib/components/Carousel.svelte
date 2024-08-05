<script lang="ts">
  import { expoInOut } from "svelte/easing";
  import { writable } from "svelte/store";
  import { fade } from "svelte/transition";

  const imageModules = import.meta.glob<string>(
    "$lib/assets/lutho/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp,svg}",
    {
      import: "default",
      eager: true,
    }
  );

  const images = Object.entries(imageModules).map((mod) => {
    return mod[1];
  });

  const offsetId = writable((v: number) => {
    return v + 1;
  });

  let currentId = 1;
  let activeImageModule = images[0];

  function on_key_down(event: KeyboardEvent) {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        if (currentId < images.length) {
          currentId++;
          activeImageModule = images[currentId - 1];
        } else {
          currentId = 1;
          activeImageModule = images[0];
        }
        break;
      case "ArrowLeft":
        event.preventDefault();
        if (currentId > 1) {
          currentId--;
          activeImageModule = images[currentId - 1];
        } else {
          currentId = images.length;
          activeImageModule = images.at(-1) as string;
        }
        break;
    }
  }
</script>

<svelte:window on:keydown={on_key_down} />

<div
  class="w-full h-full lg:px-40"
  transition:fade={{ duration: 200, easing: expoInOut }}
>
  <div class="carousel carousel-end w-full">
    <div class="carousel-item w-full transition-all duration-500 ease-in-out">
      <img
        src={activeImageModule}
        alt={activeImageModule.split("/").at(-1)}
        class="w-full rounded-lg"
      />
    </div>
  </div>

  <div class="flex w-full justify-center gap-2">
    {#each images as image, id}
      <button
        class="btn btn-sm hover:bg-primary {currentId === $offsetId(id)
          ? 'btn-active bg-primary'
          : ''}"
        on:click={() => {
          currentId = $offsetId(id);
          activeImageModule = image;
        }}
      >
        {$offsetId(id)}
      </button>
    {/each}
  </div>
</div>
