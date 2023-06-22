import Swal from 'sweetalert2';
import './style.css';

const btn = document.querySelector('.btn');
const heroName = document.querySelector('.heroName');
const heroImg = document.querySelector('.heroImg');

const randomID = () => {
  const lastID = 1000;
  return Math.floor(Math.random() * lastID) + 1;
};

btn.addEventListener('click', () => {
  const id = randomID();
  const HEROE_API = `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${id}.json`;
  fetch(HEROE_API)
    .then((response) => response.json()).then((data) => {
      console.log(data);
      heroImg.src = data.images.md;
      heroName.innerHTML = data.name;
    }).catch((error) => {
      Swal.fire({ title: 'Hero not found',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Cool' });
    });
});
