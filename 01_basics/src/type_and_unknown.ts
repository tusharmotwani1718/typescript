// we can always create custom types using type keyword

type ResponseData = {
    userName: string,
    email: string
}

type ApiResponse = {
    success: boolean,
    statusCode: number,
    data: ResponseData | null
}

type ReqObject = {
    requestType: 'GET' | 'POST' | 'DELETE',
    data: ResponseData | null
}

function sendResponse(obj: ReqObject) : ApiResponse {
    return {
        success: true,
        statusCode: 200,
        data: null
    }

}

// unknown: type-safe counterpart of any.
// any: can store any data type and use it.
// unknown: can store any data type while declaring but while using the data type must be clearly defined.
// you should always use unknown instead of any as it is more type safe.
let age: any = 18;
let strAge: string = age

let ageTwo: unknown = 20;
// let strAgeTwo: string = ageTwo; -> not valid


