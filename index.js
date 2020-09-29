const baseURL = "https://pokeapi.co/api/v2/pokemon/";
let pokeId;
let pokeInfo = document.querySelector("section");
// search form/input
const pokeNumber = document.getElementById("search");
const pokeForm = document.querySelector("form");
const section = document.querySelector("section");
pokeForm.addEventListener("submit", fetchPoke);
function fetchPoke(e) {
  e.preventDefault();
  let pokeName = pokeNumber.value.toLowerCase();
  fetch(`${baseURL}${pokeName}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      displayPoke(json);
    })
    .catch((err) =>
      alert("You entered an invalid Pokémon name or number! Please try again.")
    );
}
function displayPoke(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  let poke = json;
  let name = poke.name;
  let imageURL = poke.sprites.front_default;
  let height = poke.height;
  let weight = poke.weight;
  let inputName = document.createElement("h2");
  inputName.innerHTML = name;
  pokeInfo.appendChild(inputName);
  let inputPic = document.createElement("div");
  inputPic.innerHTML = `<img src= ${imageURL}>`;
  pokeInfo.appendChild(inputPic);
  let inputHgtWgt = document.createElement("h4");
  inputHgtWgt.innerHTML = `${height} dm ${weight} hg`;
  pokeInfo.appendChild(inputHgtWgt);
}
