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

  let progressBar: HTMLDivElement;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: "#app",
      start: "top top",
      scrub: true,
      end: "bottom bottom",
      onUpdate: (self) => {
        if (self.progress > 0.9) {
          const progressAfter90 = (self.progress - 0.9) * 10;
          gsap.to(progressBar, {
            width: progressAfter90 * 100 + "%",
            duration: 0.3,
            ease: "power2.out",
          });
        } else {
          gsap.to(progressBar, { width: "0%", duration: 0.3 });
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
  <div
    bind:this={progressBar}
    class="fixed w-0 h-[10px] bg-hells_red bottom-0"
  ></div>
</NavigateTransition>
