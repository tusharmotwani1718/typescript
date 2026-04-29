// union -> multiple data types can be there to annotate.

// this is not allowed by default due to type safety:
/*
let count = 300;
count = "100k"
*/

// we can update by providing a list of data types to choose from:
let count : string | number = 300;
count = "100k"


// can also be used to provide enum value options for an identifier:
let apiStatus : "success" | "pending" | "error" = "pending";
apiStatus = "success";


// any -> tells we do not care about the data type:
// generally not recommended to use as it compromises with the type safety.
let someValue : any = 200;
someValue = "100"



