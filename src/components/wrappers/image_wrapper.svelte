<script lang="ts">
  import { showWrapper } from "@/lib/helpers/wrapper";
  import { imageSrc } from "@/lib/stores/carrousel_gallery";
  import { typeContentWrapper } from "@/lib/stores/wrapper";
  import { selectedIndexImage } from "@/lib/stores/carrousel_gallery";
  import { setCurrentImage } from "@/lib/helpers/carrousel";
  import { animateWrapperImage } from "@/lib/actions/image_wrapper";

  export let sourceImage: string;
  export let indexImage: number;

  function showImageWrapper() {
    typeContentWrapper.set("gallery");
    setCurrentImage(null, indexImage - 1);
    selectedIndexImage.set(indexImage - 1);
    imageSrc.set(sourceImage);
    showWrapper();
  }
</script>

<div
  id="trigger_image_wrapper"
  class="relative h-full w-full trigger_image_wrapper grid"
>
  <span
    id="image_wrapper"
    aria-hidden="true"
    on:click={showImageWrapper}
    use:animateWrapperImage={{
      opacity: 0,
      delay: 0.5,
    }}
    class="cursor-pointer bg-hells_red top-0 bottom-0 left-0 right-0 absolute block h-full w-full z-50 image_wrapper"
  >
  </span>
  <slot />
</div>
