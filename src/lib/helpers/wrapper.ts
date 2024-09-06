import gsap from "gsap";
import { typeContentWrapper, playVideo } from "../stores/wrapper";
import { lockScroll, unlockScroll } from "./preload";

// -- Wrapper -- //

let timeline: gsap.core.Timeline;

function setupWrapper() {
  return gsap
    .timeline({
      paused: true,
      onStart: () => actionsWrapperStart(),
      onComplete: () => actionsWrapperShow(),
      onReverseComplete: () => actionsWrapperHide(),
    })
    .to("#wrapper_content", {
      bottom: 0,
      duration: 1,
      ease: "expo",
    });
}

export function showWrapper() {
  timeline = setupWrapper();
  timeline.play();
}

export function hideWrapper() {
  timeline.reverse();
}

// -- Actions wrapper -- //

function actionsWrapperHide() {
  unlockScroll();
  typeContentWrapper.set("gallery");
  playVideo.set(false);
  hideWrapperMainContent();
}

function actionsWrapperStart() {
  lockScroll();
  showWrapperMainContent();
}

function actionsWrapperShow() {
  playVideo.set(true);
}

// -- Wrapper main content -- //

function hideWrapperMainContent() {
  actionsWrapperMainContent(0, 0, 0);
}

function showWrapperMainContent() {
  actionsWrapperMainContent(1, 1, 1);
}

function actionsWrapperMainContent(
  opacity: number,
  delay: number = 0,
  duration: number = 1,
) {
  gsap.to("#content_main_wrapper", {
    opacity: opacity,
    duration: duration,
    ease: "expo.inOut",
  });
  gsap.to("#carrousel_images", {
    opacity: opacity,
    duration: duration,
    delay: delay,
  });
}
