import type { SvelteComponent } from "svelte";

export interface Menu {
    label: string;
    link: string;
    icon?: typeof SvelteComponent;
}