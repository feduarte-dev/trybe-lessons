import Swal from 'sweetalert2';

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');

async function handleClick() {
  const cep = inputEl.value;

  try {
    const result = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await result.json();

    preEl.innerHTML = JSON.stringify(data);
    return data;
  } catch (error) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'error.message!',
    });
  }
}

buttonEl.addEventListener('click', handleClick);
//------------------------------
export async function handleSearch(event) {
  event.preventDefault();
  clearChildrenById('cities');

  const searchInput = document.getElementById('search-input');
  const searchValue = searchInput.value;
  searchCities(searchValue);
  const cities = await searchCities(searchValue);
  cities.map((city) => city.url)
    .forEach((link) => getWeatherByCity(link));
}

//---------------------------------
const API_TOKEN = import.meta.env.VITE_TOKEN;

export const searchCities = async (term) => {
  const CITY_API = `http://api.weatherapi.com/v1/search.json?lang=pt&key=${API_TOKEN}&q=${term}`;
  const result = await fetch(CITY_API);
  const data = await result.json();
  if (data.length === 0) window.alert('Nenhuma cidade encontrada');
  else { return data; }
};

export const getWeatherByCity = async (cityURL) => {
  const WEATHER_API = `http://api.weatherapi.com/v1/current.json?lang=pt&key=${API_TOKEN}&q=${cityURL}`;
  const result = await fetch(WEATHER_API);
  const data = await result.json();
  return {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };
};
