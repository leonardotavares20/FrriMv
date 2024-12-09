import gsap from "gsap";

export function animateWrapperImage(
  node: HTMLSpanElement,
  { opacity = 1, delay = 1 },
) {
  const animation = gsap.to(node, {
    opacity,
    delay,
  });

  return {

    update(newParams: GSAPTweenVars) {
      animation.vars = { ...animation.vars, ...newParams };
    },
    destroy() {
      animation.kill();
    },
  };
}
