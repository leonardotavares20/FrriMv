<script lang="ts">
  import { showMenu } from "@/lib/helpers/menu";
  import { hideMenu } from "@/lib/helpers/menu";
  import { menuOpen } from "@/lib/stores/menu";

  function handleMenu() {
    $menuOpen ? hideMenu() : showMenu();
    $menuOpen = !$menuOpen;
  }
</script>

<header class="fixed w-[100vw] h-4 z-[200] top-6 header">
  <div
    class="flex justify-between px-5 text-[12px] text-hells_red font-futura_lt uppercase"
  >
    <div class="w-[20vw] max-w-[165px] flex justify-between">
      <a class="hover:underline" href="/">Ferrari</a>
      <a class="hover:underline" href="/">Get Tickets</a>
    </div>
    <div class="flex w-[20vw] pr-3 max-w-[180px] justify-between">
      <div class="flex gap-4 border-r-red-300">
        <a class="underline" href="/">Red</a>
        <a class="underline" href="/">White</a>
      </div>
      <div>
        <span
          class="underline cursor-pointer"
          on:click={handleMenu}
          aria-hidden="true">{@html $menuOpen ? "Close" : "Menu"}</span
        >
      </div>
    </div>
  </div>
</header>
