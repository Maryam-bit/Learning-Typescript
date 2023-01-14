// never type
// this function is not just void, but also never, as it is throwing error
// the function can also return never type if has infinite loop
function generateError (message: string, code: number): never {
    throw { message: message, errorCode: code }
    // while (true) {}
}

generateError("an error occurred", 500)
