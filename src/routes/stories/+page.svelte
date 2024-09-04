<script lang="ts">
  import Hero from "./hero.svelte";
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { showColumnOneGrid } from "@/lib/helpers/grid";
  import PageWrapper from "@/components/wrappers/page_wrapper.svelte";
  import { GridRoutesTimeline } from "@/lib/animations/timelines/GridRoutesTimeline";
  import NavigateTransition from "@/components/transitions/navigate_transition.svelte";
  import MilleMiglia from "./mille_miglia.svelte";
  import ContentWrapper from "@/components/wrappers/content_wrapper.svelte";

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
    <ContentWrapper />
    <Hero />
    <MilleMiglia />
  </PageWrapper>
</NavigateTransition>
