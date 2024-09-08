<script lang="ts">
  import { showWrapper } from "@/lib/helpers/wrapper";
  import { typeContentWrapper } from "@/lib/stores/wrapper";
  import { imageSrc } from "@/lib/stores/carrousel_gallery";
  import { onMount } from "svelte";
  import gsap from "gsap";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";

  export let sourceImage: string;

  function showImageWrapper() {
    typeContentWrapper.set("gallery");
    imageSrc.set(sourceImage);
    showWrapper();
  }

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".image_wrapper", {
      background: "transparent",
      delay: 0.5,
      scrollTrigger: {
        trigger: ".trigger_image_wrapper",
      },
    });
  });
</script>

<div class="relative h-full w-full trigger_image_wrapper grid">
  <span
    aria-hidden="true"
    on:click={showImageWrapper}
    class="cursor-pointer bg-hells_red top-0 bottom-0 left-0 right-0 absolute block h-full-full w-full z-50 image_wrapper"
  >
  </span>
  <slot />
</div>
