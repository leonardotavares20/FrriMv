<script lang="ts">
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { showColumnOneGrid } from "@/lib/helpers/grid";
  import { AnimationHero } from "@/lib/animations/timelines/AnimationHero";

  import Adam from "./adam.svelte";
  import Penelope from "./penelope.svelte";
  import Hero from "@/routes/becoming/hero.svelte";
  import Observer from "@/components/observer/observer.svelte";
  import PageWrapper from "@/components/wrappers/page_wrapper.svelte";
  import PageNavigation from "@/components/page_navigation/page_navigation.svelte";
  import NavigateTransition from "@/components/transitions/navigate_transition.svelte";

  afterNavigate(() => {
    return new Promise(() => {
      showColumnOneGrid();
    });
  });

  onMount(() => {
    new AnimationHero(false).getTimeline().play();
  });
</script> 

<NavigateTransition>
  <PageNavigation>
    <a class="hover:underline" href="#adam">Adam Driver</a> <br />
    <a class="hover:underline" href="#penelope">Penelope Cruz</a>
  </PageNavigation>
  <PageWrapper>
    <Hero />
    <Adam />
    <Penelope />
  </PageWrapper>
  <Observer progressMultiplier={10} progressTarget={0.9} />
</NavigateTransition>
