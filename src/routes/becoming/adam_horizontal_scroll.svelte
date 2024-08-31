<script lang="ts">
  import { gsap } from "gsap";
  import { onMount } from "svelte";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";

  const teste = [
    { id: 1, src: "becoming/first_carrousel/first.webp" },
    { id: 2, src: "images_grid/grid_two.webp" },
    { id: 3, src: "images_grid/grid_three.webp" },
    { id: 4, src: "images_grid/grid_four.webp" },
  ];

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.registerPlugin(ScrollTrigger);

    // let offset: HTMLDivElement = document.querySelector("#teste")?.offsetWidth;
    const totalScrollWidth = `-${45 * (teste.length - 1)}%`;

    console.log(totalScrollWidth);

    gsap.to("#scroll", {
      left: totalScrollWidth,
      ease: "sine",
      scrollTrigger: {
        trigger: "#teste",
        scrub: 1,
        start: "top top",
        markers: true,
        end: () => "+=2000",
      },
    });
  });
</script>

<div
  id="teste"
  class="h-[350vh] flex justify-center w-[100vw] bg-red-100 teste left-0"
>
  <div class="sticky h-svh w-[400vw] top-0 bg-gradient-to-r from-indigo-500">
    <div
      id="scroll"
      class="h-[100vh] w-[400vw] flex gap-4 absolute top-0 bg-gradient-to-r from-slate-800 left-0"
    >
      {#each teste as item}
        <div
          class="w-[60vw] h-[100vh] flex justify-center items-center bg-red-300"
        >
          <img
            src={item.src}
            alt="ferrari"
            class="h-[80vh] w-[60vw] object-cover"
          />
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="h-[100vh] w-[100vw]"></div>
