<script lang="ts">
  import { expoInOut } from "svelte/easing";
  import { fade } from "svelte/transition";
  import CodeBlock from "./CodeBlock.svelte";
  import { externalLinks } from "$lib/utilities/util";
  import SvgIcon from "./SvgIcon.svelte";

  const platformData = {
    macos: {
      arm64: `curl -Lo lutho ${externalLinks.lutho.download}/lutho-darwin-arm64`,
      amd64: `curl -Lo lutho ${externalLinks.lutho.download}/lutho-darwin-amd64`,
    },
    linux: {
      arm64: `curl -Lo lutho ${externalLinks.lutho.download}/lutho-linux-arm64`,
      amd64: `curl -Lo lutho ${externalLinks.lutho.download}/lutho-linux-amd64`,
    },
    windows: {
      arm64: `curl.exe -Lo lutho.exe ${externalLinks.lutho.download}/lutho-windows-arm64.exe`,
      amd64: `curl.exe -Lo lutho.exe ${externalLinks.lutho.download}/lutho-windows-amd64.exe`,
    },
    helm: {
      add: `helm repo add kubeflame ${externalLinks.kubeflame.helmRepo}`,
      update: `helm repo update`,
      install: `helm install lutho kubeflame/lutho`,
    },
  };

  const titleClassNames =
    "flex drop-shadow-sm gap-1 items-center justify-center";
</script>

<div
  class="hero h-full bg-base-100 flex flex-col p-4 text-center"
  transition:fade={{ duration: 200, easing: expoInOut }}
>
  <div
    class="card bg-base-100 flex place-content-center w-full lg:w-3/5 space-y-4 py-4"
  >
    <div class="space-y-4">
      <p class="font-semibold">
        There are two installation methods available at this point, you can
        either:
      </p>
      <li>follow the code blocks presented below</li>
      <li>
        access the <a
          href={externalLinks.lutho.releases}
          class="underline decoration-base-300 drop-shadow-sm hover:decoration-primary"
          >releases page</a
        >, download the binary for your platform from “Assets”, then rename it
        to lutho (or lutho.exe on Windows) and place this into your
        <code class="bg-base-200 max-w-fit rounded-lg px-1">$PATH</code> at your
        preferred binary installation directory.
      </li>
    </div>

    <div class="space-y-4">
      <div class="divider">
        <p class={titleClassNames}>
          <SvgIcon icon={"at"} size={"size-5"} /> macOS
        </p>
      </div>

      <CodeBlock
        codeData={[
          {
            tab: "darwin-arm64",
            code: platformData.macos.arm64,
          },
          {
            tab: "darwin-amd64",
            code: platformData.macos.amd64,
          },
        ]}
      />

      <CodeBlock
        codeData={[
          {
            code: "chmod +x lutho",
          },
        ]}
      />

      <CodeBlock
        codeData={[
          {
            code: "sudo mv lutho /some-dir-in-your-PATH/lutho",
          },
        ]}
      />
    </div>

    <div class="space-y-4">
      <div class="divider">
        <p class={titleClassNames}>
          <SvgIcon icon={"at"} size={"size-5"} /> GNU/Linux
        </p>
      </div>

      <CodeBlock
        codeData={[
          {
            tab: "linux-arm64",
            code: platformData.linux.arm64,
          },
          {
            tab: "linux-amd64",
            code: platformData.linux.amd64,
          },
        ]}
      />

      <CodeBlock
        codeData={[
          {
            code: "chmod +x lutho",
          },
        ]}
      />

      <CodeBlock
        codeData={[
          {
            code: "sudo mv lutho /some-dir-in-your-PATH/lutho",
          },
        ]}
      />
    </div>

    <div class="space-y-4">
      <div class="divider">
        <p class={titleClassNames}>
          <SvgIcon icon={"at"} size={"size-5"} /> Windows (using PowerShell)
        </p>
      </div>

      <CodeBlock
        codeData={[
          {
            tab: "windows-arm64",
            code: platformData.windows.arm64,
          },
          {
            tab: "windows-amd64",
            code: platformData.windows.amd64,
          },
        ]}
      />

      <CodeBlock
        codeData={[
          {
            code: "Move-Item lutho.exe c:\\some-dir-in-your-PATH\\lutho.exe",
          },
        ]}
      />
    </div>

    <div class="space-y-4">
      <div class="divider">
        <p class={titleClassNames}>
          <SvgIcon icon={"at"} size={"size-5"} /> Helm Chart
        </p>
      </div>

      <CodeBlock
        codeData={[
          {
            code: platformData.helm.add,
          },
        ]}
      />

      <CodeBlock
        codeData={[
          {
            code: platformData.helm.update,
          },
        ]}
      />

      <CodeBlock
        codeData={[
          {
            code: platformData.helm.install,
          },
        ]}
      />
    </div>
  </div>
</div>
