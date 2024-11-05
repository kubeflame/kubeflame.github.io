<script lang="ts">
  import { expoInOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import luthoSvg from "/src/static/lutho.svg?raw";
  import SvgIcon from "./SvgIcon.svelte";
  import Alert from "./Alert.svelte";
  import { externalLinks } from "$lib/utilities/util";
  import Demo from "./Demo.svelte";

  const anchorClassNames =
    "underline decoration-base-300 drop-shadow-sm hover:decoration-primary gap-1 items-center";

  const alertMessage =
    "At the moment the application is in ALPHA state, as such please use it against a test cluster, in order to prevent data loss from unforseen circumstances.";
</script>

<div
  class="hero bg-base-100 flex flex-col p-4 text-center pb-10"
  transition:fade={{ duration: 200, easing: expoInOut }}
>
  <div class="card bg-base-100 flex place-content-center mt-4 w-full lg:w-3/5">
    <Alert
      icon={"warn"}
      iconClassNames={"text-warning"}
      classNames={"bg-base-200/20 border-warning italic text-center mb-6"}
      message={alertMessage}
    />
    <span class="flex gap-1 justify-center w-full drop-shadow-md">
      {@html luthoSvg} LUTHO
    </span>
    <div class="card-body w-full flex flex-col place-items-center">
      <p>
        <i>Lutho</i> - word taken from the Zulu language, which translates to
        <i><b>"nothing"</b></i>.
      </p>
      <div class="space-y-4">
        <div class="badge border-primary">kubernetes</div>
        <div class="badge border-primary">helm</div>
        <div class="badge border-primary">golang</div>
        <div class="badge border-primary">web-based UI</div>
        <div class="badge border-primary">sveltejs</div>
        <div class="badge border-primary">daisyUI</div>
        <div class="badge border-primary">tailwindcss</div>
      </div>
    </div>
    <div class="card-body w-full flex place-items-center !space-y-2 !p-0">
      <div>Manage Kubernetes based resources in a different way.</div>
      <div>
        This tool doesn't aim to replace the long standing CLI and UI
        applications, it just offers a new vision and user experience.
      </div>
      <div>
        Lutho has a <a href={externalLinks.go} class={anchorClassNames}>Go</a>
        lang backbone and a web-based user interface written using
        <a href={externalLinks.svelte} class={anchorClassNames}>Svelte</a>,
        <a href={externalLinks.daisyui} class={anchorClassNames}>daisyUI</a> and
        <a href={externalLinks.tailwindcss} class={anchorClassNames}
          >Tailwind CSS</a
        >. The whole application is packaged in a single native binary file with
        a small footprint, roughly the size of kubectl and helm CLI
        applications, standing at under 60MB.
      </div>
      <div>
        Having a single binary file means that it can run on the desktop, inside
        a container in a kubernetes cluster, or a different machine that is able
        to execute it and expose the web interface.
      </div>
    </div>
  </div>

  <div class="divider w-1/2 place-self-center" />

  <div class="hero-content text-center w-full !py-0">
    <div class="w-full">
      <h1
        class="text-lg font-semibold flex justify-center items-center gap-1 drop-shadow-md"
      >
        <SvgIcon icon="hashtag" size={"size-5"} /> Core concepts
      </h1>

      <div class="py-2">
        <li>Minimal design - without losing functionality</li>
        <li>
          Data, actions and UI elements are shown only based on their relevant
          context
        </li>
      </div>
    </div>
  </div>

  <div class="divider w-1/2 place-self-center" />

  <div class="hero-content text-center w-full pt-0">
    <div class="w-full space-y-3">
      <h1
        class="text-lg font-semibold flex justify-center items-center gap-1 drop-shadow-md"
      >
        <SvgIcon icon="link" size={"size-5"} /> Links
      </h1>
      <div class="flex-col flex justify-center items-center space-y-2">
        <a href={externalLinks.slackInvite} class="flex {anchorClassNames}">
          <SvgIcon icon="download" size={"size-5"} /> KubeFlame Slack Workspace invite
        </a>
        <a href={externalLinks.lutho.releases} class="flex {anchorClassNames}">
          <SvgIcon icon="download" size={"size-5"} /> Available releases
        </a>
        <a href={externalLinks.lutho.gh} class="flex {anchorClassNames}">
          <SvgIcon icon="github" size={"size-5"} /> GitHub repository
        </a>
        <a href={externalLinks.lutho.slack} class="flex {anchorClassNames}">
          <SvgIcon icon="slack" size={"size-5"} /> Slack channel
        </a>
      </div>
    </div>
  </div>
</div>
