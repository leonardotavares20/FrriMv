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
      const mql = window.matchMedia("(max-width: 1024px)");
      if (mql.matches) {
        this.timeline
          .add(skipPreload())
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
            0.5,
          )
          .to(
            "#preload",
            {
              opacity: 0,
            },
            1,
          );
        return;
      }
      this.timeline.add(skipPreload()).to(
        "#ferrari_logo_preload",
        {
          top: "100%",
          width: "100%",
          right: "0.250%",
          ease: "power2.out",
          duration: 0.6,
          onComplete: () => {
            completeActions();
          },
        },
        "<",
      );
    } else {
      this.timeline
        .add(skipPreload())
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
          0.5,
        )
        .to(
          "#preload",
          {
            opacity: 0,
          },
          1,
        )
        .fromTo(
          "#page_wrapper",
          {
            opacity: 0,
          },
          {
            opacity: 1,
          },
          1.3,
        );
    }
  }
}
