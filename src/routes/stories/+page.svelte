<script lang="ts">
  import Hero from "./hero.svelte";
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { showColumnOneGrid } from "@/lib/helpers/grid";
  import { GridRoutesTimeline } from "@/lib/animations/timelines/GridRoutesTimeline";

  import MilleMiglia from "./mille_miglia.svelte";
  import Observer from "@/components/observer/observer.svelte";
  import PageWrapper from "@/components/wrappers/page_wrapper.svelte";
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
    <MilleMiglia />
  </PageWrapper>
  <Observer progressMultiplier={10} progressTarget={0.9} />
</NavigateTransition>
