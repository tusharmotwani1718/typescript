"use strict";
// interface is like type to declare custom types.
// generally used to implement in class
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    bookName = "Here we go";
    price = 200;
}
// intersection: 
// in the union, we have the option to choose from multiple literals
// union
let category;
let bookObj;
bookObj = {
    category: 'Custom',
    class: 3
};
//# sourceMappingURL=interface.js.map