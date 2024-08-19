<script lang="ts">
  import { onMount } from "svelte";
  import "../app.css";
  import gsap from "gsap";
  import NeonCopyTerms from "@/components/neon_copy_terms.svelte";
  import { theme } from "@/stores/theme";

  let timeline: GSAPTimeline;
  let preload_video: HTMLVideoElement;

  let preloadFinished: boolean = false;

  function preventScroll(event) {
    event.preventDefault();
  }

  function lockScroll() {
    document.addEventListener("wheel", preventScroll, { passive: false });
    document.addEventListener("touchmove", preventScroll, { passive: false });
  }

  function unlockScroll() {
    document.removeEventListener("wheel", preventScroll, { passive: true });
    document.removeEventListener("touchmove", preventScroll, { passive: true });
  }

  let currentIndex: number | null = null;

  function handleIndex(index: number) {
    currentIndex = index;
  }

  function handleLeave() {
    currentIndex = null;
  }

  onMount(() => {
    document.body.scrollTo(0, 0);
    timeline = gsap.timeline({ paused: false, onStart: lockScroll() });

    timeline
      .to(
        "#container_preload__logo",
        {
          width: "90%",
          ease: "power1.inOut",
          duration: 7,
          onStart: () => {
            lockScroll();
          },
        },
        1.1,
      )
      .to(
        "#container_preload__video",
        {
          opacity: 1,
          duration: 2,
          onStart: () => {
            preload_video.play();
          },
        },
        1.1,
      )
      .to(
        "#container_preload__video",
        {
          opacity: 0,
          duration: 0.4,
        },
        "7.6",
      )
      .to(
        "#container_preload__container_copy_click",
        {
          opacity: 0,
          duration: 0.4,
        },
        6.4,
      )
      .to(
        "#container_preload__logo",
        {
          top: "100%",
          width: "98%",
          ease: "power2.out",
          duration: 0.8,
          onComplete: () => {
            preloadFinished = true;
            unlockScroll();
            gsap.to(".column", {
              opacity: 1,
              stagger: 0.5,
              duration: 0.5,
            });
          },
        },
        "7.6",
      );
  });

  function skipToEnd() {
    timeline.pause();

    const skipTimeline = gsap.timeline({
      onComplete: () => {
        timeline.seek(timeline.duration());
      },
    });

    skipTimeline
      .to("#container_preload__video", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          preload_video.pause();
        },
      })
      .to(
        "#container_preload__container_copy_click",
        {
          opacity: 0,
          duration: 0.4,
        },
        0.15,
      )
      .to(
        "#container_preload__logo",
        {
          top: "100%",
          width: "98%",
          ease: "power2.out",
          duration: 0.6,
          onComplete: () => {
            preloadFinished = true;
            unlockScroll();
            gsap.to(".column", {
              opacity: 1,
              stagger: 0.5,
              duration: 0.5,
              transition: "0.5s",
            });
          },
        },
        "<",
      );
  }
</script>

<div class="h-dvh relative grid items-end justify-center">
  {#if !preloadFinished}
    <div
      class="bg-black h-dvh fixed z-20 flex flex-col justify-center items-center"
      on:click={skipToEnd}
      aria-hidden="true"
      aria-label="Skip to end"
    >
      <div class="absolute flex justify-center z-10 h-[100vh] w-full">
        <img
          alt=""
          src="/logo/logo.svg"
          id="container_preload__logo"
          class=" absolute select-none w-[60%] top-[60%] -translate-y-full max-xl:top-[55%] pb-6"
        />
      </div>
      <div
        id="container_preload__container_copy_click"
        class="absolute flex flex-col cursor-pointer items-center uppercase font-futura_bt py-7 justify-between z-20 text-hells_red h-[100vh] w-full"
      >
        <p
          class="font-black mt-4 font-futura_lt text-[12px] decoration-current underline underline-offset-2"
        >
          Click to skip
        </p>
        <NeonCopyTerms />
      </div>
      <div class="flex justify-center">
        <video
          bind:this={preload_video}
          muted
          id="container_preload__video"
          src="/videos/preload/preload_video.mp4"
          class="pointer-events-none opacity-0 w-[88%] select-none"
        >
          <track kind="captions" />
        </video>
      </div>
    </div>
  {/if}
  <div class="w-svw grid h-[100vh] p-6 grid-rows-home_rows justify-center">
    <div class="grid grid-cols-4 justify-center">
      {#each Array(4) as _, index}
        <div
          aria-hidden="true"
          on:mouseleave={handleLeave}
          on:mouseenter={handleIndex.bind(null, index)}
          class:active={index === currentIndex}
          class:off={currentIndex !== null && currentIndex !== index}
          class="bg-red-600 opacity-0 cursor-pointer column"
        ></div>
      {/each}
    </div>
    <img class="w-[98vw] pt-6 bottom-0 self-end" src="/logo/logo.svg" alt="" />
  </div>
</div>
<div class="h-[100vh]"></div>

<style>
  .active {
    @apply bg-purple-50 transition-all;
  }

  .off {
    @apply opacity-10 transition-all brightness-50;
  }
</style>
