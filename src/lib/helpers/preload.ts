import gsap from "gsap";

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

export function showColumns() {
  gsap.to("#column", {
    opacity: 1,
    stagger: 0.5,
  });
}
