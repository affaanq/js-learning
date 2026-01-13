const form = document.querySelector("form");
// Now we will convert the height and weight input to the respective integer value..


form.addEventListener("submit", function(e){

  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result =(document.querySelector("#results"));

  if (height <= 0 || isNaN(height)) {
    result.innerHTML = `The height given is not valid`

  }
  else if (weight <= 0 || isNaN(weight)) {
    result.innerHTML = `The weight given is not valid`

  } else {

    const formula = (weight / ((height * height) / 10000)).toFixed(2);    
    if (formula <= 18.6) {
      message = "Under Weight. Gain some weight.";

    } else if ( 18.6 < formula && formula < 24.9 ) {
      message = "You are alright in the BMI!";

    } else if ( formula >= 24.9 ) {
      message = "Over Weight. Lose some weight!";
    
  }
  result.innerHTML = `Your BMI is: ${formula}, ${message}`

}
});
