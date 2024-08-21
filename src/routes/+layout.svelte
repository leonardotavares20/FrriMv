<script>
  import "../app.css";
  import Header from "@/components/header.svelte";
</script>

<svelte:head>
  <title>Ferrari - Movie</title>
</svelte:head>

<div class="app h-[100vh]">
  <Header />
  <main class="h-[100vh]">
    <slot></slot>
  </main>
  <footer></footer>
</div>
