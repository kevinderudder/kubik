import { Band } from "../models";

function echoNumber(arg: number): number{
    return arg;
}

function echoAny(arg: any): any{
    return arg;
}

function echoGeneric<Type>(arg: Type): Type{
    return arg;
}

const outputString: string = echoGeneric<string>("kevin");
const outputNumber: number = echoGeneric<number>(12);

console.info(typeof outputString);
console.info(typeof outputNumber);

// Type Argument Inference
const outputStringTAI: string = echoGeneric("kevin"); // compiler gaat het generic type zelf invullen
const outputNumberTAI: number = echoGeneric(12);

console.info(typeof outputStringTAI);
console.info(typeof outputNumberTAI);

class GenericClass<T extends number>{
    public add(x:T, y:T): number{
        return x + y;
    }
}

function getProperty<T, Key extends keyof T>(anObject: T, aProperty: Key){
    return anObject[aProperty];
}

const b = new Band("The Strokes", ["indie"]);

getProperty(b, "name");
//getProperty(b, "nafdsqfdqsme");