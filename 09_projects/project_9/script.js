const htmlInput = document.querySelector("#markdown-input");
const htmlPreview = document.querySelector("#preview");
const htmlOutput = document.querySelector("#html-output");

htmlInput.addEventListener("input", convertMarkdown);

function convertMarkdown() {

    let result = htmlInput.value;

    result = result.replace(/^### (.*$)/gim, '<h3>$1</h3>'); 
    result = result.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    result = result.replace(/^# (.*$)/gim, '<h1>$1</h1>');

    result = result.replace(/^\s*> (.*$)/gim, '<blockquote>$1</blockquote>');

     result = result.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
     result = result.replace(/__(.*?)__/gim, '<strong>$1</strong>');

     result = result.replace(/\*(.*?)\*/gim, '<em>$1</em>');
     result = result.replace(/_(.*?)_/gim, '<em>$1</em>');

     result = result.replace(/!\[(.*?)\]\((.*?)\)/gim, '<img alt="$1" src="$2">');
     
     result = result.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');

    htmlOutput.textContent = result;
    htmlPreview.innerHTML = result;
    return result
    
}