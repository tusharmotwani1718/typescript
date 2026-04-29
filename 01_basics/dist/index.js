"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let message = "Hello world!";
// throws an error as type string is defined at initialization of variable
// message = 15
// annotation -> explicitly define the data type
let code = 12;
code = 20;
function printMessageWithCode(message, code) {
    return `message: ${message}, code: ${code}`;
}
console.log(printMessageWithCode(message, code));
//# sourceMappingURL=index.js.map