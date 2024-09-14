<script lang="ts">
  export let src: string;
  export let alt: string;
  export let indexImage: number;
  import ImageWrapper from "../wrappers/image_wrapper.svelte";
</script>

<ImageWrapper {indexImage} sourceImage={src}>
  <img {src} {alt} class=" w-full object-cover h-[100vh]" />
</ImageWrapper>
