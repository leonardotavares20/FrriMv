import gsap from "gsap";
import { BaseTimeline } from "@/lib/animations/bases/BaseTimeline";
import { lockScroll, unlockScroll, showColumns } from "@/lib/helpers/preload";
import { startVideo, pauseVideo, preloadFinished } from "@/lib/stores/preload";

export class PreloadTimeline extends BaseTimeline {
  constructor(status: boolean) {
    super(status);
  }

  protected setupTimeline(): void {
    this.timeline
      .to(
        "#container_preload__logo",
        {
          width: "90%",
          ease: "power1.inOut",
          duration: 7,
          onStart: () => {
            lockScroll();
          },
        },
        1.1,
      )
      .to(
        "#container_preload__video",
        {
          opacity: 1,
          duration: 2,
          onStart: () => {
            startVideo.set(true);
          },
        },
        1.1,
      )
      .to(
        "#container_preload__video",
        {
          opacity: 0,
          duration: 0.4,
        },
        7.6,
      )
      .to(
        "#container_preload__container_copy_click",
        {
          opacity: 0,
          duration: 0.4,
        },
        7.4,
      )
      .to(
        "#container_preload__logo",
        {
          top: "100%",
          width: "98%",
          ease: "power2.out",
          duration: 0.8,
          onComplete: () => {
            preloadFinished.set(true);
            pauseVideo.set(true);
            unlockScroll();
            showColumns();
          },
        },
        7.6,
      );
  }
}
