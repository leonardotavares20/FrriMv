import gsap from "gsap";
import { typeContentWrapper, playVideo } from "../stores/wrapper";
import { lockScroll, unlockScroll } from "./preload";

// -- Wrapper -- //

export function showWrapper() {
  gsap.to("#wrapper_content", {
    bottom: 0,
    duration: 1.2,
    ease: "expo",
    onStart: () => {
      lockScroll();
    },
    onComplete: () => {
      actionsWrapperShow();
    },
  });
}

export function hideWrapper() {
  gsap.to("#wrapper_content", {
    bottom: "100%",
    duration: 1.5,
    ease: "expo.inOut",
    onComplete: () => {
      actionsWrapperHide();
    },
  });
}

// -- Actions wrapper -- //

function actionsWrapperHide() {
  unlockScroll();
  typeContentWrapper.set("none");
  playVideo.set(false);
  hideWrapperMainContent();
}

function actionsWrapperShow() {
  showWrapperMainContent();
  playVideo.set(true);
}

// -- Wrapper main content -- //

function hideWrapperMainContent() {
  gsap.to("#content_main_wrapper", {
    opacity: 0,
    duration: 0.5,
    ease: "expo.inOut",
  });
}

function showWrapperMainContent() {
  gsap.to("#content_main_wrapper", {
    opacity: 1,
    duration: 0.5,
    ease: "expo.inOut",
  });
}
