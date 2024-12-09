<script>
  import gsap from "gsap";
  import { onMount } from "svelte";
  import ScrollTrigger from "gsap/dist/ScrollTrigger";

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#section_target", {
      y: 0,
      scrollTrigger: {
        trigger: "#section_fixed",
        pin: "#section_target",
        start: "top top",
        end: "bottom top",
        scrub: true,
        // onUpdate: (self) => {
        //   console.log(self.progress);
        // },
      },
    });
  });
</script>

<div id="section_fixed" class="relative">
  <div id="section_target" class="sticky w-full top-0 block h-[full]">
    <slot />
  </div>
</div>
