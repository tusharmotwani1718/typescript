"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we can always pass the data type of parameters of the function while defining:
const buyCourse = (name, price) => {
    console.log(`course ${name} bought successfully! at price${price}`);
};
buyCourse("ABC", 1899);
// return type of function can also be passed in ts:
const getAge = (name) => {
    return 19;
};
// optional parameters can be kept normally:
const orderFood = (appName) => {
    console.log("Ordered Food!");
};
//# sourceMappingURL=functions.js.map