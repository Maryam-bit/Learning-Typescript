// property decorator 

function Log(target: any, propertyName: string | Symbol) {
    console.log("property decorator0")
    console.log(target, propertyName)
}


class Product {
    @Log
    title: string;
    private _price: number;

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


    getPriceWithTax(tax: number) {
        return this._price * (1 + tax)
    }
}