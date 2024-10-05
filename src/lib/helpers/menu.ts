import gsap from "gsap";

function animateMenu(
  columnOneX: string | number,
  columnTwoX: string | number,
  pointerEvents: string,
) {
  gsap.to("#menu_column_one", {
    x: columnOneX,
    duration: 1.5,
    ease: "power4.inOut",
  });
  gsap.to("#menu_column_two", {
    x: columnTwoX,
    duration: 1.5,
    ease: "power4.inOut",
  });
  gsap.to("#menu", {
    pointerEvents: pointerEvents,
  });
}

export function showMenu() {
  animateMenu(0, 0, "all");
  handleWrapper(0);
}

export function hideMenu() {
  animateMenu("-100%", "100%", "none");
  handleWrapper(1, 0.5);
}

function handleWrapper(opacity: number, delay: number = 0) {
  gsap.to("#column_one_wrapper", {
    opacity: opacity,
    ease: "power4.inOut",
    duration: 2,
    delay: delay,
  });
}
