import { BaseTimeline } from "@/lib/animations/bases/BaseTimeline";
import { unlockScroll, showColumns } from "@/lib/helpers/preload";
import { pauseVideo, preloadFinished } from "@/lib/stores/preload";

export class SkipPreloadTimeline extends BaseTimeline {
  constructor(status: boolean) {
    super(status);
  }

  protected setupTimeline(): void {
    this.timeline
      .to("#container_preload__video", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          pauseVideo.set(true);
        },
      })
      .to(
        "#container_preload__container_copy_click",
        {
          opacity: 0,
          duration: 0.4,
        },
        0.15,
      )
      .to(
        "#container_preload__logo",
        {
          top: "100%",
          width: "98%",
          ease: "power2.out",
          duration: 0.6,
          onComplete: () => {
            preloadFinished.set(true);
            unlockScroll();
            showColumns();
          },
        },
        "<",
      );
  }
}
