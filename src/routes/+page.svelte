<script lang="ts">
  import { onMount } from "svelte";
  import "../app.css";
  import gsap from "gsap";
  import NeonCopyTerms from "@/components/neon_copy_terms.svelte";
  import { theme } from "@/stores/theme";

  let timeline: GSAPTimeline;
  let preload_video: HTMLVideoElement;

  onMount(() => {
    timeline = gsap.timeline({ paused: false });

    timeline
      .to(
        ".container_preload__logo",
        {
          width: "90%",
          ease: "power1.inOut",
          duration: 6.4,
        },
        1,
      )
      .to(
        ".container_preload__video",
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
        ".container_preload__video",
        {
          opacity: 0,
          duration: 0.4,
        },
        "6.4",
      )
      .to(
        ".container_preload__logo",
        {
          top: "87%",
          width: "98%",
          ease: "power2.out",
          duration: 0.8,
        },
        "6.6",
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
      .to(".container_preload__video", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          preload_video.pause();
        },
      })
      .to(
        ".container_preload__logo",
        {
          top: "87%",
          width: "98%",
          ease: "power2.out",
          duration: 0.8,
        },
        "<",
      );
  }
</script>

<div
  class="container_preload"
  on:click={skipToEnd}
  aria-hidden="true"
  aria-label="Skip to end"
>
  <div class="container_preload__container_logo">
    <img class="container_preload__logo" src="/logo/logo.svg" alt="" />
  </div>
  <div class="container_preload__container_copy_click">
    <p class="container_preload__skip">Click to skip</p>
    <NeonCopyTerms />
  </div>
  <div class="container_preload__container_video">
    <video
      bind:this={preload_video}
      muted
      class="container_preload__video"
      src="/videos/preload/preload_video.mp4"
    >
      <track kind="captions" />
    </video>
  </div>
</div>

<style>
  .container_preload {
    @apply bg-black h-dvh relative flex flex-col justify-center items-center;
  }

  .container_preload__container_copy_click {
    @apply absolute flex flex-col cursor-pointer items-center uppercase font-futura_bt py-7 justify-between z-20 text-hells_red  h-[100vh] w-full;
  }

  .container_preload__skip {
    @apply font-black mt-4 font-futura_lt text-[12px] decoration-current underline underline-offset-2;
  }

  .container_preload__container_logo {
    @apply absolute flex justify-center z-10 h-[100vh] w-full;
  }

  .container_preload__logo {
    @apply top-2/4 absolute select-none py-[25px] w-[60%] translate-y-[-50%];
  }

  .container_preload__container_video {
    @apply flex justify-center;
  }

  .container_preload__video {
    @apply pointer-events-none opacity-0 w-[88%] select-none;
  }
</style>
