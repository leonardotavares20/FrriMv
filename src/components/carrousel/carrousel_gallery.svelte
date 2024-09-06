<script lang="ts">
  import { carrousel_images } from "@/lib/assets/carrousel/carrousel_images";
  import { indexImageSrc } from "@/lib/stores/carrousel_gallery";

  let currentIndex: number | null = null;

  function handleIndex(index: number) {
    currentIndex = index;
  }

  function handleLeave() {
    currentIndex = null;
  }
</script>

<div id="carrousel_images" class="w-[97vw] h-[20vh] font-futura_lt opacity-0">
  <div
    class="absolute w-full h-[95%] left-[51.5%] -translate-x-1/2 top-0 flex gap-2 pb-6 pt-2 border-t-hells_red border-t-[1px]"
  >
    {#each carrousel_images as image, index}
      <img
        loading="lazy"
        on:mouseenter={handleIndex.bind(null, index)}
        on:mouseleave={handleLeave}
        class:inactive={currentIndex !== index && $indexImageSrc !== index}
        class:activeImage={$indexImageSrc === index}
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
