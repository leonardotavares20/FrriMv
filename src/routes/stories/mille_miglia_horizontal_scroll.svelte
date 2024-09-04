<script lang="ts">
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { beforeNavigate } from "$app/navigation";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import {
    calculateTotalWidthImages,
    setupScrollMilleMiglia,
  } from "@/lib/helpers/scroll";
  import HorizontalScrollCard from "@/components/horizontal_scroll/horizontal_scroll_card.svelte";
  import HorizontalScrollMessage from "@/components/horizontal_scroll/horizontal_scroll_message.svelte";

  let totalWidth = 0;
  export let images: { src: string; id: number; alt: string; full: boolean }[];

  beforeNavigate(() => {
    ScrollTrigger.killAll(true);
  });

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = document.querySelectorAll<HTMLImageElement>(
      "#scroll_mille_miglia img",
    );

    totalWidth = calculateTotalWidthImages(images);

    const maxScroll = ((totalWidth - window.innerWidth) / totalWidth) * 100;

    setupScrollMilleMiglia(maxScroll);
  });
</script>

<div
  id="wrapper_scroll"
  class="h-[200vh] flex justify-center w-[100vw] teste overflow-hidden"
>
  <div id="container_scroll_mille_miglia" class="sticky h-svh w-[400vw] top-0">
    <HorizontalScrollMessage />
    <div
      id="scroll_mille_miglia"
      style="width: ${totalWidth}px;"
      class="h-[100vh] flex gap-4 absolute pl-5 pr-[60px] left-0"
    >
      {#each images as image}
        <div
          class="w-[60vw] h-[100vh] flex justify-center items-center overflow-hidden"
          class:full={image.full}
        >
          <img
            src={image.src}
            alt={image.alt}
            class:not-full={!image.full}
            class:full={image.full}
            class="h-[60vh] w-[60vw] object-cover overflow-hidden"
          />
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .full {
    width: 10%;
    height: 100vh;
  }

  .full img {
    height: 60vh;
    width: 100%;
  }

  .not-full {
    width: 60vw;
    height: 60vh;
  }
</style>
