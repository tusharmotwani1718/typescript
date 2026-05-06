"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// type declared with `any` even after the initialization remains to `any`, so to use it better we can use type assertion while using the variable
// we can do forceful type assertions using keyword "as".
let name = "Tushar Motwani";
let nameLength = name.length;
let localStorageData = `{"name": "Tushar", "age": 19}`;
// we can assert the custom types also forcefully.
let localStorageDataObj = JSON.parse(localStorageData);
localStorageDataObj.name;
localStorageDataObj.age;
function setScore(category) {
    if (category == "General") {
        // do some processing
        return;
    }
    else if (category == "Academic") {
        // do some processing
        return;
    }
    // the only remaining category type assigned automatically as the other options are already exhausted. If all the categories are used above and returned from the block, type `never` is assigned to this below used category as the code will never reach there.
    category;
}
//# sourceMappingURL=type_assertion.js.map