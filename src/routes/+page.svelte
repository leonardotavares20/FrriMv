<script lang="ts">
  import { onMount } from "svelte";
  import "../app.css";
  import gsap from "gsap";

  onMount(() => {
    gsap.to(".container-preload__logo", {
      scale: 1.2,
      duration: 10
    });
  });
</script>

<svelte:head>
  <title>Ferrari - Movie</title>
</svelte:head>

<div class="container-preload">
  <img class="container-preload__logo" src="/logo/logo.svg" alt="" />
</div>

<style>
  .container-preload {
    @apply h-dvh flex justify-center items-center;
  }

  .container-preload__logo {
    @apply scale-100;
  }
</style>
