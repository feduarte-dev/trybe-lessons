const randomDog = document.querySelector('.randomDog');
const randomCat = document.querySelector('.randomCat');
const randomPet = document.querySelector('.randomPet');
const petImg = document.querySelector('.petImg');

const dogRandom = () => {
    const DOG_API = 'https://dog.ceo/api/breeds/image/random';
    fetch(DOG_API)
      .then((response) => response.json())
      .then((data) => {
        petImg.src = data.message;
      });
  };
  
  const catRandom = () => {
    const CAT_API = 'https://api.thecatapi.com/v1/images/search';
    fetch(CAT_API)
      .then((response) => response.json())
      .then((data) => {
        petImg.src = data[0].url;
      });
  };

randomDog.addEventListener('click', (event) => {
  event.preventDefault();
  dogRandom();
});

randomCat.addEventListener('click', (event) => {
  event.preventDefault();
  catRandom();
});

randomPet.addEventListener('click', (event) => {
  event.preventDefault();
  Promise.race([dogRandom(), catRandom()]).then((result) => {
    petImg.src = result;
  });
});
