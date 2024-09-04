<script lang="ts">
  export let src: string;
  export let alt: string;
</script>

<div class="w-[100vw] h-[130vh] pb-20 mb-20">
  <img class="w-[98vw] object-cover m-auto" {src} {alt} />
</div>
