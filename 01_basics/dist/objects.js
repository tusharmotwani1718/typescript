"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// object template in ts:
let course;
course = {
    name: 'Full Stack + Gen AI',
    instructors: ["Hitesh Choudhary", "Piyush Garg"],
    price: 1999,
    isActive: true
};
let book1 = {
    name: 'The Intelligent Investor',
    price: 1699,
    niche: "Finance"
};
let SmallCup = { size: "200ml" };
let bigCup = { size: "500ml", material: "steel" };
SmallCup = bigCup;
// Parial Updates:
// only partial values can be passed in a type object with Partial Keyword
const updateUser = (updates) => {
    console.log("updating user...");
};
// we do not need to pass all the values of type object User even when they are not optionally defined in the type as we have used Partial in the function, hence all the fields become optional:
updateUser({
    name: "ABC"
});
// however one drawback is it also works if we pass no field:
updateUser({});
const setMobile = (mobile) => {
    console.log(`selected mobile, ${mobile}`);
};
setMobile({
    name: "Samsung",
    model: "Galaxy F17", // model is must even if declared optional while defining type but is required here as the function uses it with the Required keyword
    price: 17500
});
// two feilds included under pick are required for the data type
let myCompany = {
    name: "ABC",
    domain: "Tech"
};
let anotherCompany = {
    name: "XYZ",
    domain: "Marketing",
    size: "Medium"
};
//# sourceMappingURL=objects.js.map