<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import Header from "@/components/header.svelte";
  import { afterNavigate } from "$app/navigation";
  import Preload from "@/components/preload.svelte";
  import { preloadFinished, firstLoad } from "@/lib/stores/preload";
  import { PreloadTimeline } from "@/lib/animations/timelines/PreloadTimeline";
  import { SkipPreloadTimeline } from "@/lib/animations/timelines/SkipPreloadTimeline";

  let timeline: GSAPTimeline;

  $: $preloadFinished && firstLoad.set(true);

  function skipToEnd() {
    timeline.pause();

    const skipTimeline = new SkipPreloadTimeline(false).getTimeline();

    skipTimeline.eventCallback("onComplete", () => {
      timeline.seek(timeline.duration());
    });
  }

  // -- Hooks -- //

  onMount(() => {
    if (!$preloadFinished && !$firstLoad) {
      timeline = new PreloadTimeline(false).getTimeline();
    }
  });

  afterNavigate(() => {
    window.scrollTo(0, 0);
  });
</script>

<svelte:head>
  <title>Ferrari - Movie</title>
</svelte:head>

{#if !$preloadFinished && !$firstLoad}
  <Preload on:skipToEnd={skipToEnd} />
{/if}
<div class="app">
  <Header />
  <main>
    <slot></slot>
  </main>
  <footer></footer>
</div>
