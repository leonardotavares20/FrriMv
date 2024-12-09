<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { showHome } from "@/lib/helpers/preload";
  import GridHome from "@/components/grid_home/grid_home.svelte";
  import { preloadFinished, firstLoad } from "@/lib/stores/preload";
  import FirstSectionHome from "@/components/home_sections/first_section_home.svelte";
  import SecondSectionHome from "@/components/home_sections/second_section_home.svelte";
  import NavigateTransition from "@/components/transitions/navigate_transition.svelte";
  import { typeAnimationHero } from "@/lib/stores/type_animation_hero";

  $: $preloadFinished && firstLoad.set(true);

  //-- Hooks -- //

  onMount(() => {
    $firstLoad && showHome();
    typeAnimationHero.set("default");
  });
</script>

<NavigateTransition>
  <GridHome>
    <FirstSectionHome />
  </GridHome>
  <SecondSectionHome />
</NavigateTransition>
