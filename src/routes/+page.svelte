<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import Preload from "@/components/preload.svelte";
  import GridHome from "@/components/grid_home.svelte";
  import { preloadFinished, pauseVideo } from "@/lib/stores/preload";
  import FirstSectionHome from "@/components/first_section_home.svelte";
  import SecondSectionHome from "@/components/second_section_home.svelte";
  import { PreloadTimeline } from "@/lib/animations/timelines/PreloadTimeline";
  import { SkipPreloadTimeline } from "@/lib/animations/timelines/SkipPreloadTimeline";

  let timeline: GSAPTimeline;

  onMount(() => {
    timeline = new PreloadTimeline(false).getTimeline();
  });

  function skipToEnd() {
    timeline.pause();

    const skipTimeline = new SkipPreloadTimeline(false).getTimeline();

    skipTimeline.eventCallback("onComplete", () => {
      timeline.seek(timeline.duration());
    });
  }
</script>

<GridHome>
  {#if !$preloadFinished}
    <Preload on:skipToEnd={skipToEnd} />
  {/if}
  <FirstSectionHome />
</GridHome>
<SecondSectionHome />
