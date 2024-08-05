<script lang="ts">
  import { browser } from "$app/environment";
  import SvgIcon from "./SvgIcon.svelte";

  let darkMode = true;

  function handleSwitchDarkMode() {
    darkMode = !darkMode;

    localStorage.setItem("theme", darkMode ? "dark" : "light");

    darkMode
      ? document.documentElement.setAttribute("data-theme", "dark")
      : document.documentElement.setAttribute("data-theme", "light");
  }

  if (browser) {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.setAttribute("data-theme", "dark");
      darkMode = true;
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      darkMode = false;
    }
  }
</script>

<label class="swap swap-rotate btn btn-ghost btn-sm btn-circle">
  <input
    type="checkbox"
    class="theme-controller"
    checked={darkMode}
    on:click={handleSwitchDarkMode}
  />

  <SvgIcon icon={"sun"} classNames="swap-off fill-current" stroke="" />
  <SvgIcon icon={"moon"} classNames="swap-on fill-current" stroke="" />
</label>
