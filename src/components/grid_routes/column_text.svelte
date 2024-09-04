<script lang="ts">
  export let start: boolean = false;
  export let end: boolean = false;
</script>

<div class:end class:start class="flex justify-center items-center font-century pt-5 overflow-hidden">
  <slot />
</div>

<style>
  .start {
    @apply justify-start px-5
  }

  .end {
    @apply justify-end px-5
  }
</style>
