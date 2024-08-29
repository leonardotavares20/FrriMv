import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const typeContentWrapper: Writable<string> = writable("none");

export const videoSource = writable("");

export const playVideo = writable(false);

export const progressVideo = writable(0);

export const videoDuration = writable(0);

export const newTimeVideo = writable(0);

export const volumeVideo = writable(0.5);
