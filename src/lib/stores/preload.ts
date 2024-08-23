import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const startVideo: Writable<boolean> = writable(false);

export const pauseVideo: Writable<boolean> = writable(false);

export const preloadFinished: Writable<boolean> = writable(false);

export const firstLoad: Writable<boolean> = writable(false);
