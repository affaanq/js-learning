 // const tinderUser = new Object() // Singleton Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {

    email: "some@gmail.com",
    fullname: {

        userfullname: {
            firstname: "Affaan",
            lastname: "qureshi"
        }
    }
}

console.log(regularUser.fullname?.userfullname); // We can access to as much as deep we want in a nesting by just adding "."
//"?" is added if the current waanted value is not there so it does not through an error

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // It copies the prop for the target object and assigns the source
const obj3 = {...obj1, ...obj2}
console.log(obj3);

const Users = [

    {

        id: 1,
        email: "h@gmail.com",

    }
] // Multiple objects in an array is very common

Users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser)); // Returns an array of key/values of the enumerable own properties of an object

console.log(tinderUser.hasOwnProperty("isLoggedIn")); // TO check if the given property is in the object

