const textInput = document.querySelector("#text-input");
const charCount = document.querySelector("#char-count");

textInput.addEventListener("input", () => {
    // 1. Manually trim if input exceeds 50
    if (textInput.value.length > 50) {
        textInput.value = textInput.value.slice(0, 50);
    }

    // 2. Capture the current length
    const currentLength = textInput.value.length;

    // 3. Update the UI text
    charCount.textContent = `Character Count: ${currentLength}/50`;

    // 4. Update the UI styling for feedback
    if (currentLength >= 50) {
        textInput.style.borderColor = "red";
        charCount.style.color = "red";
    } else {
        textInput.style.borderColor = "";
        charCount.style.color = "";
    }
});