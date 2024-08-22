<script lang="ts">
  import "../app.css";
  import gsap from "gsap";
  import { onMount } from "svelte";
  import { theme } from "@/stores/theme";
  import Preload from "@/components/preload.svelte";
  import NeonCopyTerms from "@/components/neon_copy_terms.svelte";
  import { preloadFinished, pauseVideo } from "@/lib/stores/preload";
  import { PreloadTimeline } from "@/lib/animations/timelines/PreloadTimeline";
  import { SkipPreloadTimeline } from "@/lib/animations/timelines/SkipPreloadTimeline";
  import { chapters } from "@/lib/assets/grid_home";

  let timeline: GSAPTimeline;

  function preventScroll(event: WheelEvent | TouchEvent) {
    event.preventDefault();
  }

  function lockScroll() {
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
  }

  function unlockScroll() {
    document.removeEventListener("wheel", preventScroll);
    document.removeEventListener("touchmove", preventScroll);
  }

  let currentIndex: number | null = null;

  function handleIndex(index: number) {
    currentIndex = index;
  }

  function handleLeave() {
    currentIndex = null;
  }

  onMount(() => {
    timeline = new PreloadTimeline(false).getTimeline();
  });

  function skipToEnd() {
    timeline.pause();

    const skipTimeline = new SkipPreloadTimeline(false).getTimeline();

    skipTimeline.eventCallback("onComplete", () => {
      timeline.seek(timeline.duration());
    });
  }
</script>

<div class="h-dvh relative grid items-end justify-center">
  {#if !$preloadFinished}
    <Preload on:skipToEnd={skipToEnd} />
  {/if}
  <div class="w-svw grid h-[100vh] p-6 pt-0 grid-rows-home_rows justify-center">
    <div></div>
    <div class="grid grid-cols-4 justify-center">
      {#each chapters as chapter, index}
        <div
          id="column"
          aria-hidden="true"
          on:mouseleave={handleLeave}
          on:mouseenter={handleIndex.bind(null, index)}
          class="opacity-0 grid cursor-pointer"
        >
          <div
            class:first={index === 0}
            class:last={index === 3}
            class="p-3 h-full grid grid-rows-column_row text-center"
          >
            <div
              class="w-full relative overflow-hidden cursor-pointer object-cover h-full self-end"
            >
              <img
                alt={chapter.description}
                src={chapter.src}
                class="w-full absolute left-0 right-0 bottom-0 top-0 h-full select-none object-cover"
              />
            </div>
            <h2
              class:active={index === currentIndex}
              class:off={currentIndex !== null && currentIndex !== index}
              class="text-hells_red leading-7 transition-all pt-2 flex flex-col font-futura_lt_bold text-[40px] uppercase"
            >
              <span class="text-[12px] font-normal font-futura_bt"
                >{chapter.chapter}</span
              >
              {chapter.title}
            </h2>
          </div>
        </div>
      {/each}
    </div>
    <img
      class="w-[98vw] h-full pt-6 bottom-0 self-end"
      src="/logo/logo.svg"
      alt=""
    />
  </div>
</div>
<div class="h-[100vh] w-[100vw] relative p-6 grid items-end text-hells_red">
  <div class="text-center grid justify-center font-century">
    <blockquote class="grid items-center gap-10 justify-center max-w-[480px]">
      <p class="w-[480px] leading-8 text-[30px] mx-auto teste">
        “Mann has always balanced the intimate with the epic. Ferrari might be
        the purest expression of this.”
      </p>
      <div class="w-full flex justify-center">
        <img class="max-w-[130px]" src="/logo/vulture.webp" alt="" />
      </div>
    </blockquote>
  </div>
  <div class="flex font-futura_lt w-full items-end uppercase justify-between">
    <a class="text-xs" href="/">Legal</a>
    <div class="absolute bottom-0 right-1/2 translate-x-2/4 -translate-y-1/2">
      <NeonCopyTerms />
    </div>
    <div class="text-xs w-20 flex justify-between">
      <a href="/">Instagram</a>
      <a href="/">X</a>
    </div>
  </div>
</div>

<style>
  .active {
    @apply transition-all;
  }

  .off {
    @apply opacity-100 transition-all brightness-50;
  }

  .first {
    @apply pl-0 text-start;
  }

  .last {
    @apply pr-0 text-end;
  }
</style>
