<script lang="ts">
  import { onMount } from "svelte";
  import "../app.css";
  import gsap from "gsap";
  import NeonCopyTerms from "@/components/neon_copy_terms.svelte";
  import { theme } from "@/stores/theme";

  let timeline: GSAPTimeline;
  let preload_video: HTMLVideoElement;

  let preloadFinished: boolean = false;

  onMount(() => {
    timeline = gsap.timeline({ paused: false });

    timeline
      .to(
        "#container_preload__logo",
        {
          width: "90%",
          ease: "power1.inOut",
          duration: 7,
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
          },
        },
        "<",
      );
  }
</script>

<div class="h-dvh relative grid items-end justify-center">
  {#if !preloadFinished}
    <div
      class="bg-black h-dvh absolute flex flex-col justify-center items-center"
      on:click={skipToEnd}
      aria-hidden="true"
      aria-label="Skip to end"
    >
      <div class="absolute flex justify-center z-10 h-[100vh] w-full">
        <img
          alt=""
          src="/logo/logo.svg"
          id="container_preload__logo"
          class=" absolute select-none w-[60%] top-[57%] -translate-y-full max-xl:top-[55%] pb-6"
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
    <div class="grid gap-4 grid-cols-4 justify-center">
      <div class="bg-red-600"></div>
      <div class="bg-red-600"></div>
      <div class="bg-red-600"></div>
      <div class="bg-red-600"></div>
    </div>
    <img class="w-[98vw] pt-6 bottom-0 self-end" src="/logo/logo.svg" alt="" />
  </div>
</div>
