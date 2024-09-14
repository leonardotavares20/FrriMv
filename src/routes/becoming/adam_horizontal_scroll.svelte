<script lang="ts">
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import { beforeNavigate } from "$app/navigation";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import {
    calculateTotalWidthImages,
    setupScrollAdam,
  } from "@/lib/helpers/scroll";
  import HorizontalScrollCard from "@/components/horizontal_scroll/horizontal_scroll_card.svelte";
  import HorizontalScrollMessage from "@/components/horizontal_scroll/horizontal_scroll_message.svelte";

  let totalWidth = 0;
  export let images: {
    src: string;
    id: number;
    alt: string;
    indexImage: number;
  }[];

  beforeNavigate(() => {
    ScrollTrigger.killAll(true);
  });

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images =
      document.querySelectorAll<HTMLImageElement>("#scroll_adam img");

    totalWidth = calculateTotalWidthImages(images);

    const maxScroll = ((totalWidth - window.innerWidth) / totalWidth) * 100;

    setupScrollAdam(maxScroll);
  });
</script>

<div
  id="wrapper_scroll"
  class="h-[200vh] flex justify-center w-[100vw] teste overflow-hidden"
>
  <div id="container_scroll_adam" class="sticky h-svh w-[400vw] top-0">
    <HorizontalScrollMessage />
    <div
      id="scroll_adam"
      style="width: ${totalWidth}px;"
      class="h-[100vh] flex gap-4 absolute pl-5 pr-[60px] left-0"
    >
      {#each images as image}
        <HorizontalScrollCard {image} />
      {/each}
    </div>
  </div>
</div>
