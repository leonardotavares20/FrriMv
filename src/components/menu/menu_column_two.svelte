<script lang="ts">
  import { menu } from "@/lib/assets/menu/menu";
  import NeonCopyTerms from "../neon/neon_copy_terms.svelte";
  import { hideMenu } from "@/lib/helpers/menu";
  import { menuOpen } from "@/lib/stores/menu";

  let currentIndex: number | null = null;

  function handleMenu() {
    menuOpen.set(false);
    hideMenu();
  }

  function handleIndex(index: number) {
    currentIndex = index;
  }

  function handleLeave() {
    currentIndex = null;
  }
</script>

<div
  id="menu_column_two"
  class="h-svh w-full bg-black text-hells_red translate-x-full"
>
  <div class="grid grid-rows-3 h-full w-full">
    <div></div>
    <ul class="flex flex-col justify-between w-full px-4">
      {#each menu as item, index}
        <a class="w-full" href={item.href}>
          <li
            on:click={handleMenu}
            aria-hidden="true"
            class:active={index === currentIndex}
            class:first={item.first}
            on:mouseleave={handleLeave}
            on:mouseenter={handleIndex.bind(null, index)}
            class:off={currentIndex !== null && currentIndex !== index}
            class="self-center font-futura_lt_bold uppercase text-6xl border-t-2 w-full border-hells_red py-1"
          >
            {item.text}
          </li>
        </a>
      {/each}
    </ul>
    <div class="flex p-4">
      <div class="self-end flex justify-between items-end w-full">
        <NeonCopyTerms start />
        <div class=" w-20 flex justify-between font-futura_lt text-base">
          <a href="/">Instagram</a>
          <a href="/">X</a>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .active {
    @apply transition-all;
  }

  .off {
    @apply opacity-100 transition-all brightness-50;
  }

  .first {
    @apply border-t-0;
  }
</style>
