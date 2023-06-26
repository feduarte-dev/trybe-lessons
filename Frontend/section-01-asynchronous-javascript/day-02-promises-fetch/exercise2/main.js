const randomDigi = document.querySelector('.randomDigi');
const digiLevel = document.querySelector('.digiLevel');
const digiImg = document.querySelector('.digiImg');
const digiName = document.querySelector('.digiName');

randomDigi.addEventListener('click', (event) => {
  event.preventDefault();
  digiRandom();
});

const randomId = () => {
  const lastID = 208;
  return Math.floor(Math.random() * lastID) + 1;
};

const digiRandom = () => {
  const digimon = randomId();
  const DIGI_API = `https://digimon-api.vercel.app/api/digimon`;
  fetch(DIGI_API)
    .then((response) => response.json())
    .then((data) => {
      digiImg.src = data[digimon].img;
      digiName.innerHTML = `Nome: ${data[digimon].name}`;
      digiLevel.innerHTML = `Nível: ${data[digimon].level}`;
    });
};
