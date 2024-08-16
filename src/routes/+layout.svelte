<script>
  import "../app.css";
</script>

<svelte:head>
  <title>Ferrari - Movie</title>
</svelte:head>

<div class="app">
  <main>
    <slot></slot>
  </main>
  <footer></footer>
</div>

<style>
  .app {
    @apply h-full;
  }
</style>
