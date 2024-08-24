import gsap from "gsap";
import { pauseVideo, startVideo, preloadFinished } from "../stores/preload";

// -- Events -- //

function preventScroll(event: WheelEvent | TouchEvent) {
  event.preventDefault();
}

export function lockScroll() {
  document.addEventListener("wheel", preventScroll, { passive: false });
  document.addEventListener("touchmove", preventScroll, { passive: false });
}

export function unlockScroll() {
  document.removeEventListener("wheel", preventScroll);
  document.removeEventListener("touchmove", preventScroll);
}

// -- Animations -- //

export function showColumns() {
  gsap.to("#column", {
    opacity: 1,
    stagger: 0.5,
  });
}

// -- Timelines -- //

export function preloadTimeline() {
  return gsap
    .timeline()
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
    );
}

export function skipPreload(): GSAPTimeline {
  return gsap
    .timeline()
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
    );
}

// -- Functions -- //

export function completeActions() {
  preloadFinished.set(true);
  pauseVideo.set(true);
  unlockScroll();
  showColumns();
}
