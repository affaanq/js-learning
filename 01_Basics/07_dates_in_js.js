let myDate = new Date()
console.log(myDate.toDateString());// Will output Sun Dec 28 2025
console.log(myDate.toString());// Will output Sun Dec 28 2025 23:10:43 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toJSON()); // Will output 2025-12-28T23:10:43.380Z
console.log(myDate.toLocaleString()); // Will output 12/28/2025, 11:12:16 PM

// Date is an Object Attibute...

let myCreatedDate = new Date(2023, 0, 23)
let myNewDate = new Date("2023-01-14")
console.log(myCreatedDate.toDateString());
console.log(myNewDate.toLocaleDateString());

let myTimeStamp = Date.now()
console.log(myTimeStamp); //It will output in MilliSecond value
console.log(myCreatedDate.getTime()); //it will now output the value in MilliSecond
console.log(Math.floor(Date.now()/1000)); //It will output the current date in seconds


let newDate = new Date()
console.log(newDate.getMonth);
console.log(newDate.getDay);


newDate.toLocaleString('default', {
    weekday: "long",
}) // Customization of the Locale string..