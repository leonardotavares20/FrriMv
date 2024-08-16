<script lang="ts">
  import { onMount } from "svelte";
  import "../app.css";
  import gsap from "gsap";
  import NeonLogo from "@/components/neon_logo.svelte";
  import { theme } from "@/stores/theme";

  let timeline;
  let preload_video: HTMLVideoElement;

  onMount(() => {
    timeline = gsap.timeline({ paused: true });

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
</script>

<div class="container_preload">
  <div class="container_preload__container_logo">
    <img class="container_preload__logo" src="/logo/logo.svg" alt="" />
  </div>
  <div class="container_preload__container_copy_click">
    <p>Click to skip</p>
    <div class="container_preload__terms">
      <span class="container_preload__neon">
        A <NeonLogo /> Movie
      </span>
      <p>Copyrights © Neon 2023</p>
    </div>
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

  .container_preload__neon {
    @apply flex justify-center text-xs gap-1
  }

  .container_preload__terms {
    @apply uppercase text-center
  }

  .container_preload__container_copy_click {
    @apply absolute flex flex-col items-center py-6 justify-between z-20 text-hells_red  h-[100vh] w-full;
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
