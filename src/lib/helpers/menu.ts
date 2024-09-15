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
}

export function hideMenu() {
  animateMenu("-100%", "100%", "none");
}
