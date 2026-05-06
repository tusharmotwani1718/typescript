"use strict";
// we can always create custom types using type keyword
Object.defineProperty(exports, "__esModule", { value: true });
function sendResponse(obj) {
    return {
        success: true,
        statusCode: 200,
        data: null
    };
}
// unknown: type-safe counterpart of any.
// any: can store any data type and use it.
// unknown: can store any data type while declaring but while using the data type must be clearly defined.
// you should always use unknown instead of any as it is more type safe.
let age = 18;
let strAge = age;
let ageTwo = 20;
// let strAgeTwo: string = ageTwo; -> not valid
//# sourceMappingURL=type_and_unknown.js.map