<script lang="ts">
  import { gsap } from "gsap";
  import { beforeUpdate, afterUpdate, onMount } from "svelte";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";
  import { beforeNavigate } from "$app/navigation";

  // const teste = [
  //   { id: 1, src: "stories/carrousel/first.webp" },
  //   { id: 2, src: "stories/carrousel/second.webp" },
  //   { id: 3, src: "stories/carrousel/third.webp" },
  //   { id: 4, src: "stories/carrousel/fourth.webp" },
  //   { id: 5, src: "stories/carrousel/fifth.webp" },
  //   { id: 6, src: "stories/carrousel/sixth.webp" },
  //   { id: 7, src: "stories/carrousel/seventh.webp" },
  //   { id: 8, src: "stories/carrousel/eighth.webp" },
  // ];

  const teste = [
    { id: 1, src: "becoming/first_carrousel/first.webp" },
    { id: 2, src: "becoming/first_carrousel/second.webp" },
    { id: 3, src: "becoming/first_carrousel/third.webp" },
    { id: 4, src: "becoming/first_carrousel/fourth.webp" },
  ];

  let totalWidth = 0;

  function calculateTotalWidth() {
    const images = document.querySelectorAll<HTMLImageElement>("#scroll img");
    totalWidth = 0;
    images.forEach((img) => {
      totalWidth += img.offsetWidth;
    });
  }

  function setupScrollAnimation() {
    calculateTotalWidth();
    const maxScroll = ((totalWidth - window.innerWidth) / totalWidth) * 100;

    gsap.to("#scroll", {
      xPercent: -maxScroll,
      ease: "none",
      scrollTrigger: {
        trigger: "#teste",
        scrub: 2,
        pin: true,
        start: "start end",
        end: () => "+=100%",
      },
    });
  }

  beforeNavigate(() => {
    ScrollTrigger.killAll(true);
  });

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    setupScrollAnimation();
  });
</script>

<div
  id="wrapper_scroll"
  class="h-[200vh] flex justify-center w-[100vw] teste overflow-hidden"
>
  <div id="teste" class="sticky h-svh w-[400vw] top-0">
    <div
      id="scroll"
      style="width: ${totalWidth}px;"
      class="h-[100vh] flex gap-4 absolute pl-5 pr-[60px] left-0"
    >
      {#each teste as item}
        <div
          class="w-[60vw] h-[100vh] flex justify-center items-center overflow-hidden"
        >
          <img
            src={item.src}
            alt="ferrari"
            class="h-[60vh] w-[60vw] object-cover overflow-hidden"
          />
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="w-[100vw] grid grid-cols-2 px-5">
  <img
    src="/becoming/adam/first.webp"
    class="order-2 h-full w-full object-cover"
    alt=""
  />
  <div class="order-1 flex justify-center items-center font-century">
    <div class="max-w-md">
      <blockquote class="m-auto h-56 flex flex-col justify-between">
        <p class="text-hells_red font-thin text-[15px] leading-6">
          <span class="float-left mr-2 pb-1 pt-[2px]">
            <svg
              width="31"
              height="22"
              viewBox="0 0 31 22"
              fill="#CE0000"
              xmlns="http://www.w3.org/2000/svg"
              class="w-[20px]"
              ><path
                d="M30.8648 0L20.3648 21.42H13.3648L20.3648 0H30.8648ZM17.6348 0L7.13477 21.42H0.134766L7.13477 0H17.6348Z"
                fill="#CE0000"
              ></path></svg
            >
          </span>
          To me, Enzo is kind of a duck. He's calm on the surface but he's furiously
          paddling underneath. It's always more interesting to me to play characters
          where you have to hunt for it. That's what I like about good writing. It's
          not telling you what you're supposed to be feeling, and characters aren't
          saying everything that they're feeling. That's more real to me.
        </p>
        <p class="text-hells_red font-futura_bt uppercase text-xl">
          Adam Driver, Actor
        </p>
      </blockquote>
    </div>
  </div>
</div>

<div class=" w-[100vw] grid grid-cols-2 px-5">
  <img
    src="/becoming/adam/second.webp"
    class="order-1 h-full w-full object-cover"
    alt=""
  />
  <div class="order-2 flex justify-center items-center font-century">
    <div class="max-w-md">
      <blockquote
        class="m-auto h-64 w-96 flex flex-col items-center justify-between"
      >
        <p class="text-hells_red font-thin text-3xl text-center">
          “Adam Driver's performance is wonderfully alive. You can't take your
          eyes off him.”
        </p>
        <img class="w-[130px]" src="/logo/vulture.webp" alt="" />
      </blockquote>
    </div>
  </div>
</div>
