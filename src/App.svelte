<script lang="ts">
  import { onMount } from "svelte";
  import Main from "./layers/pages/Main.svelte";
  import MoveDots from "./layers/animations/MoveDots.svelte";
  import InstallPrompt from "./layers/components/InstallPrompt.svelte";

  let hidden: boolean = false;

  onMount(() => {
    addEventListener("load", function () {
      hidden = true;
    });
  });
</script>

{#if hidden}
  <InstallPrompt />
  <Main />
{/if}
<MoveDots bind:hidden />
