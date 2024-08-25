import { BaseTimeline } from "@/lib/animations/bases/BaseTimeline";

export class GridRoutesTimeline extends BaseTimeline {
  constructor(status: boolean) {
    super(status);
  }

  protected setupTimeline(): void {
    this.timeline
      .to("#column_one", {
        opacity: 1,
        ease: "power2.inOut",
        duration: 1.2,
        translateX: "0%",
      })
      .to(
        "#column_two",
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1.2,
          translateX: "0%",
        },
        0,
      )
      .to(
        "#cover",
        {
          opacity: 0,
          duration: 0.4,
        },
        0.5,
      );
  }
}
