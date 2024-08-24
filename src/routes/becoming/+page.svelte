<script lang="ts">
  import gsap from "gsap";
  import { onMount } from "svelte";
  import { onNavigate } from "$app/navigation";
  import Cover from "@/components/cover.svelte";
  import { afterNavigate } from "$app/navigation";

  let becoming: HTMLElement;

  afterNavigate(() => {
    return new Promise((res) => {
      gsap.to("#column_one", {
        opacity: 1,
        delay: 0.5,
      });
    });
  });

  onMount(() => {
    let timeline = gsap.timeline();

    timeline
      .to("#column_one", {
        opacity: 1,
        ease: "power2.inOut",
        duration: 1.2,
        translateX: "0%",
      })
      .to(
        "#column_two",
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1.2,
          translateX: "0%",
        },
        0,
      )
      .to(
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

<nav class="fixed font-futura_lt w-[100px] right-[300px] h-4 z-50 top-[25px] text-hells_red text-[14px] leading-4">
  <a class="hover:underline" href="#adam">Adam Driver</a> <br>
  <a class="hover:underline" href="#penelope">Penelope Cruz</a>
</nav>
<div bind:this={becoming}>
  <div class="h-[100vh] grid grid-cols-2">
    <div
      id="column_one"
      class="object-cover opacity-0 -translate-x-full h-[100vh] relative"
    >
      <Cover />
      <img
        src="/images_grid/grid_one.webp"
        alt=""
        class="h-[100vh] w-full z-10 relative object-cover"
      />
    </div>
    <div
      id="column_two"
      class="text-hells_red grid justify-center items-end translate-x-full opacity-0"
    >
      <h2
        class="text-center font-futura_lt text-[140px] uppercase leading-[125px] pb-7"
      >
        <span class=" text-xs font-futura_bt">
          Adam Driver, Penélope Cruz
        </span> <br />
        Becoming <br /> Ferrari
      </h2>
    </div>
  </div>
</div>
