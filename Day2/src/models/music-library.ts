import type { Artist } from "./artist";
import type { Band } from "./band";
import type { Song } from "./song";


export class MusicLibrary {

    private readonly songs: Song[] = [];

    constructor(public readonly name: string)
    {}

    add(song: Song): void{
        this.songs.push(song);
    }

    remove(song: Song): boolean{
        const index = this.songs.indexOf(song);
        if(index === -1){
            return false;
        }
        this.songs.splice(index, 1);
        return true;
    }

    searchByArtist(performer: Artist | Band): Song[] {
        return this.songs.filter((song) => song.performer === performer);
    }

    totalSeconds(): number{
        return this.songs.reduce((sum, song) => sum + song.seconds, 0);
    }

}