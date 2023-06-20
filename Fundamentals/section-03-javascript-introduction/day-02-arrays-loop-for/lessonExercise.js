// Altere o valor da variável menuServices para que ela passe a ter o valor “Serviços”. Isso deve ser feito através da variável menu.
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];
console.log(menuServices);

// Adicione o valor “Contato” no final do array menu.
let indexOfPortfolio = menu[2];
console.log(indexOfPortfolio);
menu.push('Contato');
console.log(menu);

// Utilize o for para imprimir os elementos da lista groceryList através de console.log()
const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];
for (let index = 0; index < groceryList.length; index += 1) {
  const currentItem = groceryList[index];
  console.log(currentItem);
};

// Utilize o for Of para imprimir o nome das pessoas no console
let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let elementos of names) {
  console.log(elementos);
}
