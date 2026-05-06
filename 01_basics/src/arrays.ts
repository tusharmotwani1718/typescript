// we can define data type of elements in the array while declaring the array:
const scores: number[] = [90, 100, 40, 45, 70];
// another syntax:
const names: Array<string> = ["X", "Y", "Z"];

type Book = {
    name: string;
    price: number
}

const books: Book[] = [
    {name: "ABC", price: 1400},
    {name: "XYZ", price: 1599}
]


// readonly:
// readonly marked array cannot be updated once initialized
let cities: readonly string[];
cities = ["Jaipur", "Banglore"];
// not allowed: 
// cities[1] = "Surat"


// tuple:
// Tuple is a kind of an array which is used to define order and data type of elements
let userTuple: [string, number];
userTuple = ["Tushar", 20];
// userTuple = [20, "Tushar"] --> not allowed as it voilates the order of the tuple

// we can also name the fields of the tuple:
let result: [subject: string, marks: number, total?: number]
result = ["Computer Science", 89];


// ENUM:
enum CupSize {
    SMALL,
    MEDIUM,
    LARGE
}

console.log(CupSize.SMALL);

enum CupSIZE {
    SMALL = "50ml",
    MEDIUM = "150ml",
    LARGE = "300ml"
}

console.log(CupSIZE.SMALL);