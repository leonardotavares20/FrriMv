<script lang="ts">
  import {
    videoSource,
    playVideo,
    progressVideo,
    videoDuration,
    newTimeVideo,
    volumeVideo,
  } from "@/lib/stores/wrapper";
  import throttle from "lodash.throttle";
  import { afterUpdate, onDestroy, onMount } from "svelte";

  // -- Variables -- //

  let videoElement: HTMLVideoElement;
  let currentTime: number = 0;
  let percentage: number = 0;
  let duration: number = 0;

  // -- Watchers -- //

  $: if (videoElement) {
    videoElement.currentTime = $newTimeVideo;
  }

  $: if (videoElement) {
    videoElement.volume = $volumeVideo;
  }

  // -- Functions -- //

  function onClickVideo(): void {
    const isPlaying = videoElement.paused;
    playVideo.set(isPlaying);
    isPlaying ? videoElement.pause() : videoElement.play();
  }

  function handleKeyDownSpace(event: KeyboardEvent): void {
    if (event.code === "Space") {
      onClickVideo();
    }
  }

  function destroyVideoComponent(): void {
    duration = 0;
    percentage = 0;
    newTimeVideo.set(0);
    videoElement.pause();
    progressVideo.set(0);
  }

  const throttledUpdate = throttle(() => {
    currentTime = videoElement?.currentTime;
    if (currentTime > 0) {
      percentage = (currentTime / duration) * 100;
      progressVideo.set(percentage);
    }
  }, 100);

  function getVideoDuration(): void {
    duration = videoElement.duration;
    videoDuration.set(duration);
  }

  // -- Hooks -- //

  afterUpdate(() => {
    $playVideo && videoElement.play();
    !$playVideo && videoElement.pause();
  });

  onMount(() => {
    videoElement.addEventListener("loadedmetadata", getVideoDuration);

    videoElement.volume = $volumeVideo;

    document.addEventListener("keypress", handleKeyDownSpace);

    videoElement.addEventListener("timeupdate", throttledUpdate);

    return () => {
      document.removeEventListener("keypress", handleKeyDownSpace);
      videoElement.removeEventListener("timeupdate", throttledUpdate);
      videoElement.removeEventListener("loadedmetadata", getVideoDuration);
    };
  });

  onDestroy(() => {
    destroyVideoComponent();
  });
</script>

<video
  loop
  on:click={onClickVideo}
  bind:this={videoElement}
  src={$videoSource}
  class="h-svhw-svw"
>
  <track kind="captions" />
</video>
