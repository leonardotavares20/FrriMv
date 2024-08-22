import gsap from "gsap";

export abstract class BaseTimeline {
  protected status: boolean;
  protected timeline: gsap.core.Timeline;

  constructor(status: boolean) {
    this.status = status;
    this.timeline = gsap.timeline({ paused: this.status });
  }

  protected abstract setupTimeline(): void;

  public getTimeline(): GSAPTimeline {
    this.setupTimeline();
    return this.timeline;
  }
}
