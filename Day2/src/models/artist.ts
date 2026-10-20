import type { Person } from "./person";

// Genre
export type Genre = "rock" | "jazz" | "pop" | "folk" | "indie" | "grunge" | "metal";

// Artist
export interface Artist extends Person{
    readonly stageName: string;
    readonly genres: readonly Genre[];
}