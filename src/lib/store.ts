import { writable, type Writable } from "svelte/store";
import type { Size } from "./interface/size";

export const install: Writable<Size> = writable<Size>({ height: 0, width: 0 });