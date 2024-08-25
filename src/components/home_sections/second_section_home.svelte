<script lang="ts">
  import NeonCopyTerms from "../neon/neon_copy_terms.svelte";
</script>

<div class="h-[100vh] w-[100vw] relative p-6 grid items-end text-hells_red">
  <div class="text-center grid justify-center font-century">
    <blockquote class="grid items-center gap-10 justify-center max-w-[480px]">
      <p class="w-[480px] leading-8 text-[30px] mx-auto teste">
        “Mann has always balanced the intimate with the epic. Ferrari might be
        the purest expression of this.”
      </p>
      <div class="w-full flex justify-center">
        <img class="max-w-[130px]" src="/logo/vulture.webp" alt="" />
      </div>
    </blockquote>
  </div>
  <div class="flex font-futura_lt w-full items-end uppercase justify-between">
    <a class="text-xs" href="/">Legal</a>
    <div class="absolute bottom-0 right-1/2 translate-x-2/4 -translate-y-1/2">
      <NeonCopyTerms />
    </div>
    <div class="text-xs w-20 flex justify-between">
      <a href="/">Instagram</a>
      <a href="/">X</a>
    </div>
  </div>
</div>
