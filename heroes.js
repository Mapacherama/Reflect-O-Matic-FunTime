// DOM Elements
const batmanButton = document.getElementById("batmanButton");
const batmanOutput = document.getElementById("batmanOutput");
const crimeStopped = document.getElementById("crimeStopped");

const supermanButton = document.getElementById("supermanButton");
const supermanOutput = document.getElementById("supermanOutput");
const peopleSaved = document.getElementById("peopleSaved");

// Batman's Reflection
batmanButton.addEventListener("click", () => {
  const crimes = crimeStopped.value;
  batmanOutput.textContent = `You stopped ${crimes}% of today's crime! Gotham is a safer place, but there's always work to do.`;
});

// Superman's Reflection
supermanButton.addEventListener("click", () => {
  const people = peopleSaved.value;
  supermanOutput.textContent = `You saved ${people}% of people today! Metropolis is grateful, Superman!`;
});