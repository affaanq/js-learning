const coding = ["js", "python", "css", "c++"]

coding.forEach( function (item) {
    console.log(item);
    

}) // a callback function have no name

coding.forEach( (val) => {
    console.log(val);
    
})

function printMe(item) {
    console.log(item);
    
}

coding.forEach ((printMe) => {
    console.log(printMe);

}) // We can give a function as a parameter to call back

coding.forEach ( (item, index, arr) => {
    console.log(item, index, arr);
    
})

const myCoding = [
{
    languageName: "JavaScript",
    languageFileName: "js",

},
{
    languageName: "Python",
    languageFileName: "py",

},
{
    languageName: "Java",
    languageFileName: "java",

}


]
myCoding.forEach((item) => {
    console.log(item.languageName);
    
})  // Very important !!