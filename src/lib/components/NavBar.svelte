<script lang="ts">
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
  import favicon from "../../../static/favicon.svg?raw";
  import SvgIcon from "./SvgIcon.svelte";
  import { page } from "$app/stores";

  const name = "KubeFlame";
  const slackLink = "https://kubeflame.slack.com/";
  const githubLink = "https://github.com/kubeflame";
</script>

<div
  class="navbar fixed z-50 bg-base-200 shadow-lg rounded-b-2xl !min-h-12 !h-12 !px-4 top-0"
>
  <div class="navbar-start">
    <span class="text-lg grid grid-flow-col gap-1 items-center">
      {@html favicon}{name}
    </span>
  </div>
  <div class="navbar-center">
    <div role="tablist" class="tabs tabs-bordered gap-4">
      <a
        href="#about"
        role="tab"
        class="tab gap-1 px-1 {$page.url.hash === '#about'
          ? 'tab-active !border-primary'
          : '!border-base-300 hover:!border-primary'}"
      >
        <SvgIcon icon="info" size={"size-5"} /> About
      </a>
      <a
        href="#screenshots"
        role="tab"
        class="tab gap-1 px-1 {$page.url.hash === '#screenshots'
          ? 'tab-active !border-primary'
          : '!border-base-300 hover:!border-primary'}"
      >
        <SvgIcon icon="photo" size={"size-5"} /> Screenshots
      </a>
    </div>
  </div>
  <div class="navbar-end">
    <ThemeSwitcher />
    <a href={slackLink} role="button" class="btn btn-sm btn-ghost btn-circle">
      <SvgIcon icon="slack" />
    </a>
    <a href={githubLink} role="button" class="btn btn-sm btn-ghost btn-circle">
      <SvgIcon icon="github" />
    </a>
  </div>
</div>
