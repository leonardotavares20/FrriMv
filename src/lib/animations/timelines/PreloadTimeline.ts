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
      const mql = window.matchMedia("(max-width: 1024px)");
      if (mql.matches) {
        this.timeline
          .add(preloadTimeline())
          .to(
            "#ferrari_logo_preload",
            {
              delay: 0.2,
              opacity: 0,
              ease: "power2.out",
              duration: 0.6,
              onComplete: () => {
                completeActions();
              },
            },
            7.9,
          )
          .to(
            "#preload",
            {
              opacity: 0,
            },
            8.4,
          );
        return;
      }
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
          "#ferrari_logo_preload",
          {
            top: "100%",
            width: "100%",
            right: "0.250%",
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
          "#ferrari_logo_preload",
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
