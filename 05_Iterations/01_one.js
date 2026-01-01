// for loop

for (let index = 0; index < 10; index++) {
    const element = index;
    if (element == 5) {

        console.log("We got 5");
        
    }
    console.log(element);
     // Normal using of the for loop
    
} // Scope of for loop

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop: ${i}`);
    

    for (let j = 0; j < 10; j++) {
        console.log(`Inner Loop: ${j} Inner loop: ${i}`);

        console.log(i + '*' + j + '=' + i*j);   
        
    }
}

let myArray = ["flashman", "batman", "superman"]

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);  
}

// Break and Continue 

for (let index = 1; index <= 20; index++) {

    if (index === 5) {
        console.log("We got 5");
        break // Will break the function when got 5
        
    }
    console.log(`Value of i is ${index}`);
    
}

for (let index = 0; index < 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // It will let it go for the 1st mistake in the loop (Will leave the fucntion for 1 condition)
        
    }
    console.log(`Detected 5`); 
}