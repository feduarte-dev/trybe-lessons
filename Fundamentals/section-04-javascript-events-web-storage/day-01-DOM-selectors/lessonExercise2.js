// Busque o header da página através do id. Em seguida acesse a propriedade style do elemento, para ter acesso a propriedade backgroundColor e atribua a cor rgb(0, 176, 105).
document.getElementById('header-container').style.backgroundColor = 'green';

// Busque as divs das tarefas que são Urgentes e Importantes através da classe. Em seguida acesse a propriedade style do elemento, para ter acesso a propriedade backgroundColor e atribua a cor rgb(255, 159, 132).
document.getElementsByClassName('emergency-tasks')[0].style.backgroundColor = 'pink';
document.getElementsByClassName('no-emergency-tasks')[0].style.backgroundColor = 'yellow';

// Acesse o título das das tarefas que são Urgentes e Importantes através da classe e da tag que o título possui, para isso use a função querySelectorAll.
// A função querySelectorAll retorna uma lista de todos os elementos que atendem as condições passadas. Para alterar todos os elementos dessa lista use o laço de repetição for. Dentro do for para cada index acesse a propriedade style do elemento, para ter acesso a propriedade backgroundColor e atribua a cor rgb(165, 0, 243).
const emergencyTasksHeaders = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTasksHeaders.length; index += 1) {
    const currentTaskHeader = emergencyTasksHeaders[index];
    currentTaskHeader.style.backgroundColor = 'rgb(165, 0, 243)';
  }

// Busque as divs das tarefas que não são Urgentes e Importantes, agora através da função querySelector. Em seguida acesse a propriedade style, para ter acesso a propriedade backgroundColor e atribua a cor rgb(249, 219, 94).
const noEmergencyTasks = document.querySelector('.no-emergency-tasks');
noEmergencyTasks.style.backgroundColor = 'rgb(249, 219, 94)';

// Acesse o título das das tarefas que não são Urgentes e Importantes através da classe e da tag que o título possui, usando a função querySelectorAll.
// A função querySelectorAll retorna uma lista de todos os elementos que atendem as condições passadas. Para alterar todos os elementos dessa lista use o laço de repetição for. Dentro do for para cada index acesse a propriedade style do elemento, para ter acesso a propriedade backgroundColor e atribua a cor rgb(35, 37, 37).
const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
    noEmergencyTasksHeaders[index].style.backgroundColor = 'rgb(35, 37, 37)';
  }

// Busque o rodapé da página através do id. Em seguida acesse a propriedade style do elemento, para ter acesso a propriedade backgroundColor e atribua a cor rgb(0, 53, 51).
document.getElementById("footer-container").style.backgroundColor = 'rgb(0, 53, 51)';