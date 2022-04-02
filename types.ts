/**
 * Typescript types
 * 1. void, unknow, never, enums
 */

enum Roles { ADMIN, SUPPORT }

const leader = Roles.ADMIN; // 0

let planItinerary: (destination: string) => void;
planItinerary = (destination) => {
    console.log(`Planning itinerary for ${destination}`);
}

planItinerary("Taiwan");

let a: unknown;
let b: string;

a = 5;
a = "Kael";
// b = a; not gonna work since b is a string and a is of type unknown, 
//additional type check is required to make this work

if(typeof a === "string"){
    b = a;
}

let generateError: (errorMessage: string, errorCode: number) => never = (message, code) => {
    throw { message, code };
}

generateError("A custom error", 500);

