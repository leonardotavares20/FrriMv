<script lang="ts">
  import { selectedIndexImage } from "@/lib/stores/carrousel_gallery";
  import { carrousel_images } from "@/lib/assets/carrousel/carrousel_images";
  import { setCurrentImage } from "@/lib/helpers/carrousel";

  function setCarrousel(event: Event | null, index: number) {
    setCurrentImage(event, index);
  }
</script>

<div
  id="carrousel_images"
  class="w-[98vw] h-[20vh] font-futura_lt opacity-0 border-t-hells_red border-t-[1px]"
>
  <div
    id="carrousel"
    class="absolute w-full h-[95%] left-[50.5%] -translate-x-1/2 top-0 right-0 flex gap-2 pb-6 pt-2"
  >
    {#each carrousel_images as image, index}
      <img
        loading="lazy"
        aria-hidden="true"
        on:click={(event) => setCarrousel(event, index)}
        class:inactive={$selectedIndexImage !== index}
        class:activeImage={$selectedIndexImage === index}
        src={image.src}
        alt=""
        class="cursor-pointer transition-all"
      />
    {/each}
  </div>
</div>

<style>
  .activeImage {
    @apply brightness-100 transition-all;
  }

  .inactive {
    @apply brightness-[30%] transition-all;
  }

  img:hover:not(.activeImage) {
    @apply brightness-100 transition-all;
  }
</style>
