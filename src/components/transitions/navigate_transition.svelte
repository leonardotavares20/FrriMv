<script lang="ts">
  import gsap from "gsap";
  import { page } from "$app/stores";
  import { get } from "svelte/store";
  import { onNavigate } from "$app/navigation";

  let navigate: HTMLElement;

  const path = get(page).url.pathname;

  onNavigate(async (nav) => {
    if (nav.to?.url.pathname !== path) {
      return new Promise((res) =>
        gsap.to(navigate, {
          opacity: 0,
          duration: 0.4,
          onComplete: res,
        }),
      );
    }
  });
</script>

<div id="navigate" bind:this={navigate}>
  <slot />
</div>
