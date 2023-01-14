// enums <> added by typescript automatically enumerated global constant identifiers. Enum is defined as a your custom type in typescript
// without enum
// Javascript do not support enums, we could acieve same results as enum like this
// downside of this approach (without enum) is the role ADMIN can accept any number, if we wanna restrict it with one number we can use enum
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var person5 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: ADMIN
};
if (person5.role === ADMIN) {
    console.log('admin!!!');
}
// typescript enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person6 = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
if (person6.role === Role.ADMIN) {
    console.log('admin!!!');
}
