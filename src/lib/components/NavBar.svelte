<script lang="ts">
  import ThemeSwitcher from "./ThemeSwitcher.svelte";
  import kubeflame from "$lib/assets/icons/kubeflame.svg?raw";
  import SvgIcon from "./SvgIcon.svelte";
  import { page } from "$app/stores";
  import { internalHrefs, externalLinks } from "$lib/utilities/util";

  const appName = "KubeFlame";
</script>

<div
  class="navbar fixed z-50 bg-base-200 shadow-lg rounded-b-2xl !min-h-12 !h-12 !px-4 top-0 max-sm:justify-between"
>
  <div class="navbar-start max-sm:w-1/4">
    <span class="max-sm:text-sm gap-x-2 flex items-center text-lg">
      {@html kubeflame}<span class="max-md:hidden">{appName}</span>
    </span>
  </div>
  <div class="navbar-center">
    <div role="tablist" class="tabs tabs-bordered gap-4">
      <a
        href={internalHrefs.about}
        role="tab"
        class="tab gap-1 px-1 hover:border-b-[0.2rem] {$page.url.hash ===
        internalHrefs.about
          ? 'tab-active !border-primary'
          : '!border-base-300 hover:!border-primary'}"
      >
        <SvgIcon icon="documentDetails" size={"size-5"} />
        <span class="max-sm:hidden">About</span>
      </a>
      <a
        href={internalHrefs.screenshots}
        role="tab"
        class="tab gap-1 px-1 hover:border-b-[0.2rem] {$page.url.hash ===
        internalHrefs.screenshots
          ? 'tab-active !border-primary'
          : '!border-base-300 hover:!border-primary'}"
      >
        <SvgIcon icon="photo" size={"size-5"} />
        <span class="max-sm:hidden">Screenshots</span>
      </a>
      <a
        href={internalHrefs.demo}
        role="tab"
        class="tab gap-1 px-1 hover:border-b-[0.2rem] {$page.url.hash ===
        internalHrefs.demo
          ? 'tab-active !border-primary'
          : '!border-base-300 hover:!border-primary'}"
      >
        <SvgIcon icon="play" size={"size-5"} />
        <span class="max-sm:hidden">Demo</span>
      </a>
      <a
        href={internalHrefs.installNotes}
        role="tab"
        class="tab gap-1 px-1 hover:border-b-[0.2rem] {$page.url.hash ===
        internalHrefs.installNotes
          ? 'tab-active !border-primary'
          : '!border-base-300 hover:!border-primary'}"
      >
        <SvgIcon icon="info" size={"size-5"} />
        <span class="max-sm:hidden">Install notes</span>
      </a>
    </div>
  </div>
  <div class="navbar-end">
    <ThemeSwitcher />
    <a
      href={externalLinks.slackInvite}
      role="button"
      class="btn btn-sm btn-ghost btn-circle"
    >
      <SvgIcon icon="slack" />
    </a>
    <a
      href={externalLinks.kubeflame.gh}
      role="button"
      class="btn btn-sm btn-ghost btn-circle"
    >
      <SvgIcon icon="github" />
    </a>
  </div>
</div>
