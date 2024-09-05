<script lang="ts">
  import Hero from "./hero.svelte";
  import { onMount } from "svelte";
  import ChapterOne from "./chapter_one.svelte";
  import { afterNavigate } from "$app/navigation";
  import { showColumnOneGrid } from "@/lib/helpers/grid";
  import BuildingPerfection from "./building_perfection.svelte";
  import PageWrapper from "@/components/wrappers/page_wrapper.svelte";
  import { GridRoutesTimeline } from "@/lib/animations/timelines/GridRoutesTimeline";
  import NavigateTransition from "@/components/transitions/navigate_transition.svelte";

  afterNavigate(() => {
    return new Promise(() => {
      showColumnOneGrid();
    });
  });

  onMount(() => {
    new GridRoutesTimeline(false).getTimeline().play();
  });
</script>

<NavigateTransition>
  <PageWrapper>
    <Hero />
    <ChapterOne />
    <BuildingPerfection />
  </PageWrapper>
</NavigateTransition>
