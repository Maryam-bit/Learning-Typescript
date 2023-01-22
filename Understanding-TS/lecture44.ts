// Autobind decorator 

function Autobind(_: any, _2: string, descriptor: PropertyDecorator) {
    const originalMethod = descriptor.value
    const adjDesriptor: PropertyDecorator = {
        configurable: true,
        enumberable: false,
        get() {
            const boundFn = originalMethod.bind(this)
            return boundFn
        }
    }
    return adjDesriptor;
}

class Printer {
    message = "this works!";

    @Autobind
    showMessage () {
        console.log(this.message)
    }
}

const p = new Printer() 

p.showMessage() // this works!

const button = document.querySelector("button")!
button.addEventListener("click", p.showMessage) // undefined
// button.addEventListener("click", p.showMessage.bind(p)) // this works

// you can also auto bind using fu**ing decorator described above 