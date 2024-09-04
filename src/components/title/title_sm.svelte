<script lang="ts">
  export let lg = false;
  export let sm = false;
  export let uppercase = false;
</script>

<span
  class=" text-xs font-futura_bt text-center text-hells_red"
  class:lg
  class:uppercaseSubtitle={uppercase}
  class:sm><slot /></span
>

<style>
  .lg {
    @apply text-xl;
  }

  .sm {
    @apply text-xs;
  }

  .uppercaseSubtitle {
    @apply uppercase;
  }
</style>
