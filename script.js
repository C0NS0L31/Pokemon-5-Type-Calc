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
// --- Helper Functions ---
function getSelectedTypes() {
  const types = [];
  for (let i = 1; i <= 5; i++) {
    const val = document.getElementById(`type${i}`).value;
    if (val !== "None") types.push(val);
  }
  return types;
}

function getSelectedAbilities() {
  return Array.from(document.querySelectorAll(".ability-select"))
    .map(sel => sel.value)
    .filter(val => val !== "None");
}

function getSelectedItems() {
  return Array.from(document.querySelectorAll(".item-select"))
    .map(sel => sel.value)
    .filter(val => val !== "None");
}

function applyAbilityAndItemImmunities(opponentType, baseEffectiveness, abilities, items) {
  for (const ab of abilities) {
    if (ab === "Levitate" && opponentType === "Ground") return 0;
    if (ab === "Flash Fire" && opponentType === "Fire") return 0;
    if (ab === "Thick Fat" && (opponentType === "Fire" || opponentType === "Ice")) {
      baseEffectiveness *= 0.5;
    }
  }
  for (const item of items) {
    if (item === "Air Balloon" && opponentType === "Ground") return 0;
    if (item === "Safety Goggles" && (opponentType === "Powder" || opponentType === "Weather")) return 0;
  }
  return baseEffectiveness;
}

function calculateEffectiveness() {
  const selectedTypes = getSelectedTypes();
  const abilities = getSelectedAbilities();
  const items = getSelectedItems();
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (selectedTypes.length === 0) {
    alert("Please select at least one type.");
    return;
  }

  const combinedEffectiveness = {};
  const immunities = new Set();

  selectedTypes.forEach(type => {
    const row = effectivenessMatrix[type];
    for (const opponent in row) {
      if (!combinedEffectiveness[opponent]) combinedEffectiveness[opponent] = 1;
      const mod = applyAbilityAndItemImmunities(opponent, row[opponent], abilities, items);
      combinedEffectiveness[opponent] *= mod;
      if (mod === 0) immunities.add(opponent);
    }
  });

  const sorted = Object.entries(combinedEffectiveness).sort((a, b) => b[1] - a[1]);
  const weaknesses = [], resistances = [];

  sorted.forEach(([opponent, eff]) => {
    const bg = typeColors[opponent] || "black";
    const text = eff === 0 ? "Immune" : (eff === 1 ? "Normal" : `${eff}x`);
    const box = `<span class="type-box" style="background-color: ${bg}; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">${opponent}: ${text}</span>`;
    if (eff === 0) return;
    if (eff > 1) weaknesses.push(`<p>${box}</p>`);
    else resistances.push(`<p>${box}</p>`);
  });

  resultDiv.innerHTML += "<h4>Weaknesses:</h4>" + (weaknesses.length ? weaknesses.join("") : "<p>None</p>");
  resultDiv.innerHTML += "<h4>Resistances:</h4>" + (resistances.length ? resistances.join("") : "<p>None</p>");
  resultDiv.innerHTML += "<h4>Immunities:</h4>";
  if (immunities.size) {
    immunities.forEach(type => {
      const bg = typeColors[type] || "black";
      resultDiv.innerHTML += `<p><span class="type-box" style="background-color: ${bg}; color: white; text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">${type}: Immune</span></p>`;
    });
  } else {
    resultDiv.innerHTML += "<p>No immunities.</p>";
  }

  resultDiv.innerHTML += "<hr>";
}

// --- Add Dropdown ---
function addDropdown(containerId, selectClass, options, max) {
  const container = document.getElementById(containerId);
  const count = container.querySelectorAll(`.${selectClass}`).length;
  if (count >= max) return;

  const wrapper = document.createElement("div");
  wrapper.className = "dropdown-wrapper";

  const select = document.createElement("select");
  select.className = selectClass;

  select.innerHTML = `<option value="None">None</option>` + options.map(opt =>
    `<option value="${opt}">${opt}</option>`
  ).join("");

  const removeBtn = document.createElement("button");
  removeBtn.type = "button";
  removeBtn.textContent = "❌";
  removeBtn.className = "remove-button";
  removeBtn.onclick = () => wrapper.remove();

  wrapper.appendChild(select);
  wrapper.appendChild(removeBtn);
  container.appendChild(wrapper);
}

// --- Event Listeners ---
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("submitButton").addEventListener("click", e => {
    e.preventDefault();
    calculateEffectiveness();
  });

  const abilityOptions = ["Levitate", "Flash Fire", "Thick Fat"];
  const itemOptions = ["Air Balloon", "Safety Goggles"];

  document.getElementById("addAbilityBtn").addEventListener("click", () => {
    addDropdown("abilities-container", "ability-select", abilityOptions, 10);
  });

  document.getElementById("addItemBtn").addEventListener("click", () => {
    addDropdown("items-container", "item-select", itemOptions, 10);
  });
});
