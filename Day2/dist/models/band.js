export class Band {
    name;
    genres;
    members = [];
    constructor(name, genres) {
        this.name = name;
        this.genres = genres;
    }
    addMember(artist) {
        this.members.push(artist);
    }
    get memberCount() {
        return this.members.length;
    }
}
