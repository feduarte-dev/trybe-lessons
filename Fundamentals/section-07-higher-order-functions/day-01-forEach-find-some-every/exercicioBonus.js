const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDmg = () => {
  dano = Math.floor(Math.random() * (dragon.strength - 15 + 1)) + 15;
  return dano;
};

const warriorDmg = () => {
  dano =
    Math.floor(
      Math.random() *
        (warrior.strength * warrior.weaponDmg - warrior.strength + 1)
    ) + warrior.strength;
  return dano;
};

const mageDmg = () => {
  let mageMana = mage.mana;
  const obj = {
    dano:
      Math.floor(
        Math.random() * (mage.intelligence * 2 - mage.intelligence + 1)
      ) + mage.intelligence,
    manaGasta: 15,
  };

  if (mageMana > 15) {
    return obj;
  } else {
    obj.dano = 0;
    manaGasta = `Não possui mana suficiente`;
  }
  return obj;
};

const gameActions = {
  WarriorTurn: () => {
    const warriorDano = warriorDmg();
    warrior.damage = warriorDano;
    dragon.healthPoints = dragon.healthPoints - warriorDano;
  },
  MageTurn: () => {
    const mageDano = mageDmg();
    mage.damage = mageDano;
    dragon.healthPoints = dragon.healthPoints - mageDano.dano;
    mage.mana = mage.mana - mageDano.manaGasta;
  },
  DragonTurn: () => {
    dragon.damage = dragonDmg();
    warrior.healthPoints = warrior.healthPoints - dragon.damage;
    mage.healthPoints = mage.healthPoints - dragon.damage;
  },
  turnResults: () => battleMembers,
};

gameActions.WarriorTurn();
gameActions.MageTurn();
gameActions.DragonTurn();
console.log(gameActions.turnResults());
gameActions.WarriorTurn();
gameActions.MageTurn();
gameActions.DragonTurn();
console.log(gameActions.turnResults());
gameActions.WarriorTurn();
gameActions.MageTurn();
gameActions.DragonTurn();
console.log(gameActions.turnResults());
