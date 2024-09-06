<script lang="ts">
  import { imageSrc } from "@/lib/stores/carrousel_gallery";
</script>

<div class="h-[80vh] w-full relative flex justify-center items-end">
  <div class="h-[90%]">
    <img class="h-full object-cover" src={$imageSrc} alt="" />
  </div>
</div>
