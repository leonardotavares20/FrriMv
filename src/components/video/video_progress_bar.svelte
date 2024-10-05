<script lang="ts">
  import {
    playVideo,
    progressVideo,
    videoDuration,
    newTimeVideo,
    volumeVideo,
  } from "@/lib/stores/wrapper";

  let volume = 0.5;

  function onProgressClick(event: MouseEvent) {
    const progressBar = event.currentTarget as HTMLDivElement;
    const progressBarProps = progressBar.getBoundingClientRect();
    const clickX = event.clientX - progressBarProps.left;
    const clickPercentage = clickX / progressBar.offsetWidth;
    const newTime = clickPercentage * $videoDuration;

    newTimeVideo.set(newTime);
  }

  function onVolumeChange(
    event: Event & { currentTarget: EventTarget & HTMLInputElement },
  ) {
    const target = event.currentTarget as HTMLInputElement;
    volume = parseFloat(target.value);

    volumeVideo.set(volume);
  }
</script>

<div class="w-[97vw] h-16 relative font-futura_lt">
  <div class="absolute w-full left-1/2 -translate-x-1/2 top-0">
    <div
      style="width: {$progressVideo?.toFixed(2)}%"
      class="bg-hells_red z-50 absolute w-0 h-[2px] cursor-pointer top-0 transition-all pointer-events-none"
    ></div>
    <div
      aria-hidden="true"
      on:click={onProgressClick}
      class="bg-dark_jungle_green h-[2px] w-full z-0 absolute cursor-pointer"
    ></div>
    <div class="h-8 flex items-end w-full justify-between">
      <div class="flex w-16 justify-between">
        <button
          class:control-status={!$playVideo}
          on:click={() => playVideo.set(true)}
          class="text-white uppercase text-xs hover:underline"
        >
          Play
        </button>
        <button
          class:control-status={$playVideo}
          on:click={() => playVideo.set(false)}
          class="text-white uppercase text-xs hover:underline"
        >
          Pause
        </button>
      </div>
      <div class="flex items-center gap-4">
        <div>
          <p class="text-white uppercase text-xs hover:underline cursor-text">
            Sound
          </p>
        </div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          on:input={onVolumeChange}
        />
      </div>
    </div>
  </div>
</div>

<style>
  .control-status {
    @apply text-dark_jungle_green;
  }
</style>
