<script lang="ts">
  import { onMount } from "svelte";
  import { afterNavigate } from "$app/navigation";
  import { showColumnOneGrid } from "@/lib/helpers/grid";
  import { GridRoutesTimeline } from "@/lib/animations/timelines/GridRoutesTimeline";

  import gsap from "gsap";
  import Adam from "./adam.svelte";
  import Penelope from "./penelope.svelte";
  import Hero from "@/routes/becoming/hero.svelte";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import PageWrapper from "@/components/wrappers/page_wrapper.svelte";
  import PageNavigation from "@/components/page_navigation/page_navigation.svelte";
  import NavigateTransition from "@/components/transitions/navigate_transition.svelte";

  afterNavigate(() => {
    return new Promise(() => {
      showColumnOneGrid();
    });
  });

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#app",
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        // gsap.to(progressBar, {
        //   width: self.progress * 100 + "%",
        // });
        if (self.progress == 1) {
          console.log("self.progress", self.progress);
        }
      },
    });

    new GridRoutesTimeline(false).getTimeline().play();
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
</NavigateTransition>
