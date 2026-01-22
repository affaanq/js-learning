 const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")

 console.log(descriptor); // it will say that it is not overwritable, not enumerable and not even configurable....
 

 console.log(Math.PI);
 Math.PI = 5; // You will not able to overwrite the value of PI 
 console.log(Math.PI);
 

const myNewObject = Object.create(null)

const chai = {

    name: "ginger chai",
    price: 250,
    isAvailable:  true,

    orderChai: function () {
        console.log("Code crash");
        
    }

}

console.log(Object.getOwnPropertyDescriptor(chai));// it will print undefined as chai is not the property it is the object.. you need the property
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {

    writable: false,
    enumerable: false,



})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {

    if (typeof value != "function") {
    
    console.log(`${key} : ${value}`);
    
    }
}
