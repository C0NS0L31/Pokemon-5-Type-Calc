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
    "Water": 0,
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


// Function to get selected types from all rows (unchanged)
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

// Replace the old calculateEffectiveness with the updated version:

function calculateEffectiveness() {
  const selectedTypes = getSelectedTypes(); // Get selected types
  
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = ""; // Clear previous results

  if (selectedTypes.length === 0) {
    alert("Please select at least one Pokémon type.");
    return;
  }

  // Loop through each selected type and calculate effectiveness for each
  selectedTypes.forEach(type => {
    const combinedEffectiveness = {}; // Initialize combined effectiveness for the current type

    // Loop through each type in the effectiveness matrix
    for (let opponent in effectivenessMatrix[type]) {
      if (!combinedEffectiveness[opponent]) {
        combinedEffectiveness[opponent] = 1; // Initialize multiplier for the opponent type
      }
      combinedEffectiveness[opponent] *= effectivenessMatrix[type][opponent]; // Multiply effectiveness
    }

    // Convert the combinedEffectiveness object to an array of [opponent, effectiveness] pairs
    const effectivenessArray = Object.entries(combinedEffectiveness);

    // Sort the array by effectiveness (highest to lowest)
    effectivenessArray.sort((a, b) => b[1] - a[1]);

    // Create separate arrays for weaknesses and resistances for the current type
    const weaknesses = [];
    const resistances = [];

    // Categorize types based on effectiveness
    effectivenessArray.forEach(([opponent, effectiveness]) => {
      let effectivenessText = "";
      if (effectiveness === 0) {
        effectivenessText = "No effect";
      } else if (effectiveness === 1) {
        effectivenessText = "Normal effectiveness";
      } else if (effectiveness === 2) {
        effectivenessText = "2x effectiveness";
      } else if (effectiveness === 4) {
        effectivenessText = "4x effectiveness";
      } else if (effectiveness === 8) {
        effectivenessText = "8x effectiveness";
      } else {
        effectivenessText = `${effectiveness}x effectiveness`;
      }

      // Categorize the effectiveness
      if (effectiveness >= 2) {
        weaknesses.push(`<p><strong>${type}</strong> against ${opponent}: ${effectivenessText}</p>`);
      } else if (effectiveness < 1) {
        resistances.push(`<p><strong>${type}</strong> against ${opponent}: ${effectivenessText}</p>`);
      } else {
        resistances.push(`<p><strong>${type}</strong> against ${opponent}: ${effectivenessText}</p>`);
      }
    });

    // Display the weaknesses and resistances for the current type
    resultDiv.innerHTML += `<h3>Effectiveness for ${type}:</h3>`;

    resultDiv.innerHTML += "<h4>Weaknesses:</h4>";
    if (weaknesses.length > 0) {
      weaknesses.forEach(weakness => {
        resultDiv.innerHTML += weakness;
      });
    } else {
      resultDiv.innerHTML += "<p>No major weaknesses.</p>";
    }

    resultDiv.innerHTML += "<h4>Resistances:</h4>";
    if (resistances.length > 0) {
      resistances.forEach(resistance => {
        resultDiv.innerHTML += resistance;
      });
    } else {
      resultDiv.innerHTML += "<p>No major resistances.</p>";
    }

    resultDiv.innerHTML += "<hr>"; // Add a separator for clarity between types
  });
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitButton");

  // Use 'click' event for both desktop and mobile
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();  // Prevent default form submission behavior (if inside a form)
    calculateEffectiveness();  // Call the function when the button is clicked
  });
});
