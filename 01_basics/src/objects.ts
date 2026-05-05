// object template in ts:
let course: {
    name: string;
    instructors: string[];
    price: number;
    isActive: boolean
}

course = {
    name: 'Full Stack + Gen AI',
    instructors: ["Hitesh Choudhary", "Piyush Garg"],
    price: 1999,
    isActive: true
}

// type for an object:
type Book = {
    name: string;
    price: number;
    niche: "Finance" | "Academics" | "General" | "Others"
}

let book1 : Book = {
    name: 'The Intelligent Investor',
    price: 1699,
    niche: "Finance"
}


// an object with atleast required properties can be made equal to another object having those:
type Cup = {size: string};
let SmallCup: Cup = {size: "200ml"}

let bigCup = {size: "500ml", material: "steel"}

SmallCup = bigCup;


// modularity in types: Types are always recommended to make modular for clean and reusable code:
type Item = {name: string, quantity: number}
type Address = {street: string, pin: number}

type User = {
    name: string,
    mail: string,
    // modular types created above:
    items: Item[],
    address: Address
}


// Parial Updates:
// only partial values can be passed in a type object with Partial Keyword

const updateUser = (updates: Partial<User>) => {
    console.log("updating user...")
}

// we do not need to pass all the values of type object User even when they are not optionally defined in the type as we have used Partial in the function, hence all the fields become optional:
updateUser({
    name: "ABC"
});

// however one drawback is it also works if we pass no field:
updateUser({});

// Required:
// Required keyword marks the properties in an object type as required even when they are marked optional while defining.
type Mobile = {
    name: string;
    model?: string;
    price: number
}

const setMobile = (mobile: Required<Mobile>) => {
    console.log(`selected mobile, ${mobile}`)
}

setMobile({
    name: "Samsung",
    model: "Galaxy F17", // model is must even if declared optional while defining type but is required here as the function uses it with the Required keyword
    price: 17500
})

// Pick:
// used to mark selective properties of an type or object as required:

type Company = {
    name: string;
    domain: 'Tech' | 'Finance' | 'Marketing' | 'Others';
    size: "Small" | "Medium" | "Large";
    isHiring: boolean
}

type BasicCompanyInfo = Pick<Company, "name" | "domain">

// two feilds included under pick are required for the data type
let myCompany: BasicCompanyInfo = {
    name: "ABC",
    domain: "Tech"
}

// Omit: 
// used to omit some properties from an object type:
type companyInfo = Omit<Company, "isHiring"> // isHiring property is omitted in this new type

let anotherCompany: companyInfo = {
    name: "XYZ",
    domain: "Marketing",
    size: "Medium"
}