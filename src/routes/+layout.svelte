<script>
  import "../app.css";
</script>

<svelte:head>
  <title>Ferrari - Movie</title>
</svelte:head>

<div class="app">
  <main class="app_main">
    <slot></slot>
  </main>
  <footer></footer>
</div>

<style>
  .app {
    @apply h-[100vh];
  }

  .app_main {
    @apply h-[100vh];
  }
</style>
