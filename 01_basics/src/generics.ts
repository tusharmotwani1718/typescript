// generics are used to define uncertain data types in a function or interface or some reusable template in ts:

function wrapInArray<T>(item: T) : T[] {
    return [item]
}

// now we can use the above function with any data type as it is defined as generic
wrapInArray(20);
wrapInArray("Tushar")
wrapInArray({
    course: {

    }
})



function pair<A, B>(a: A, b: B): [A,B] {
    return [a,b];
}

pair("Tushar", 20);
pair("Tushar", "Motwani");


// using generics with interfaces:
interface Box<T> {
    name: string;
    material: T
}

const metalBox: Box<string> = {
    name: "metalBox",
    material: "Metal"
}

interface Book<A, B> {
    name: A;
    price: B
}

const myBook: Book<string, number> = {
    name: "Book1",
    price: 199
}