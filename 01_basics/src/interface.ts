// interface is like template to declare custom types.
// generally used to implement in class

interface MyBook {
    bookName: string,
    price: number
}


class Book implements MyBook {
    bookName = "Here we go"
    price = 200
}


// used with ts type keyword interchangably to define templates for an object
interface Course {
    name: string;
    price: number
}

const JsCourse: Course = {
    name: "Javascript Course",
    price: 1999
}

// methods can also be declared in interfaces which must be defined in the object using the interface:
interface WachingMachine {
    start(): void;
    stop(): void
}

const machine: WachingMachine = {
    start() {
        console.log("Machine started")
    },
    stop() {
        console.log("");
    }
}

// interfaces with same names do merge with each other automatically.
interface User {
    name: string;
    email: string
}

interface User {
    age: number
}

const user: User = {
    name: "Tushar",
    email: "tushar@abc.com",
    age: 20
}

// interfaces can also be extended to other interface using the extends keyword

// intersection: 
// in the union, we have the option to choose from multiple literals

// union
let category : 'General' | 'Academics' | 'Others'

// intersection
// combines multiple types
type Category = {category: string};
type Class = {class: number};

let bookObj : Category & Class;
bookObj = {
    category: 'Custom',
    class: 3
}


