import { BaseTimeline } from "@/lib/animations/bases/BaseTimeline";
import { preloadTimeline, completeActions } from "@/lib/helpers/preload";

export class PreloadTimeline extends BaseTimeline {
  private inHome: boolean;
  constructor(status: boolean, inHome: boolean) {
    super(status);
    this.inHome = inHome;
  }

  protected setupTimeline(): void {
    if (this.inHome) {
      this.timeline
        .add(preloadTimeline())
        .to(
          "#logo_ferrari",
          {
            opacity: 1,
          },
          7.6,
        )
        .to(
          "#container_preload__logo",
          {
            top: "100%",
            width: "97.7%",
            right: "1.5%",
            ease: "power2.out",
            duration: 0.8,
            onComplete: () => {
              completeActions();
            },
          },
          7.6,
        );
    } else {
      this.timeline
        .add(preloadTimeline())
        .to(
          "#logo_ferrari",
          {
            opacity: 1,
          },
          7.6,
        )
        .to(
          "#container_preload__logo",
          {
            opacity: 0,
            ease: "power2.out",
            duration: 0.8,
            onComplete: () => {
              completeActions();
            },
          },
          8.2,
        )
        .to(
          "#preload",
          {
            opacity: 0,
          },
          8.5,
        )
        .fromTo(
          "#page_wrapper",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
          8.8,
        );
    }
  }
}
