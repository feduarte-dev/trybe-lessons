const techList = (listaTecnologia, string) => {
  if (listaTecnologia.length === 0) {
    return `Vazio!`;
  } else {
    let arraySort = listaTecnologia.sort();
    let arrayObj = [];

    for (let index = 0; index < arraySort.length; index += 1) {
      arrayObj.push({
        tech: arraySort[index],
        name: string,
      });
    }
    return arrayObj;
  }
};

module.exports = techList;
