class Book {
    bookName: string;
    price: number;

    // ts promotes good code quality. hence, the variables of the class should be used in constructor:
    constructor(bookName: string, price: number) {
        this.bookName = bookName;
        this.price = price
    }
}


const myBook = new Book("Think and Grow Rich", 400);



// private and protected keywords:
class Course {
    public courseName: string = "Javascript basics for beginners"
    private courseDate: number = 19;

    // private variables can only be accessed inside class:
    revealLaunchDate () {
        return this.courseDate;
    }
}

const myCourse = new Course();
// myCourse.courseDate --> ❌ not allowed
// myCourse.revealLaunchDate(); --> access course date

// protected keyword is available inside the class or the class inheriting that class (child class):
class Shop {
    protected shopName = "Book Store"
}

class Branch extends Shop {
    getName() {
        // shopName directly available here:
        this.shopName = "Jaipur Book Store"
    }
}

// const branch1 = new Branch().getName();


// Getters and Setters: 
// generally used for private keywords since we can't access them directly unless not inside the class:
class Mobile {
    // standard way to declare private variables is _varName inside class
    private _model: string = "Samsung F17+";

    getModel() {
        return this._model;
    }

    setModel(modelName: string) {
        this._model = modelName;
    }
}



// abstract is used to define blueprint for methods to be declared inside the class:
abstract class Drink {
    abstract make(): void;
    
}

class Chai extends Drink {
    // abstract methods of an abstract class must be defined inside the child class which inherits the abstract class:
    make(): void {
        
    }
}