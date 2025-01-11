// Select stones and reflection text
const stones = document.querySelectorAll(".stone");
const yodaReflection = document.getElementById("yodaReflection");

// Yoda's reflections
const reflections = [
  "Patience you must have, young Padawan. What tests you today?",
  "Fear leads to anger. Anger leads to hate. Reflect on your emotions.",
  "Do or do not. There is no try. Where have you hesitated recently?",
  "The greatest teacher, failure is. What have you learned from mistakes?",
  "Adventure. Excitement. A Jedi craves not these things. What grounds you?",
  "Train yourself to let go of everything you fear to lose. What attachments hold you back?",
  "The Force surrounds you. What connects you to others?",
];

// Add click event to each stone
stones.forEach((stone) => {
  stone.addEventListener("click", () => {
    // Pick a random reflection
    const randomReflection =
      reflections[Math.floor(Math.random() * reflections.length)];
    // Update the text with Yoda's wisdom
    yodaReflection.textContent = randomReflection;

    // Add a glowing animation to the clicked stone
    stone.classList.add("animate-pulse", "bg-yellow-400");
    setTimeout(() => {
      stone.classList.remove("animate-pulse", "bg-yellow-400");
    }, 1000);
  });
});