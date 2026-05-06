"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// we can define data type of elements in the array while declaring the array:
const scores = [90, 100, 40, 45, 70];
// another syntax:
const names = ["X", "Y", "Z"];
const books = [
    { name: "ABC", price: 1400 },
    { name: "XYZ", price: 1599 }
];
// readonly:
// readonly marked array cannot be updated once initialized
let cities;
cities = ["Jaipur", "Banglore"];
// not allowed: 
// cities[1] = "Surat"
// tuple:
// Tuple is a kind of an array which is used to define order and data type of elements
let userTuple;
userTuple = ["Tushar", 20];
// userTuple = [20, "Tushar"] --> not allowed as it voilates the order of the tuple
// we can also name the fields of the tuple:
let result;
result = ["Computer Science", 89];
// ENUM:
var CupSize;
(function (CupSize) {
    CupSize[CupSize["SMALL"] = 0] = "SMALL";
    CupSize[CupSize["MEDIUM"] = 1] = "MEDIUM";
    CupSize[CupSize["LARGE"] = 2] = "LARGE";
})(CupSize || (CupSize = {}));
console.log(CupSize.SMALL);
var CupSIZE;
(function (CupSIZE) {
    CupSIZE["SMALL"] = "50ml";
    CupSIZE["MEDIUM"] = "150ml";
    CupSIZE["LARGE"] = "300ml";
})(CupSIZE || (CupSIZE = {}));
console.log(CupSIZE.SMALL);
//# sourceMappingURL=arrays.js.map