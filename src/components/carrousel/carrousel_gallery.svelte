<script lang="ts">
  import { carrousel_images } from "@/lib/assets/carrousel/carrousel_images";
  import { indexImageSrc } from "@/lib/stores/carrousel_gallery";
  import { imageSrc } from "@/lib/stores/carrousel_gallery";
  import gsap from "gsap";

  let currentIndex: number | null = null;
  let carrousel: HTMLDivElement;

  function handleIndex(index: number) {
    currentIndex = index;
  }

  function handleLeave() {
    currentIndex = null;
  }

  function setCurrentImage(event: Event, index: number) {
    const target = event.currentTarget as HTMLImageElement;

    const imageOffset = target.offsetLeft;
    const carrouselOffset = carrousel.offsetLeft;

    const maxOffset =
      ((carrousel.scrollWidth - carrousel.clientWidth) /
        carrousel.clientWidth) *
      100;

    const x = Math.min(
      Math.max(
        ((imageOffset - carrouselOffset) / carrousel.offsetWidth) * 100,
        0,
      ),
      maxOffset,
    );

    gsap.to("#carrousel", {
      x: `-${x}%`,
      ease: "power1.inOut",
      duration: 0.5,
    });
    indexImageSrc.set(index);
    imageSrc.set(target.src);
  }
</script>

<div
  id="carrousel_images"
  class="w-[98vw] h-[20vh] font-futura_lt opacity-100 border-t-hells_red border-t-[1px]"
>
  <div
    id="carrousel"
    bind:this={carrousel}
    class="absolute w-full h-[95%] left-[51%] -translate-x-1/2 top-0 flex gap-2 pb-6 pt-2"
  >
    {#each carrousel_images as image, index}
      <img
        loading="lazy"
        aria-hidden="true"
        on:click={(event) => setCurrentImage(event, index)}
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
