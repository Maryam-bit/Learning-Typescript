// accessor, method & parameter decorator

// accessor decorator
function Log2(target: any, name: string, descriptor:  PropertyDescriptor) {
    console.log("***** Accessor decorator *****");
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

// method decorator
function Log3(target: any, name: string | Symbol, descriptor: PropertyDescriptor) {
    console.log("***** Method decorator *****");
    console.log(target)
    console.log(name)
    console.log(descriptor)
}

// parameter decorator
function Log4(target: any, name: string | Symbol, position: number) {
    console.log("***** Parameter decorator *****");
    console.log(target)
    console.log(name)
    console.log(position)
}


class Product {
    title: string;
    private _price: number;

    @Log2
    set price(val: number) {
        if(val > 0) {
            this._price = val;
        } else {
            throw new Error("Invalid price - should be positive")
        }

    }
 
    constructor(t: string, p: number) {
        this.title = t;
        this._price = p;
    }

    @Log3
    getPriceWithTax(@Log4 tax: number) {
        return this._price * (1 + tax)
    }
}