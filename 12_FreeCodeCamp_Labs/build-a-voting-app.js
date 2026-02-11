let poll = new Map();

function addOption(option){

  if (poll.has(option)) {

    return `Option "${option}" already exists.`

  } else if (option === "") {
    return `Option cannot be empty.`
  }
  
   else if (!poll.has(option)) {

  let voters = new Set();
  poll.set(option, voters); 
  return `Option "${option}" added to the poll.`; // it should not be poll.set([option, voters]), it is not a single array, it accepts two


  }

}

function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  } 

  // 1. Get the Set of voters for this option
  let voters = poll.get(option);

  // 2. Check if this specific voter is already in that Set
  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  // 3. If not, add them and return the success message
  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

function displayResults(){

  let results = "Poll Results:\n"

  for (let [option, votersSet] of poll) {

    let value = `${option}: ${votersSet.size} votes\n`
    results += value;
  }
  return results.trim()
}
addOption("Turkey");
addOption("Morocco");
addOption("Spain");

vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler1");
