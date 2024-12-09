import { get } from "svelte/store";
import { BaseTimeline } from "@/lib/animations/bases/BaseTimeline";
import { typeAnimationHero } from "@/lib/stores/type_animation_hero";

export class AnimationHero extends BaseTimeline {
  constructor(status: boolean) {
    super(status);
  }

  protected setupTimeline() {
    if (get(typeAnimationHero) === "default") {
      return this.timeline
        .to("#column_one", {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1.2,
          translateX: "0%",
        })
        .to("#navigation", {
          opacity: 1,
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
            onComplete: () => typeAnimationHero.set("vertical"),
          },
          0.5,
        );
    } else {
      return this.timeline
        .fromTo(
          "#hero_columns",
          {
            transform: "translateY(-100%)",
            ease: "power2.inOut",
          },
          {
            transform: "translateY(0%)",
            ease: "power2.inOut",
            duration: 1.2,
          },
        )
        .to("#column_one", {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1.2,
          translateX: "0%",
        })
        .to("#navigation", {
          opacity: 1,
        })
        .to(
          "#column_two",
          {
            opacity: 1,
            ease: "power2.inOut",
            duration: 1.2,
          },
          0,
        )
        .to(
          "#cover",
          {
            opacity: 0,
            duration: 0.4,
            onComplete: () => typeAnimationHero.set("vertical"),
          },
          0.5,
        );
    }
  }
}
