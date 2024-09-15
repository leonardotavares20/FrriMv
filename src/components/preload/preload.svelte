<script lang="ts">
  import { createEventDispatcher, onMount } from "svelte";
  import NeonCopyTerms from "../neon/neon_copy_terms.svelte";
  import { startVideo, pauseVideo } from "@/lib/stores/preload";

  const dispatch = createEventDispatcher();

  let preload_video: HTMLVideoElement;

  $: $startVideo && preload_video.play();

  $: $pauseVideo && preload_video.pause();

  function skipToEnd() {
    dispatch("skipToEnd");
  }
</script>

<div
  id="preload"
  on:click={skipToEnd}
  aria-hidden="true"
  aria-label="Skip to end"
  class="bg-black h-dvh w-svw fixed z-[300] flex flex-col justify-center items-center"
>
  <div class="absolute flex justify-center z-10 h-[100vh] w-full">
    <img
      alt="Ferrari"
      src="/logo/logo.svg"
      id="ferrari_logo_preload"
      class=" absolute select-none w-[60%] top-[60%] -translate-y-full max-xl:top-[55%] pb-6 px-6"
    />
  </div>
  <div
    id="copy_click"
    class="absolute flex flex-col cursor-pointer items-center uppercase font-futura_bt py-7 justify-between z-20 text-hells_red h-[100vh] w-full"
  >
    <p
      class="font-black mt-4 font-futura_lt text-[12px] decoration-current underline underline-offset-2"
    >
      Click to skip
    </p>
    <NeonCopyTerms />
  </div>
  <div class="grid w-svw self-center justify-center items-center">
    <video
      bind:this={preload_video}
      muted
      id="preload_video"
      src="/videos/preload/preload_video.mp4"
      class="pointer-events-none opacity-0 w-[88vw] select-none self-center"
    >
      <track kind="captions" />
    </video>
  </div>
</div>
