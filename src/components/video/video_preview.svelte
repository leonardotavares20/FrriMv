<script lang="ts">
  import { showWrapper } from "@/lib/helpers/wrapper";
  import PlayIcon from "@/lib/assets/video/play_icon.svelte";
  import { typeContentWrapper, videoSource } from "@/lib/stores/wrapper";

  export let srcVideo: string;

  function showVideoWrapper() {
    videoSource.set(srcVideo);
    showWrapper();
    typeContentWrapper.set("video");
  }
</script>

<div
  on:click={showVideoWrapper}
  aria-hidden="true"
  class="w-[100vw] h-[100vh] relative grid justify-center items-center overflow-hidden"
>
  <video
    autoplay
    loop
    muted
    class="w-[97vw] cursor-pointer absolute left-1/2 right-1/2 top-0 bottom-0 -translate-x-1/2"
    src={srcVideo}
  >
    <track kind="captions" />
  </video>
  <PlayIcon />
</div>
