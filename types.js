/**
 * Typescript types
 * 1. void, unknow, never, enums
 */
var Roles;
(function (Roles) {
    Roles[Roles["ADMIN"] = 0] = "ADMIN";
    Roles[Roles["SUPPORT"] = 1] = "SUPPORT";
})(Roles || (Roles = {}));
var leader = Roles.ADMIN; // 0
var planItinerary;
planItinerary = function (destination) {
    console.log("Planning itinerary for " + destination);
};
planItinerary("Taiwan");
var a;
var b;
a = 5;
a = "Kael";
// b = a; not gonna work since b is a string and a is of type unknown, 
//additional type check is required to make this work
if (typeof a === "string")
    b = a;
console.log(b);
var generateError = function (message, code) {
    throw { message: message, code: code };
};
generateError("A custom error", 500);
