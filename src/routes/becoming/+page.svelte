<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";
  import Cover from "@/components/cover.svelte";
  import { afterNavigate } from "$app/navigation";

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
    let timeline = gsap.timeline();

    timeline.to("#first", {
      opacity: 1,
      ease: "power2.inOut",
      duration: 1.2,
      translateX: "0%",
    });
    timeline.to(
      "#cover",
      {
        opacity: 0,
        duration: 0.4,
      },
      0.5,
    );
  });

  onNavigate(async () => {
    return new Promise((res) =>
      gsap.to(becoming, { opacity: 0, duration: 0.4, onComplete: res }),
    );
  });
</script>

<div bind:this={becoming}>
  <div class="h-[100vh] grid grid-cols-2">
    <div
      id="first"
      class="object-cover opacity-0 -translate-x-full h-[100vh] relative"
    >
      <Cover />
      <img
        src="/images_grid/grid_one.webp"
        alt=""
        class="h-[100vh] w-full z-10 relative object-cover"
      />
    </div>
    <div class="text-hells_red">
      <h2>
        <span> Adam Driver, Penélope Cruz </span>
        Becoming Ferrari
      </h2>
    </div>
  </div>
</div>
