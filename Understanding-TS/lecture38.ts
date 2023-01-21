// generic utility types

interface CourseGoal {
    title: string;
    description: string;
    completeUntil: Date;
}

function createCourseGoal (title: string,  description: string, date: Date): CourseGoal {
    // partial utility type convert all the properties into optional ones
    // it means CourseGoal properties are option but in the end our object will look like courseGoal
    let courseGoal: Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal; // we need to convert return type into courseGoalfrom partial course goal
    // return { title: title, description: description, completeUntil: date }
}

// if we want to  make it locked array, (do not allow to add more items)
// we can use readonly utility type 
const names3: Readonly<string[]> = ["Max", "Anna"]
names3.push("Manu") // not allowed