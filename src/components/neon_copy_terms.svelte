<script lang="ts">
  import NeonLogo from "@/components/neon_logo.svelte";
</script>

<div class="copy_terms">
  <span class="copy_terms__neon_brand">
    A <NeonLogo /> Movie
  </span>
  <p class="copy_terms__copy">Copyrights © Neon 2023</p>
  <p class="copy_terms__rights">All rights reserved</p>
</div>

<style>
  .copy_terms {
    @apply uppercase text-center font-semibold;
  }

  .copy_terms__neon_brand {
    @apply flex justify-center text-xs gap-1;
  }

  .copy_terms__copy {
    @apply text-[8px] mt-1 font-semibold;
  }

  .copy_terms__rights {
    @apply text-[8px] font-semibold;
  }
</style>
