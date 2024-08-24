<script lang="ts">
  import "../app.css";
  import { onMount } from "svelte";
  import { showColumns } from "@/lib/helpers/preload";
  import GridHome from "@/components/grid_home.svelte";
  import { preloadFinished, firstLoad } from "@/lib/stores/preload";
  import FirstSectionHome from "@/components/first_section_home.svelte";
  import SecondSectionHome from "@/components/second_section_home.svelte";
  import NavigateTransition from "@/components/navigate_transition.svelte";

  $: $preloadFinished && firstLoad.set(true);

  //-- Hooks -- //

  onMount(() => {
    $firstLoad && showColumns();
  });
</script>

<NavigateTransition>
  <GridHome>
    <FirstSectionHome />
  </GridHome>
  <SecondSectionHome />
</NavigateTransition>
