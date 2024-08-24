import { BaseTimeline } from "@/lib/animations/bases/BaseTimeline";
import { skipPreload, completeActions } from "@/lib/helpers/preload";

export class SkipPreloadTimeline extends BaseTimeline {
  private inHome: boolean;

  constructor(status: boolean, inHome: boolean) {
    super(status);
    this.inHome = inHome;
  }

  protected setupTimeline(): void {
    if (this.inHome) {
      this.timeline.add(skipPreload()).to(
        "#container_preload__logo",
        {
          top: "100%",
          width: "97.7%",
          right: "1.5%",
          ease: "power2.out",
          duration: 0.6,
          onComplete: () => {
            completeActions();
          },
        },
        "<",
      );
    } else {
      this.timeline.add(skipPreload()).to(
        "#container_preload__logo",
        {
          delay: 0.2,
          opacity: 0,
          ease: "power2.out",
          duration: 0.6,
          onComplete: () => {
            completeActions();
          },
        },
        "<",
      );
    }
  }
}
