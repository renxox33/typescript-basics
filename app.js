/**
 * Core types in typescript
 * number, string, boolean, object, array, tuple, enum
 */
var tier;
(function (tier) {
    tier[tier["ROOKIE"] = 0] = "ROOKIE";
    tier[tier["AMATEUR"] = 1] = "AMATEUR";
    tier[tier["SEMIPRO"] = 2] = "SEMIPRO";
    tier[tier["PRO"] = 3] = "PRO";
    tier[tier["GRANDMASTER"] = 4] = "GRANDMASTER";
})(tier || (tier = {}));
var person = {
    name: "Raj",
    age: 25,
    role: [1, "author"],
    rank: tier.AMATEUR
};
// person.role.push(5); -> push works in tuples, it's an exception
// person.role[2] = 5; -> won't work since tuples are of a fixed length
console.log(person.rank);
