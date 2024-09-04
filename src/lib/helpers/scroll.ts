import gsap from "gsap";

let totalWidth = 0;

export function calculateTotalWidthImages(
  images: NodeListOf<HTMLImageElement>,
) {
  totalWidth = 0;
  Array.from(images).forEach((img) => {
    totalWidth += img.offsetWidth;
  });

  return totalWidth;
}

function showMessageScroll() {
  gsap.to("#horizontal_scroll_message", {
    opacity: 1,
  });
}

function hideMessageScroll() {
  gsap.to("#horizontal_scroll_message", {
    opacity: 0,
  });
}

export function setupScrollAdam(maxScroll: number) {
  gsap.to("#scroll_adam", {
    xPercent: -maxScroll,
    ease: "none",
    scrollTrigger: {
      trigger: "#container_scroll_adam",
      scrub: 4,
      pin: true,
      start: "start end",
      end: () => "+=100%",
      onUpdate: (self) => {
        if (self.progress >= 0.2 && self.progress <= 0.8) {
          showMessageScroll();
        } else {
          hideMessageScroll();
        }
      },
    },
  });
}

export function setupScrollPenelope(maxScroll: number) {
  gsap.to("#scroll_penelope", {
    xPercent: -maxScroll,
    ease: "none",
    scrollTrigger: {
      trigger: "#container_scroll_penelope",
      scrub: 4,
      pin: true,
      start: "start end",
      end: () => "+=100%",
      onUpdate: (self) => {
        if (self.progress >= 0.2 && self.progress <= 0.8) {
          showMessageScroll();
        } else {
          hideMessageScroll();
        }
      },
    },
  });
}
