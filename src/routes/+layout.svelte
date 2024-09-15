<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { get } from "svelte/store";
  import { page } from "$app/stores";
  import { afterNavigate } from "$app/navigation";
  import Header from "@/components/header/header.svelte";
  import MenuGrid from "@/components/menu/menu_grid.svelte";
  import Preload from "@/components/preload/preload.svelte";
  import { preloadFinished, firstLoad } from "@/lib/stores/preload";
  import ContentWrapper from "@/components/wrappers/content_wrapper.svelte";
  import { PreloadTimeline } from "@/lib/animations/timelines/PreloadTimeline";
  import { SkipPreloadTimeline } from "@/lib/animations/timelines/SkipPreloadTimeline";

  let timeline: GSAPTimeline;

  $: $preloadFinished && firstLoad.set(true);

  function inHome() {
    const path = get(page);
    return path.url.pathname === "/";
  }

  function skipPreloadToEnd() {
    timeline.pause();

    const skipTimeline = new SkipPreloadTimeline(false, inHome()).getTimeline();

    skipTimeline.eventCallback("onComplete", () => {
      timeline.seek(timeline.duration());
    });
  }

  // -- Hooks -- //

  onMount(() => {
    if (!$preloadFinished && !$firstLoad) {
      timeline = new PreloadTimeline(false, inHome()).getTimeline();
    }
  });

  afterNavigate(() => {
    window.scrollTo(0, 0);
  });
</script>

<svelte:head>
  <title>Ferrari - Movie</title>
</svelte:head>

<div id="app" class="app">
  <Header />
  {#if $preloadFinished}
    <ContentWrapper />
    <MenuGrid />
  {/if}
  {#if !$preloadFinished && !$firstLoad}
    <Preload on:skipToEnd={skipPreloadToEnd} />
  {/if}
  <main class="overflow-hidden">
    <slot></slot>
  </main>
  <footer></footer>
</div>
