// type declared with `any` even after the initialization remains to `any`, so to use it better we can use type assertion while using the variable
// we can do forceful type assertions using keyword "as".
let name: any = "Tushar Motwani";
let nameLength: number = (name as string).length;


type UserData = {
    name: string,
    age: number
}

let localStorageData = `{"name": "Tushar", "age": 19}`;
// we can assert the custom types also forcefully.
let localStorageDataObj = JSON.parse(localStorageData) as UserData;

localStorageDataObj.name
localStorageDataObj.age


type Category = 'General' | 'Academic' | 'Fitness'

function setScore(category: Category) : void {
    if(category == "General") {
        // do some processing
        return
    } else if(category == "Academic") {
        // do some processing
        return
    } 

    // the only remaining category type assigned automatically as the other options are already exhausted. If all the categories are used above and returned from the block, type `never` is assigned to this below used category as the code will never reach there.
    category
}

