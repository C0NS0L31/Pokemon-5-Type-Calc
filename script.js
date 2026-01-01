// Effectiveness matrix (example for a few types)
const effectivenessMatrix = {
  "Fire": {
    "Fire": .5,
    "Water": 2,
    "Grass": 0.5,
    "Electric": 1,
    "Bug": 0.5,
    "Flying": 1,
    "Dragon": 1,
    "Fairy": .5,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 1,
    "Steel": 0.5,
    "Fighting": 1,
    "Psychic": 1,
    "Normal": 1,
    "Ice": .5,
    "Rock": 2,
    "Ground": 2
  },
  "Water": {
    "Fire": 0.5,
    "Water": 0.5,
    "Grass": 2,
    "Electric": 2,
    "Bug": 1,
    "Flying": 1,
    "Dragon": 1,
    "Fairy": 1,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 1,
    "Steel": 0.5,
    "Fighting": 1,
    "Psychic": 1,
    "Normal": 1,
    "Ice": 0.5,
    "Rock": 1,
    "Ground": 1
  },
  "Grass": {
    "Fire": 2,
    "Water": 0.5,
    "Grass": 0.5,
    "Electric": 0.5,
    "Bug": 2,
    "Flying": 2,
    "Dragon": 1,
    "Fairy": 1,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 2,
    "Steel": 1,
    "Fighting": 1,
    "Psychic": 1,
    "Normal": 1,
    "Ice": 2,
    "Rock": 1,
    "Ground": 0.5
  },
  "Electric": {
    "Fire": 1,
    "Water": 1,
    "Grass": 1,
    "Electric": 0.5,
    "Bug": 1,
    "Flying": 0.5,
    "Dragon": 1,
    "Fairy": 1,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 1,
    "Steel": 0.5,
    "Fighting": 1,
    "Psychic": 1,
    "Normal": 1,
    "Ice": 1,
    "Rock": 1,
    "Ground": 2
  },
  "Bug": {
    "Fire": 2,
    "Water": 1,
    "Grass": 0.5,
    "Electric": 1,
    "Bug": 1,
    "Flying": 2,
    "Dragon": 1,
    "Fairy": 1,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 1,
    "Steel": 1,
    "Fighting": 0.5,
    "Psychic": 1,
    "Normal": 1,
    "Ice": 1,
    "Rock": 2,
    "Ground": 0.5
  },
  "Flying": {
    "Fire": 1,
    "Water": 1,
    "Grass": 0.5,
    "Electric": 2,
    "Bug": 0.5,
    "Flying": 1,
    "Dragon": 1,
    "Fairy": 1,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 1,
    "Steel": 1,
    "Fighting": 0.5,
    "Psychic": 1,
    "Normal": 1,
    "Ice": 2,
    "Rock": 2,
    "Ground": 0
  },
  "Dragon": {
    "Fire": 0.5,
    "Water": 0.5,
    "Grass": 0.5,
    "Electric": 0.5,
    "Bug": 1,
    "Flying": 1,
    "Dragon": 2,
    "Fairy": 2,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 1,
    "Steel": 1,
    "Fighting": 1,
    "Psychic": 1,
    "Normal": 1,
    "Ice": 2,
    "Rock": 1,
    "Ground": 1
  },
  "Fairy": {
    "Fire": 1,
    "Water": 1,
    "Grass": 1,
    "Electric": 1,
    "Bug": 0.5,
    "Flying": 1,
    "Dragon": 0,
    "Fairy": 1,
    "Dark": 0.5,
    "Ghost": 1,
    "Poison": 2,
    "Steel": 2,
    "Fighting": 0.5,
    "Psychic": 1,
    "Normal": 1,
    "Ice": 1,
    "Rock": 1,
    "Ground": 1
  },
  "Dark": {
    "Fire": 1,
    "Water": 1,
    "Grass": 1,
    "Electric": 1,
    "Bug": 2,
    "Flying": 1,
    "Dragon": 1,
    "Fairy": 2,
    "Dark": 0.5,
    "Ghost": 0.5,
    "Poison": 1,
    "Steel": 1,
    "Fighting": 2,
    "Psychic": 0,
    "Normal": 1,
    "Ice": 1,
    "Rock": 1,
    "Ground": 1
  },
  "Ghost": {
    "Fire": 1,
    "Water": 1,
    "Grass": 1,
    "Electric": 1,
    "Bug": 0.5,
    "Flying": 1,
    "Dragon": 1,
    "Fairy": 1,
    "Dark": 2,
    "Ghost": 2,
    "Poison": 0.5,
    "Steel": 1,
    "Fighting": 0,
    "Psychic": 1,
    "Normal": 0,
    "Ice": 1,
    "Rock": 1,
    "Ground": 1
  },
  "Poison": {
    "Fire": 1,
    "Water": 1,
    "Grass": 0.5,
    "Electric": 1,
    "Bug": 0.5,
    "Flying": 1,
    "Dragon": 1,
    "Fairy": 0.5,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 0.5,
    "Steel": 1,
    "Fighting": 0.5,
    "Psychic": 2,
    "Normal": 1,
    "Ice": 1,
    "Rock": 1,
    "Ground": 2
  },
  "Steel": {
    "Fire": 2,
    "Water": 1,
    "Grass": 0.5,
    "Electric": 1,
    "Bug": 0.5,
    "Flying": 0.5,
    "Dragon": 0.5,
    "Fairy": 0.5,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 0,
    "Steel": 0.5,
    "Fighting": 2,
    "Psychic": 0.5,
    "Normal": 0.5,
    "Ice": 0.5,
    "Rock": 0.5,
    "Ground": 2
  },
  "Fighting": {
    "Fire": 1,
    "Water": 1,
    "Grass": 1,
    "Electric": 1,
    "Bug": 0.5,
    "Flying": 2,
    "Dragon": 1,
    "Fairy": 2,
    "Dark": 0.5,
    "Ghost": 1,
    "Poison": 1,
    "Steel": 1,
    "Fighting": 1,
    "Psychic": 2,
    "Normal": 1,
    "Ice": 1,
    "Rock": 0.5,
    "Ground": 1
  },
  "Psychic": {
    "Fire": 1,
    "Water": 1,
    "Grass": 1,
    "Electric": 1,
    "Bug": 2,
    "Flying": 1,
    "Dragon": 1,
    "Fairy": 1,
    "Dark": 2,
    "Ghost": 2,
    "Poison": 1,
    "Steel": 1,
    "Fighting": 0.5,
    "Psychic": 0.5,
    "Normal": 1,
    "Ice": 1,
    "Rock": 1,
    "Ground": 1
  },
  "Normal": {
    "Fire": 1,
    "Water": 1,
    "Grass": 1,
    "Electric": 1,
    "Bug": 1,
    "Flying": 1,
    "Dragon": 1,
    "Fairy": 1,
    "Dark": 1,
    "Ghost": 0,
    "Poison": 1,
    "Steel": 1,
    "Fighting": 2,
    "Psychic": 1,
    "Normal": 1,
    "Ice": 1,
    "Rock": 1,
    "Ground": 1
  },
  "Ice": {
    "Fire": 2,
    "Water": 1,
    "Grass": 1,
    "Electric": 1,
    "Bug": 1,
    "Flying": 1,
    "Dragon": 1,
    "Fairy": 1,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 1,
    "Steel": 2,
    "Fighting": 2,
    "Psychic": 1,
    "Normal": 1,
    "Ice": 0.5,
    "Rock": 2,
    "Ground": 1
  },
  "Rock": {
    "Fire": 0.5,
    "Water": 2,
    "Grass": 2,
    "Electric": 1,
    "Bug": 1,
    "Flying": 0.5,
    "Dragon": 1,
    "Fairy": 1,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 0.5,
    "Steel": 2,
    "Fighting": 2,
    "Psychic": 1,
    "Normal": 0.5,
    "Ice": 1,
    "Rock": 1,
    "Ground": 2
  },
  "Ground": {
    "Fire": 1,
    "Water": 2,
    "Grass": 2,
    "Electric": 0,
    "Bug": 1,
    "Flying": 1,
    "Dragon": 1,
    "Fairy": 1,
    "Dark": 1,
    "Ghost": 1,
    "Poison": 0.5,
    "Steel": 1,
    "Fighting": 1,
    "Psychic": 1,
    "Normal": 1,
    "Ice": 2,
    "Rock": 0.5,
    "Ground": 1
  }
};


