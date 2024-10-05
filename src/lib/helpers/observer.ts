import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export function setupObserver(
  progressTarget: number,
  progressMultiplier: number,
  progressBar: HTMLElement,
): ScrollTrigger {
  return ScrollTrigger.create({
    trigger: "#app",
    start: "top top",
    scrub: true,
    end: "bottom bottom",
    onUpdate: (self) => {
      if (self.progress > progressTarget) {
        const progressAfter90 =
          (self.progress - progressTarget) * progressMultiplier;
        gsap.to(progressBar, {
          width: progressAfter90 * 100 + "%",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(progressBar, { width: "0%", duration: 0.3 });
      }
    },
  });
}
