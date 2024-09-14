import { imageSrc, selectedIndexImage } from "../stores/carrousel_gallery";
import gsap from "gsap";

export function setCurrentImage(event: Event | null, index: number) {
  const images = document.querySelectorAll("#carrousel img");
  const carrousel = document.querySelector("#carrousel") as HTMLDivElement;
  let target;

  if (images && event === null) {
    target = images[index] as HTMLImageElement;
  }

  if (event) {
    target = event?.currentTarget as HTMLImageElement;
  }

  const imageOffset = target?.offsetLeft ?? 0;
  const carrouselOffset = carrousel.offsetLeft;

  const maxOffset =
    ((carrousel.scrollWidth - carrousel.clientWidth) / carrousel.clientWidth) *
    100;

  const x = Math.min(
    Math.max(
      ((imageOffset - carrouselOffset) / carrousel.offsetWidth) * 100,
      0,
    ),
    maxOffset,
  );

  moveCarrousel(x);

  if (target) {
    selectedIndexImage.set(index);
    imageSrc.set(target.src);
  }
}

function moveCarrousel(x: number) {
  gsap.to("#carrousel", {
    x: `-${x}%`,
    ease: "power1.out",
    duration: 1,
  });
}