// Function to get selected types from all rows
function getSelectedTypes() {
  let selectedTypes = [];
  for (let i = 1; i <= 5; i++) {
    const type = document.getElementById(`type${i}`).value;
    if (type !== "None") { // Only add types that are not "None"
      selectedTypes.push(type);
    }
  }
  return selectedTypes;
}
// NEW: Get all selected abilities (assumes inputs have ids ability1, ability2, ability3)
function getSelectedAbilities() {
  const abilities = [];
  for (let i = 1; i <= 3; i++) {
    const ability = document.getElementById(`ability${i}`).value;
    if (ability !== "None") {
      abilities.push(ability);
    }
  }
  return abilities;
}

// NEW: Get all selected items (assumes inputs have ids item1, item2, item3)
function getSelectedItems() {
  const items = [];
  for (let i = 1; i <= 3; i++) {
    const item = document.getElementById(`item${i}`).value;
    if (item !== "None") {
      items.push(item);
    }
  }
  return items;
}

// Updated function to calculate and display combined effectiveness, including immunities
function calculateEffectiveness() {
  const selectedTypes = getSelectedTypes(); // Get selected types
  const selectedAbilities = getSelectedAbilities(); // Get selected abilities
  const selectedItems = getSelectedItems(); // Get selected items

  // Modify effectiveness based on ability or item
  function applyAbilityAndItemImmunities(opponentType, baseEffectiveness) {
    // Check all selected abilities
    for (const ability of selectedAbilities) {
      if (ability === "Levitate" && opponentType === "Ground") {
        return 0;
      }
      if (ability === "NOWATER" && opponentType === "Water") {
        return 0;
      }
      if (ability === "Flash Fire" && opponentType === "Fire") {
        return 0;
      }
      if (ability === "Thick Fat" && (opponentType === "Fire" || opponentType === "Ice")) {
        baseEffectiveness *= 0.5;
      }
    }

    // Check all selected items
    for (const item of selectedItems) {
      if (item === "Air Balloon" && opponentType === "Ground") {
        return 0;
      }
      if (item === "Safety Goggles" && (opponentType === "Powder" || opponentType === "Weather")) {
        return 0;
      }
    }

    return baseEffectiveness;
  }

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ""; // Clear previous results

  if (selectedTypes.length === 0) {
    alert("Please select at least one Pokémon type.");
    return; // Prevent further execution
  }

  // Initialize combined effectiveness map
  const combinedEffectiveness = {};
  const immunities = new Set(); // To track types with 0x effectiveness

  // Calculate effectiveness for each selected type
  selectedTypes.forEach(type => {
    for (let opponent in effectivenessMatrix[type]) {
      if (!combinedEffectiveness[opponent]) {
        combinedEffectiveness[opponent] = 1;
      }
      const modifiedEffectiveness = applyAbilityAndItemImmunities(opponent, effectivenessMatrix[type][opponent]);
      combinedEffectiveness[opponent] *= modifiedEffectiveness;

      if (modifiedEffectiveness === 0) {
        immunities.add(opponent);
      }
    }
  });

  const effectivenessArray = Object.entries(combinedEffectiveness);
  effectivenessArray.sort((a, b) => b[1] - a[1]);

  const weaknesses = [];
  const resistances = [];

  effectivenessArray.forEach(([opponent, effectiveness]) => {
    const backgroundColor = typeColors[opponent] || "black";
    const textShadow = "2px 2px 4px rgba(0, 0, 0, 0.9), -2px -2px 4px rgba(0, 0, 0, 0.9)";
    let effectivenessText = "";

    if (immunities.has(opponent)) {
      effectivenessText = `
        <span class="type-box" style="background-color: ${backgroundColor}; color: white; text-shadow: ${textShadow};">
          ${opponent}: No effect
        </span>`;
    } else if (effectiveness > 1) {
      effectivenessText = `
        <span class="type-box" style="background-color: ${backgroundColor}; color: white; text-shadow: ${textShadow};">
          ${opponent}: ${effectiveness}x effectiveness
        </span>`;
      weaknesses.push(effectivenessText);
    } else if (effectiveness >= 0.01 && effectiveness <= 1) {
      effectivenessText = `
        <span class="type-box" style="background-color: ${backgroundColor}; color: white; text-shadow: ${textShadow};">
          ${opponent}: ${effectiveness === 1 ? "Normal effectiveness" : `${effectiveness}x resistance`}
        </span>`;
      resistances.push(effectivenessText);
    }
  });

  resultDiv.innerHTML += "<h4>Weaknesses:</h4>";
  resultDiv.innerHTML += weaknesses.length ? weaknesses.map(w => `<p>${w}</p>`).join("") : "<p>No major weaknesses.</p>";

  resultDiv.innerHTML += "<h4>Resistances:</h4>";
  resultDiv.innerHTML += resistances.length ? resistances.map(r => `<p>${r}</p>`).join("") : "<p>No major resistances.</p>";

  resultDiv.innerHTML += "<h4>Immunities:</h4>";
  if (immunities.size > 0) {
    immunities.forEach(immunity => {
      const backgroundColor = typeColors[immunity] || "black";
      resultDiv.innerHTML += `
        <p>
          <span class="type-box" style="background-color: ${backgroundColor}; color: white; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9), -2px -2px 4px rgba(0, 0, 0, 0.9);">
            ${immunity}: Immune
          </span>
        </p>`;
    });
  } else {
    resultDiv.innerHTML += "<p>No immunities.</p>";
  }

  resultDiv.innerHTML += "<hr>";
}

const typeColors = {
  "Fire": "red",
  "Water": "blue",
  "Grass": "green",
  "Electric": "yellow",
  "Bug": "olive",
  "Flying": "skyblue",
  "Dragon": "purple",
  "Fairy": "pink",
  "Dark": "black",
  "Ghost": "indigo",
  "Poison": "violet",
  "Steel": "gray",
  "Fighting": "brown",
  "Psychic": "magenta",
  "Normal": "silver",
  "Ice": "cyan",
  "Rock": "goldenrod",
  "Ground": "sienna"
};




// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitButton");

  // Use 'click' event for both desktop and mobile
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();  // Prevent default form submission behavior (if inside a form)
    calculateEffectiveness();  // Call the function when the button is clicked
  });
});

