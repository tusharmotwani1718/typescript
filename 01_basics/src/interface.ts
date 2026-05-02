// interface is like type to declare custom types.
// generally used to implement in class

interface MyBook {
    bookName: string,
    price: number
}


class Book implements MyBook {
    bookName = "Here we go"
    price = 200
}


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


