<script lang="ts">
  import gsap from "gsap";
  import { afterNavigate } from "$app/navigation";
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";

  let becoming: HTMLElement;

  afterNavigate(() => {
    return new Promise((res) => {
      gsap.to("#first", {
        opacity: 1,
        delay: 0.5,
      });
    });
  });

  onMount(() => {
    gsap.to("#first", {
      opacity: 1,
      ease: "power2.inOut",
      delay: 0.5,
      duration: 0.8,
      translateX: "0%",
    });
  });

  onNavigate(async () => {
    return new Promise((res) =>
      gsap.to(becoming, { opacity: 0, duration: 0.4, onComplete: res }),
    );
  });
</script>

<div bind:this={becoming}>
  <div class="h-[100vh] grid-cols-2">
    <div class="object-cover h-[100vh]">
      <img
        id="first"
        src="/images_grid/grid_one.webp"
        alt=""
        class="opacity-0 h-[100vh] -translate-x-full object-cover"
      />
    </div>
    <div>
      <h2>
        <span> Adam Driver, Penélope Cruz </span>
        Becoming Ferrari
      </h2>
    </div>
  </div>
</div>
