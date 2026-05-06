"use strict";
// union -> multiple data types can be there to annotate.
Object.defineProperty(exports, "__esModule", { value: true });
// this is not allowed by default due to type safety:
/*
let count = 300;
count = "100k"
*/
// we can update by providing a list of data types to choose from:
let count = 300;
count = "100k";
// can also be used to provide enum value options for an identifier:
let apiStatus = "pending";
apiStatus = "success";
// any -> tells we do not care about the data type:
// generally not recommended to use as it compromises with the type safety.
let someValue = 200;
someValue = "100";
//# sourceMappingURL=union_and_any.js.map