const form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Select the elements properly
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results"); // No .value, No parseInt

    // Validate: isNaN covers empty strings and non-numeric junk
    if (isNaN(height) || height <= 0) {
        results.innerHTML = "Please give a valid height";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = "Please give a valid weight";
    } else {
        // Correct Math: (height/100) squared
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        
        // Logic for display
        results.innerHTML = `<span>${bmi}</span>`;
    }
});