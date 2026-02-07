const video = document.querySelector("video");
const stream =
  await window.navigator.mediaDevices.getUserMedia({ video: true });
video.srcObject = stream;
await video.play();
// Important callback function for arrays
//The find() method retrieves the first element within an array that fulfills the conditions specified in the provided callback function. If no element satisfies the condition, the method returns undefined.
