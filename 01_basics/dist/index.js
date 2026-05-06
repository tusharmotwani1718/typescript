"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// inferencing the data type -> ts automatically infers the data type being used
let message = "Hello world!";
// throws an error as type string is defined at initialization of variable
// message = 15
// annotation -> explicitly define the data type, mainly used when you declare the variable but not initialise it.
let code = 12;
code = 20;
function printMessageWithCode(message, code) {
    return `message: ${message}, code: ${code}`;
}
console.log(printMessageWithCode(message, code));
//# sourceMappingURL=index.js.map