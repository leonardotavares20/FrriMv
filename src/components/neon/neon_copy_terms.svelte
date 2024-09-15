<script lang="ts">
  import NeonLogo from "@/components/neon/neon_logo.svelte";
  export let start: boolean = false;
</script>

<div
  class="uppercase w-24 font-futura_bt text-hells_red text-center font-semibold"
>
  <span class="flex justify-center text-xs gap-1" class:start>
    A <NeonLogo /> Movie
  </span>
  <p class="text-[8px] leading-[8px] mt-1 font-semibold" class:start>
    Copyrights © Neon 2023
  </p>
  <p class="text-[8px] font-semibold" class:start >All rights reserved</p>
</div>

<style>
  .start {
    @apply justify-start text-start;
  }
</style>
