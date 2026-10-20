export class MusicLibrary {
    name;
    songs = [];
    constructor(name) {
        this.name = name;
    }
    add(song) {
        this.songs.push(song);
    }
    remove(song) {
        const index = this.songs.indexOf(song);
        if (index === -1) {
            return false;
        }
        this.songs.splice(index, 1);
        return true;
    }
    searchByArtist(performer) {
        return this.songs.filter((song) => song.performer === performer);
    }
    totalSeconds() {
        return this.songs.reduce((sum, song) => sum + song.seconds, 0);
    }
}
