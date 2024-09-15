<script lang="ts">
  import MenuColumnOne from "./menu_column_one.svelte";
  import MenuColumnTwo from "./menu_column_two.svelte";
</script>

<div id="menu" class="w-svw h-svh grid grid-cols-2 fixed z-[100] pointer-events-none">
  <MenuColumnOne />
  <MenuColumnTwo />
</div>
