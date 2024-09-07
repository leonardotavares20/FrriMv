import { writable } from "svelte/store";

export const selectedIndexImage = writable(0);

export const imageSrc = writable("/images_grid/grid_one.webp");
