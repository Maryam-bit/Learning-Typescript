// Building a more useful decorators

function WithTemplate (template: string, hookId: string) {
    return function(constructor: any) {
        const hookEl = document.getElementById(hookId)
        const p = new constructor();
        if(hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector('h1')!.textContent = p.name
        }
    }
}

@WithTemplate('<h1>My person object</h1>', 'app')

class Person2 {
    name = "Max";
    constructor() {
        console.log("Creating person object .,...")
    }
}