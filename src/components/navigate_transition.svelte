<script lang="ts">
  import gsap from "gsap";
  import { onNavigate } from "$app/navigation";
  import { page } from "$app/stores";
  import { get } from "svelte/store";

  let navigate: HTMLElement;

  onNavigate(async (nav) => {
    const path = get(page).url.pathname;

    if (nav.to?.url.pathname !== path) {
      return new Promise((res) =>
        gsap.to(navigate, { opacity: 0, duration: 0.4, onComplete: res }),
      );
    }
  });
</script>

<div bind:this={navigate}>
  <slot />
</div>
