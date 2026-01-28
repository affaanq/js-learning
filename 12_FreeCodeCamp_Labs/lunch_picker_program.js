const lunches = [];

function addLunchToEnd(lunches, item) {
  lunches.push(item);
  console.log(`${item} added to the end of the lunch menu.`);
  return lunches; // Returns the array, not the length
}

function addLunchToStart(lunches, item) {
  lunches.unshift(item);
  console.log(`${item} added to the start of the lunch menu.`);
  return lunches;
}

function removeLastLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return lunches;
  }
  const removed = lunches.pop();
  console.log(`${removed} removed from the end of the lunch menu.`);
  return lunches;
}

function removeFirstLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches to remove.");
    return lunches;
  }
  const removed = lunches.shift();
  console.log(`${removed} removed from the start of the lunch menu.`);
  return lunches;
}

function getRandomLunch(lunches) {
  if (lunches.length === 0) {
    console.log("No lunches available.");
    return;
  }
  const randomIndex = Math.floor(Math.random() * lunches.length);
  const selectedLunch = lunches[randomIndex];
  console.log(`Randomly selected lunch: ${selectedLunch}`);
}

function showLunchMenu(lunches) {
  if (lunches.length === 0) {
    console.log("The menu is empty.");
  } else {
    // .join(", ") handles any number of items automatically
    console.log(`Menu items: ${lunches.join(", ")}`);
  }
}