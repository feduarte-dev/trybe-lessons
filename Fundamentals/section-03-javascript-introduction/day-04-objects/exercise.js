let order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

// function customerInfo(order) {
//   console.log('Olá ' + order.order.delivery.deliveryPerson + ', entrega para: ' + order.name + ', Telefone: ' + order.phoneNumber + ', R. ' + order.address.street + ', N: ' + order.address.number + ', AP: ' + order.address.apartment);
// }

// customerInfo(order);

function orderModifier(order) {
  order.name = 'Luiz Silva';
  order.payment.total = 50;
  console.log(
    'Olá, ' +
      order.name +
      ' o valor total de seu pedido de ' +
      Object.keys(order.order.pizza) +
      ' e ' +
      order.order.drinks.coke.type +
      ' é R$ ' +
      order.payment.total
  );
}

orderModifier(order);
console.log(order);
