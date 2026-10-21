import { Band, MusicLibrary } from './models';
const laine = {
    firstName: 'Laine',
    lastName: 'Staley',
    birthYear: 1969,
    stageName: 'Laine',
    genres: ["grunge", "metal"]
};
console.info("> type", typeof laine);
/*
if(laine is Artist && "firstName" in laine){
    console.info("person has firstName");
}
    */
const band = new Band("Alice in Chains", ["grunge"]);
band.addMember(laine);
const song = {
    title: 'Would',
    seconds: 240,
    performer: laine
};
const lib = new MusicLibrary("Grunge Fest");
lib.add(song);
const result = lib.searchByArtist(laine);
export function showName(performer) {
    return performer instanceof Band ? performer.name : performer.stageName;
}
