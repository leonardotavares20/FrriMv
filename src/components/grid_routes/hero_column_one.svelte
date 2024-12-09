<script lang="ts">
  import { typeAnimationHero } from "@/lib/stores/type_animation_hero";
</script>

<div
  id="column_one"
  class="object-cover opacity-1 -translate-x-full h-[100vh] relative"
  class:translate-x-0={$typeAnimationHero === "vertical"}
>
  <slot />
</div>
