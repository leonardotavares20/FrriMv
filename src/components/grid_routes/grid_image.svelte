<script lang="ts">
  export let src: string;
  export let alt: string;
  export let indexImage: number;
  import ImageWrapper from "../wrappers/image_wrapper.svelte";
</script>

<ImageWrapper {indexImage} sourceImage={src}>
  <img class="h-[100vh] w-full z-10 relative object-cover" {src} {alt} />
</ImageWrapper>
