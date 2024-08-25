import gsap from "gsap";

export function showColumnOneGrid() {
  gsap.to("#column_one", {
    opacity: 1,
    delay: 0.5,
  });
}
