// DOM Elements
const spongeBobButton = document.getElementById("spongeBobButton");
const spongeBobOutput = document.getElementById("spongeBobOutput");
const jellyfishingInput = document.getElementById("jellyfishing");
const spatulaSkillsInput = document.getElementById("spatulaSkills");

const patrickButton = document.getElementById("patrickButton");
const patrickOutput = document.getElementById("patrickOutput");
const napsInput = document.getElementById("naps");
const iceCreamInput = document.getElementById("iceCream");

const jellyfishContainer = document.getElementById("jellyfishContainer");

// Reflect with SpongeBob
spongeBobButton.addEventListener("click", () => {
  const jellyfishing = jellyfishingInput.value;
  const spatulaSkills = spatulaSkillsInput.value;

  spongeBobOutput.textContent = `Wow! Your jellyfishing score is ${jellyfishing}% and your spatula skills are ${spatulaSkills}%! Keep up the bubbly work!`;
  createJellyfish();
});

// Reflect with Patrick
patrickButton.addEventListener("click", () => {
  const naps = napsInput.value;
  const iceCream = iceCreamInput.value;

  patrickOutput.textContent = `Duuuh... You took ${naps} naps and ate ${iceCream} scoops of ice cream. Sounds like a productive day under the rock!`;
  createBubbles();
});

// Jellyfish Animation
function createJellyfish() {
    const jellyfishCount = 50; // Number of jellyfish to spawn
    for (let i = 0; i < jellyfishCount; i++) {
      const jellyfish = document.createElement("div");
      jellyfish.className =
        "absolute bg-purple-500 w-10 h-10 rounded-full opacity-75 animate-bounce";
  
      // Random positioning
      jellyfish.style.left = `${Math.random() * 100}%`;
      jellyfish.style.bottom = `${Math.random() * 100}%`;
  
      jellyfishContainer.appendChild(jellyfish);
  
      // Remove each jellyfish after 3 seconds
      setTimeout(() => {
        jellyfish.remove();
      }, 3000);
    }
  }

// Bubble Animation
function createBubbles() {
  const bubble = document.createElement("div");
  bubble.className =
    "absolute bg-white w-6 h-6 rounded-full opacity-50 animate-ping";
  bubble.style.left = `${Math.random() * 100}%`;
  bubble.style.bottom = `0`;

  jellyfishContainer.appendChild(bubble);

  setTimeout(() => {
    bubble.remove();
  }, 2000);
}