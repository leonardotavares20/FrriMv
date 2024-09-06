<script lang="ts">
  import { afterUpdate } from "svelte";
  import { hideWrapper } from "@/lib/helpers/wrapper";
  import VideoPlayer from "../video/video_player.svelte";
  import { typeContentWrapper } from "@/lib/stores/wrapper";
  import VideoProgressBar from "../video/video_progress_bar.svelte";
  import { carrousel_images } from "@/lib/assets/carrousel/carrousel_images";

  function handleKeyDownEscape(event: KeyboardEvent) {
    event.code === "Escape" && hideWrapper();
  }

  // -- Hooks -- //

  afterUpdate(() => {
    document.addEventListener("keydown", handleKeyDownEscape);

    return () => document.removeEventListener("keydown", handleKeyDownEscape);
  });
</script>

<div
  id="wrapper_content"
  class="fixed flex flex-col justify-between w-svw h-svh bottom-full bg-black z-[200] overflow-hidden"
>
  <div class="grid relative w-svw h-svh">
    <a
      class="absolute top-[26px] text-hells_red font-futura_lt uppercase left-3 translate-x-1/2 text-xs hover:underline z-20"
      on:click={() => hideWrapper()}
      href="/">Ferrari</a
    >
    <button
      class="uppercase top-[26px] right-3 absolute z-20 font-futura_lt w-[100px] text-xs text-white hover:underline"
      on:click={() => hideWrapper()}>Close</button
    >
    <div
      id="content_main_wrapper"
      class="flex h-svh w-svw justify-center absolute overflow-hidden opacity-0"
    >
      {#if $typeContentWrapper === "gallery"}
        <div class="h-[80vh] w-full relative flex justify-center items-end">
          <div class="h-[90%]">
            <img
              class="h-full object-cover"
              src="/images_grid/grid_one.webp"
              alt=""
            />
          </div>
        </div>
      {/if}
      {#if $typeContentWrapper === "video"}
        <VideoPlayer />
      {/if}
    </div>
  </div>
  <div
    id="content_footer_wrapper"
    class="grid items-end justify-center min-h-[100px] w-full relative z-50"
  >
    {#if $typeContentWrapper === "video"}
      <VideoProgressBar />
    {:else}
      <div
        id="carrousel_images"
        class="w-[97vw] h-[20vh] font-futura_lt opacity-0"
      >
        <div
          class="absolute w-full h-[95%] left-[51.5%] -translate-x-1/2 top-0 flex gap-2 pb-6 pt-2 border-t-hells_red border-t-[1px]"
        >
          {#each carrousel_images as image}
            <img loading="lazy" class="cursor-pointer" src={image.src} alt="" />
          {/each}
        </div>
      </div>
    {/if}
  </div>
</div>
