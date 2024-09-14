<script lang="ts">
  export let image: { src: string; id: number; alt: string, indexImage: number };
  import ImageWrapper from "../wrappers/image_wrapper.svelte";
</script>

<ImageWrapper indexImage={image.indexImage} sourceImage={image.src}>
  <div
    class="w-[60vw] h-[100vh] flex justify-center items-center overflow-hidden"
  >
    <img
      src={image.src}
      alt={image.alt}
      class="h-[60vh] w-[60vw] object-cover overflow-hidden"
    />
  </div>
</ImageWrapper>
