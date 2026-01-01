// Loop for object which we use commonly

//For in loop

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);

}

const programming = ["js", "css", "swift"]

for (const key in programming) {
    console.log(programming[key]);

} // For in loop will print the keys of the array not the value is used keys in console

const map = new Map()
map.set('UK', 'United Kingdom')
map.set('UK', 'United Kingdom')
map.set('Fr', 'France')

for (const key in map) {
    console.log(key);
    
} // It will not print anything in the terminal as it is not iteratable