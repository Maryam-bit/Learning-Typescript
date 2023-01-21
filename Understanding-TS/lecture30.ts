// Optional Chaining
// When you are not sure that certain property exists on object

const fetchedUserData = {
    id: "u1",
    name: "max",
    // job: { title: "ceo", description: "my own company"}
}

// javscript way
console.log(fetchedUserData.job && fetchedUserData.job.title)

// in typescript
console.log(fetchedUserData?.job?.title)
