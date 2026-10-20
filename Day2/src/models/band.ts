import type { Artist, Genre } from "./artist";

export class Band{

    private readonly members: Artist[] = [];

    constructor(
        public readonly name: string, 
        public readonly genres: readonly Genre[])
    {}

    addMember(artist: Artist): void{
        this.members.push(artist);
    }

    get memberCount(): number{
        return this.members.length;
    }
}