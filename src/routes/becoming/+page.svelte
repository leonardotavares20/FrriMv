<script lang="ts">
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { showColumnOneGrid } from "@/lib/helpers/grid";
  import { GridRoutesTimeline } from "@/lib/animations/timelines/GridRoutesTimeline";

  import Adam from "./adam.svelte";
  import Hero from "@/routes/becoming/hero.svelte";
  import PageWrapper from "@/components/wrappers/page_wrapper.svelte";
  import ContentWrapper from "@/components/wrappers/content_wrapper.svelte";
  import PageNavigation from "@/components/page_navigation/page_navigation.svelte";
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
  <PageNavigation>
    <a class="hover:underline" href="#adam">Adam Driver</a> <br />
    <a class="hover:underline" href="#penelope">Penelope Cruz</a>
  </PageNavigation>
  <PageWrapper>
    <ContentWrapper />
    <Hero />
    <Adam />
  </PageWrapper>
</NavigateTransition>
