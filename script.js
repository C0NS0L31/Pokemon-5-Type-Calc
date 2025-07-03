document.addEventListener('DOMContentLoaded', () => {
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


// Type colors (also unchanged)
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

// Get selected types
function getSelectedTypes() {
  const selectedTypes = [];
  for (let i = 1; i <= 5; i++) {
    const type = document.getElementById(`type${i}`).value;
    if (type !== "None") {
      selectedTypes.push(type);
    }
  }
  return selectedTypes;
}

// Get selected abilities dynamically
function getSelectedAbilities() {
  const abilities = [];
  document.querySelectorAll(".ability-select").forEach(select => {
    const value = select.value;
    if (value && value !== "None") {
      abilities.push(value);
    }
  });
  return abilities;
}

// Get selected items dynamically
function getSelectedItems() {
  const items = [];
  document.querySelectorAll(".item-select").forEach(select => {
    const value = select.value;
    if (value && value !== "None") {
      items.push(value);
    }
  });
  return items;
}

// Immunity & resistance logic
function applyAbilityAndItemImmunities(opponentType, baseEffectiveness, selectedAbilities, selectedItems) {
  for (const ability of selectedAbilities) {
    if (ability === "Levitate" && opponentType === "Ground") return 0;
    if (ability === "Flash Fire" && opponentType === "Fire") return 0;
    if (ability === "Thick Fat" && (opponentType === "Fire" || opponentType === "Ice")) {
      baseEffectiveness *= 0.5;
    }
  }

  for (const item of selectedItems) {
    if (item === "Air Balloon" && opponentType === "Ground") return 0;
    if (item === "Safety Goggles" && (opponentType === "Powder" || opponentType === "Weather")) return 0;
  }

  return baseEffectiveness;
}

// Calculate and display results
function calculateEffectiveness() {
  const selectedTypes = getSelectedTypes();
  const selectedAbilities = getSelectedAbilities();
  const selectedItems = getSelectedItems();

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = "";

  if (selectedTypes.length === 0) {
    alert("Please select at least one Pokémon type.");
    return;
  }

  const combinedEffectiveness = {};
  const immunities = new Set();

  selectedTypes.forEach(type => {
    for (let opponent in effectivenessMatrix[type]) {
      if (!combinedEffectiveness[opponent]) combinedEffectiveness[opponent] = 1;
      const mod = applyAbilityAndItemImmunities(opponent, effectivenessMatrix[type][opponent], selectedAbilities, selectedItems);
      combinedEffectiveness[opponent] *= mod;
      if (mod === 0) immunities.add(opponent);
    }
  });

  const effectivenessArray = Object.entries(combinedEffectiveness);
  effectivenessArray.sort((a, b) => b[1] - a[1]);

  const weaknesses = [];
  const resistances = [];

  effectivenessArray.forEach(([opponent, effectiveness]) => {
    const backgroundColor = typeColors[opponent] || "black";
    const textShadow = "2px 2px 4px rgba(0, 0, 0, 0.9), -2px -2px 4px rgba(0, 0, 0, 0.9)";
    let boxHTML = `
      <span class="type-box" style="background-color: ${backgroundColor}; color: white; text-shadow: ${textShadow};">
        ${opponent}: ${effectiveness === 1 ? "Normal effectiveness" :
        effectiveness === 0 ? "No effect" :
        `${effectiveness}x`}
      </span>`;

    if (immunities.has(opponent)) {
      resistances.push(`<p>${boxHTML.replace(/>.*<\/span>/, `> ${opponent}: Immune</span>`)}</p>`);
    } else if (effectiveness > 1) {
      weaknesses.push(`<p>${boxHTML}</p>`);
    } else {
      resistances.push(`<p>${boxHTML}</p>`);
    }
  });

  resultDiv.innerHTML += "<h4>Weaknesses:</h4>";
  resultDiv.innerHTML += weaknesses.length ? weaknesses.join("") : "<p>No major weaknesses.</p>";

  resultDiv.innerHTML += "<h4>Resistances:</h4>";
  resultDiv.innerHTML += resistances.length ? resistances.join("") : "<p>No major resistances.</p>";

  resultDiv.innerHTML += "<h4>Immunities:</h4>";
  if (immunities.size > 0) {
    immunities.forEach(immunity => {
      const bg = typeColors[immunity] || "black";
      resultDiv.innerHTML += `
        <p>
          <span class="type-box" style="background-color: ${bg}; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">
            ${immunity}: Immune
          </span>
        </p>`;
    });
  } else {
    resultDiv.innerHTML += "<p>No immunities.</p>";
  }

  resultDiv.innerHTML += "<hr>";
}

// Add/remove dropdowns
function addDropdown(containerId, selectClass, options, max, type) {
  const container = document.getElementById(containerId);
  const currentCount = container.querySelectorAll(`.${selectClass}`).length;

  if (currentCount >= max) return;

  const wrapper = document.createElement("div");
  wrapper.className = "dropdown-wrapper";

  const select = document.createElement("select");
  select.className = selectClass;

  const noneOption = document.createElement("option");
  noneOption.value = "None";
  noneOption.textContent = "None";
  select.appendChild(noneOption);

  options.forEach(opt => {
    const option = document.createElement("option");
    option.value = opt;
    option.textContent = opt;
    select.appendChild(option);
  });

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.textContent = "❌";
  removeButton.className = "remove-button";
  removeButton.onclick = () => wrapper.remove();

  wrapper.appendChild(select);
  wrapper.appendChild(removeButton);
  container.appendChild(wrapper);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submitButton").addEventListener("click", e => {
    e.preventDefault();
    calculateEffectiveness();
  });

  const abilityOptions = ["Levitate", "Flash Fire", "Thick Fat"];
  const itemOptions = ["Air Balloon", "Safety Goggles"];

  // Add buttons
  document.getElementById("addAbility").addEventListener("click", () => {
    addDropdown("abilitiesContainer", "ability-select", abilityOptions, 10, "Ability");
  });

  document.getElementById("addItem").addEventListener("click", () => {
    addDropdown("itemsContainer", "item-select", itemOptions, 10, "Item");
  });
});
});
