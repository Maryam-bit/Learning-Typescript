// Index Properties
// Allow us to create flexible objects

// if you don't know the exact property name of an object, let see the error example
// { email: "not a valid email", username: "must start with a capital character"}
interface ErrorContainer {
    [prop: string]: string;
}

// any thing that can be converted to a string is a valid property name. 
const errorBag: ErrorContainer = {
    email: "not a vlid email",
    username: "must stasrt with a capital character"
}