// type casting
// type casting helps to tell ts that some value is of a specific value when ts don't know

// typescript infer its type as HTMLParagraphElement | null
const paragraph = document.querySelector('p')

// type script infer its type as HTMLElement | null which means typescript is unable to recognize that its HTML Input Element

const userInputElement = document.getElementById('user-input')



// and you will get the following error while setting value to it 
// 'userInputElement' is possibly 'null'.ts(18047)
// Property 'value' does not exist on type 'HTMLElement'

// userInputElement.value = "hi there"



// now you would need to use type casting here
// syntax 1
const userInputElement2 = <HTMLInputElement>document.getElementById('user-input')
userInputElement2.value = "hi there"


// syntax 2
// ! means this express will never yeild null, typescript thought that the user-input element return by DOM  might return null
// but if we as a developer knows that it would not return null then we can use this !.
const userInputElement3  = document.getElementById('user-input')! as HTMLInputElement
userInputElement3.value = "hi there"
