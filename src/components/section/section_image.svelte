<script lang="ts">
  export let src: string;
  export let alt: string;
  export let indexImage: number;
  import ImageWrapper from "../wrappers/image_wrapper.svelte";
</script>

<ImageWrapper {indexImage} sourceImage={src}>
  <div class="w-[100vw] h-[130vh] min-h-[500px] pb-20 mb-20">
    <img class="w-[98vw] object-cover m-auto h-[130vh]" {src} {alt} />
  </div>
</ImageWrapper>
