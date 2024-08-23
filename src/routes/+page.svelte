<script lang="ts">
  import "../app.css";
  import gsap from "gsap";
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";
  import { showColumns } from "@/lib/helpers/preload";
  import GridHome from "@/components/grid_home.svelte";
  import { preloadFinished, firstLoad } from "@/lib/stores/preload";
  import FirstSectionHome from "@/components/first_section_home.svelte";
  import SecondSectionHome from "@/components/second_section_home.svelte";

  $: $preloadFinished && firstLoad.set(true);

  let home: HTMLElement;

  //-- Hooks -- //

  onNavigate(async () => {
    return new Promise((res) =>
      gsap.to(home, { opacity: 0, duration: 0.4, onComplete: res }),
    );
  });

  onMount(() => {
    $firstLoad && showColumns();
  });
</script>

<div bind:this={home}>
  <GridHome>
    <FirstSectionHome />
  </GridHome>
  <SecondSectionHome />
</div>
