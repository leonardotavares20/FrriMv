<script lang="ts">
  import "../app.css";
  import gsap from "gsap";
  import { onMount } from "svelte";
  import { showColumns } from "@/lib/helpers/preload";
  import GridHome from "@/components/grid_home.svelte";
  import { preloadFinished, firstLoad } from "@/lib/stores/preload";
  import FirstSectionHome from "@/components/first_section_home.svelte";
  import SecondSectionHome from "@/components/second_section_home.svelte";
  import { onNavigate } from "$app/navigation";

  $: $preloadFinished && firstLoad.set(true);

  let element: HTMLElement;

  //-- Hooks -- //

  onNavigate(async () => {
    return new Promise((res) =>
      gsap.to(element, { opacity: 0, duration: 0.5, onComplete: res }),
    );
  });

  onMount(() => {
    $firstLoad && showColumns();
  });
</script>

<div id="teste" bind:this={element}>
  <GridHome>
    <FirstSectionHome />
  </GridHome>
  <SecondSectionHome />
</div>
