import type { Artist } from "./artist";
import type { Band } from "./band";

export interface Song {
    readonly title: string;
    readonly seconds: number;
    readonly performer : Artist | Band;
}