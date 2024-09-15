import { imageSrc, selectedIndexImage } from "../stores/carrousel_gallery";
import gsap from "gsap";

export function setCurrentImage(event: Event | null, index: number) {
  const target = getTargetImage(event, index);
  const x = calculateOffset(target);

  moveCarrousel(x);

  if (target) {
    updateStores(target, index);
  }
}

function getTargetImage(
  event: Event | null,
  index: number,
): HTMLImageElement | null {
  if (event) {
    return event.currentTarget as HTMLImageElement;
  }

  const images = document.querySelectorAll("#carrousel img");
  return images[index] as HTMLImageElement;
}

function calculateOffset(target: HTMLImageElement | null): number {
  if (!target) return 0;

  const carrousel = document.querySelector("#carrousel") as HTMLDivElement;
  const imageOffset = target.offsetLeft;
  const carrouselOffset = carrousel.offsetLeft;
  const maxOffset =
    ((carrousel.scrollWidth - carrousel.clientWidth) / carrousel.clientWidth) *
    100;

  return Math.min(
    Math.max(
      ((imageOffset - carrouselOffset) / carrousel.offsetWidth) * 100,
      0,
    ),
    maxOffset,
  );
}

function moveCarrousel(x: number) {
  gsap.to("#carrousel", {
    x: `-${x}%`,
    ease: "power1.out",
    duration: 1,
  });
}

function updateStores(target: HTMLImageElement, index: number) {
  selectedIndexImage.set(index);
  imageSrc.set(target.src);
}
