const myArr = []
%DebugPrint(myArr) // It will only work in the v8 debug model, which is used by programmers for debugging

// Type of Array
// continous
// Holey: An array with a hole, 

// Both the type of array can have:

// SMI (small Integer)
// Packed element
// Double (float, string, function)

// Array has element: Internal term..
//Optimization is diffrent for each and every type of the Array, for eg:

const arrTwo = [1, 2, 3, 4, 5]
// It is a Packed_SMI_Element cos it has no holes in it, it is the best type of array.. It only accepts numbers not even decimal values...


const arrThree = [1, 2, ,, 4, 5]// It is a Holey type (Holey_Elements) of the element

// ones it is downgraded to double_smi_element it will never upgrade to the packed one...

console.log("arrTwo");
console.log(arrTwo.length);

// hasOwnProperty is the most expensive check in JS

// bound check
//hasOwnProperty(array, 9)
// V8 engine optimizes the array based on the usage of the array...

arrTwo.push(6)

const arrFour = [1, 2, 3] // It is a SMI_Packed_Elements
console.log(arrFour[8]); // it is out of bound access, it will return undefined

// SMI > Double > Packed,  based on its optimization
// H_SMI > H_DOUBLE > H_PACKED,  based on its optimization


const arrFive = new Array(3)
// Just 3 holes. Holey_Smi_elements

arrFive[0] = "1"
arrFive[1] = "2" 
arrFive[2] = "3"  // Now it will be H_Packed, holey elements
// Ones it is downgraded it will almost not possible to upgrade to the previous version


const arrSix = []
arrSix.push("1") // this is more optimized version than the previos one in line 43
arrSix.push("2")
arrSix.push("3") 
// Better optimization than the previous method of pushing in the array..


const arrSeven = [1, 2, 3, 4, 5]
arrSix.push(Infinity) // it will be now Doubled_Elements..

// for, for-of, for-in, all the other types of loop are more preffered and more optimized..
// It will be more optimized for longer time as the browser does optimization for this method...