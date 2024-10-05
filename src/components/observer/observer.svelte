<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import { setupObserver } from "@/lib/helpers/observer";

  let progressBar: HTMLDivElement;

  export let progressTarget: number;
  export let progressMultiplier: number;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    setupObserver(progressTarget, progressMultiplier, progressBar);

    return () => {
      setupObserver(0, 0, progressBar).kill();
    };
  });
</script>

<div
  bind:this={progressBar}
  class="fixed w-0 h-[10px] bg-hells_red bottom-0"
></div>
