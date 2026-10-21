
import { Artist, Band, Person } from "../models";

export function isBand( performer: Artist | Band | string ): performer is Band{
    return performer instanceof Band;
}

const laine: Artist = {
    firstName: 'Laine',
    lastName: 'Staley',
    birthYear: 1969,
    stageName: 'Laine',
    genres: ["grunge", "metal"]
}

const band = new Band("Alice in Chains", ["grunge"]);
band.addMember(laine);

let een = isBand(band);
let twee = isBand("tsjak");


console.info("> een: ", typeof een, " | ", een);
console.info("> twee: ", typeof twee, " | ", twee);


export function onlyBands(performers: (Artist | Band)[] ): Band[]{
    return performers.filter(isBand);
}

export function nameOf(performer: Artist | Band | null | undefined): string{

    // truthy narrowing
    if(performer == null){
        return "unknown performer";
    }

    return performer instanceof Band ? performer.name : performer.stageName;
}

function withAny(input: any){
    input.trim();
}

function withUnknown(input: unknown){
    // input.trim();, // --> error
}

export function parseTitle(input: unknown): string{

    console.info(input instanceof Object); // false
    console.info(typeof input === "object"); // true --> vree normaal, want is een bug die er altijd al in zit

    if( typeof input === "object"
        && input !== null 
        && "title" in input 
        && typeof input.title === "string"){
        return input.title;
    }

    return "not a valid object";
}

parseTitle(null);
