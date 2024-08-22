<script>
  import "../app.css";
  import Header from "@/components/header.svelte";
</script>

<svelte:head>
  <title>Ferrari - Movie</title>
</svelte:head>

<div class="app">
  <Header />
  <main>
    <slot></slot>
  </main>
  <footer></footer>
</div>
