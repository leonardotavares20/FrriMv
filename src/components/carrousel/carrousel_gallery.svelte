<script lang="ts">
  import { carrousel_images } from "@/lib/assets/carrousel/carrousel_images";

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
        on:mouseleave={handleLeave}
        on:mouseenter={handleIndex.bind(null, index)}
        loading="lazy"
        class:active={index === currentIndex}
        class:off={currentIndex !== null && currentIndex !== index}
        src={image.src}
        alt=""
        class="cursor-pointer"
      />
    {/each}
  </div>
</div>

<style>
  .active {
    @apply transition-all;
  }

  .off {
    @apply opacity-100 transition-all brightness-50;
  }
</style>
