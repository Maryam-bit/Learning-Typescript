// Discriminated Union
// pattern that implements typeguards easier when using union types
// Discriminated Union means we have one common property in every object that makes up a union to have 100% type safety

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse';
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal (animal: Animal) {
    let speed;
    switch(animal.type) {
        case 'bird':
            speed = animal.flyingSpeed
            break;
        case 'horse':
            speed = animal.runningSpeed
    }
}

moveAnimal({type: 'bird', flyingSpeed: 10})