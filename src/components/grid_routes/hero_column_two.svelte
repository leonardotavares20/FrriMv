<script lang="ts">
  import { typeAnimationHero } from "@/lib/stores/type_animation_hero";
</script>

<div
  id="column_two"
  class="text-hells_red grid justify-center items-end translate-x-full opacity-1"
  class:vertical={$typeAnimationHero === "vertical"}
>
  <slot />
</div>

<style>
  .vertical {
    @apply translate-x-0;
  }
</style>
