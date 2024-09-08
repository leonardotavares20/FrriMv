<script lang="ts">
  export let src: string;
  export let alt: string;
  import ImageWrapper from "../wrappers/image_wrapper.svelte";
</script>

<ImageWrapper sourceImage={src}>
  <img {src} {alt} class=" w-full object-cover h-[100vh]" />
</ImageWrapper>
