import { Band } from "../models";
export function isBand(performer) {
    return performer instanceof Band;
}
const laine = {
    firstName: 'Laine',
    lastName: 'Staley',
    birthYear: 1969,
    stageName: 'Laine',
    genres: ["grunge", "metal"]
};
const band = new Band("Alice in Chains", ["grunge"]);
band.addMember(laine);
let een = isBand(band);
let twee = isBand("tsjak");
console.info("> een: ", typeof een, " | ", een);
console.info("> twee: ", typeof twee, " | ", twee);
export function onlyBands(performers) {
    return performers.filter(isBand);
}
export function nameOf(performer) {
    // truthy narrowing
    if (performer == null) {
        return "unknown performer";
    }
    return performer instanceof Band ? performer.name : performer.stageName;
}
function withAny(input) {
    input.trim();
}
function withUnknown(input) {
    // input.trim();, // --> error
}
export function parseTitle(input) {
    if (typeof input === "object" && input !== null && "title" in input && typeof input.title === "string") {
        return input.title;
    }
    return "not a valid object";
}
