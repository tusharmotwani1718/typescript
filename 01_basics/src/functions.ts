// we can always pass the data type of parameters of the function while defining:
const buyCourse = (name: string, price: number) => {
    console.log(`course ${name} bought successfully! at price${price}`)
}

buyCourse("ABC", 1899);


// return type of function can also be passed in ts:
const getAge = (name: string): number => {
    return 19;
}


// optional parameters can be kept normally:
const orderFood = (appName?: string) => {
    console.log("Ordered Food!");
}