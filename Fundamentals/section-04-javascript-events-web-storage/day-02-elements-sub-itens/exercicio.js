



const body = document.getElementsByTagName('body')
const titulo = document.createElement('h1')
titulo.classList.add('title')
titulo.innerText = 'TrybeTrip - Agência de Viagens'
body[0].appendChild(titulo)

const main = document.createElement('main')
main.classList.add('main-content')
main.style.backgroundColor = 'green'
body[0].appendChild(main)

const section = document.createElement('section')
section.classList.add('center-content')
main.appendChild(section)

const paragrafo = document.createElement('p')
paragrafo.innerHTML = 'Isso é um teste'
section.appendChild(paragrafo)

const section2 = document.createElement('section')
section2.classList.add('left-content')
main.appendChild(section2)

const section3 = document.createElement('section')
section3.classList.add('right-content')
section3.style.marginRight = 'auto'
main.appendChild(section3)

const imagem = document.createElement('img')
imagem.src = 'https://picsum.photos/200'
imagem.classList.add('small-image')
section2.appendChild(imagem)

const lista = document.createElement('ul')
section3.appendChild(lista)

const array = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
const itens = document.createElement('li')
for (let index = 0; index < array.length; index +=1) {
const itens = document.createElement('li')  
itens.innerHTML = array[index]
lista.appendChild(itens)
}

for (let index1 = 0; index1 < 3; index1 +=1){
const subtitulo = document.createElement('h3')
subtitulo.classList.add('description')
main.appendChild(subtitulo)
}
lista.lastElementChild.remove()
lista.lastElementChild.remove()

main.removeChild(section2)

console.log(body[0]);
