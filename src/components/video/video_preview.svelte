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
  class="w-[100vw] h-[100vh] relative grid justify-center items-center"
>
  <video autoplay loop muted class="w-[95vw] cursor-pointer" src={srcVideo}>
    <track kind="captions" />
  </video>
  <PlayIcon />
</div>
