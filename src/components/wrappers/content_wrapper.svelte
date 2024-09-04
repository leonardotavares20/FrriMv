<script lang="ts">
  import { afterUpdate } from "svelte";
  import { hideWrapper } from "@/lib/helpers/wrapper";
  import VideoPlayer from "../video/video_player.svelte";
  import { typeContentWrapper } from "@/lib/stores/wrapper";
  import VideoProgressBar from "../video/video_progress_bar.svelte";

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
    <button
      class="uppercase top-10 right-3 absolute z-20 font-futura_lt w-[100px] text-xs text-white hover:underline"
      on:click={() => hideWrapper()}>Close</button
    >
    <div
      id="content_main_wrapper"
      class="flex h-svh w-svw justify-center absolute overflow-hidden opacity-0"
    >
      {#if $typeContentWrapper === "video"}
        <VideoPlayer />
      {/if}
    </div>
  </div>
  <div
    id="content_footer_wrapper"
    class="grid items-end justify-center h-[100px] w-full relative z-50"
  >
    <!-- {#if $typeContentWrapper === "video"} -->
    <VideoProgressBar />
    <!-- {/if} -->
  </div>
</div>
