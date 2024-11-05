<script lang="ts">
  import { Video } from "flowbite-svelte";
  import SvgIcon from "./SvgIcon.svelte";
  import { fade } from "svelte/transition";
  import { expoInOut } from "svelte/easing";

  const titleClassNames =
    "flex drop-shadow-md gap-1 items-center justify-center";
  const videoClassNames =
    "w-4/5 h-4/5 items-center justify-center shadow-lg rounded-lg";
</script>

<div
  class="w-full lg:px-40 place-items-center space-y-10 pb-10"
  transition:fade={{ duration: 200, easing: expoInOut }}
>
  <div class="space-y-4 place-items-center">
    <div class="divider w-full">
      <p class={titleClassNames}>
        <SvgIcon icon={"at"} size={"size-5"} /> Dashboard
      </p>
    </div>

    <Video
      src="/src/static/dashboard_demo.mov"
      controls
      trackSrc="dashboard_demo.mov"
      class={videoClassNames}
    />
  </div>

  <div class="space-y-4 place-items-center">
    <div class="divider w-full">
      <p class={titleClassNames}>
        <SvgIcon icon={"at"} size={"size-5"} /> Pod actions
      </p>
    </div>

    <Video
      src="/src/static/pod_demo.mov"
      controls
      trackSrc="pod_demo.mov"
      class={videoClassNames}
    />
  </div>

  <div class="space-y-4 place-items-center">
    <div class="divider w-full">
      <p class={titleClassNames}>
        <SvgIcon icon={"at"} size={"size-5"} /> Helm
      </p>
    </div>

    <Video
      src="/src/static/helm_demo.mov"
      controls
      trackSrc="helm_demo.mov"
      class={videoClassNames}
    />
  </div>
</div>
