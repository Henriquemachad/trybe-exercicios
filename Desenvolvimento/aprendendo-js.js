/*{ 
  Melancia: 3,
  Abacate: 1,
  Uva: 1 
}
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

                                       ///Soluções

                                       const basket = [
                                        'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
                                        'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
                                        'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
                                        'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
                                        'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
                                        'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
                                        'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
                                        'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
                                        'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
                                        'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
                                        'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
                                        'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
                                        'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
                                        'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
                                        'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
                                        'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
                                        'Banana', 'Pera', 'Abacate', 'Uva',
                                      ];
                                      
                                      // Criação de objeto
                                      const result = {};
                                      
                                      // Loop que irá contar quantas vezes cada fruta aparece no array basket
                                      for (let index = 0; index < basket.length; index += 1) {
                                        let fruit = basket[index];
                                        // Se a propriedade com o nome da fruta ainda não existir, então ela será criada com o valor 1. Caso ela já exista, vamos incrementar o valor.
                                        if (!result[fruit]) {
                                          result[fruit] = 1;
                                        } else {
                                          result[fruit] += 1;
                                        }
                                      };
                                      
                                      // Convertemos o objeto result em um array
                                      const entries = Object.entries(result);
                                      
                                      // Criação de um novo array
                                      let newArray = [];
                                      
                                      // Loop que irá verificar se o número de frutas é maior ou não do que 1. Caso seja maior, adicionamos a letra "s".
                                      for (let index = 0; index < entries.length; index += 1) {
                                        if (entries[index][1] > 1) {
                                          newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
                                        } else {
                                          newArray.push(`${entries[index][1]} ${entries[index][0]}`);
                                        }
                                      };
                                      
                                      // Exibimos a string juntando os valores do array "newArray" com uma vírgula e um espaço em branco.
                                      console.log(`Sua cesta possui: ${newArray.join(', ')}.`);
/*const school = {
  lessons: [
    {
      course: 'Python',
      students: 20,
      professor: 'Carlos Patrício',
      shift: 'Manhã',
    },
    {
      course: 'Kotlin',
      students: 10,
      professor: 'Gabriel Oliva',
      shift: 'Noite',
    },
    {
      course: 'JavaScript',
      students: 738,
      professor: 'Gustavo Caetano',
      shift: 'Tarde',
    },
    {
      course: 'MongoDB',
      students: 50,
      shift: 'Noite',
    },
  ]
};

                           ///Soluções
                           const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(school, 0));
const getNumberOfStudents = (obj) => {
  // Declara uma variável para contador
  let count = 0;

  // Itera o array e incrementa em count o total de estudantes em cada curso
  for (let index = 0; index < obj.lessons.length; index += 1) {
    count += obj.lessons[index].students;
  }

  // Retorna o total de estudantes
  return count;
}

console.log(getNumberOfStudents(school));
const verifyProp = (obj, key) => {
  for (let index = 0; index < obj.lessons.length; index += 1) {
    if (obj.lessons[index][key] === undefined) {
      return false;
    }
  }
  return true;
}

console.log(verifyProp(school, 'professor')); // false
const changeKey = (obj, course, value) => {
  // Encontra o elemento que o course é igual a Python
  let findCourse;
  for (let index = 0; index < obj.lessons.length; index += 1) {
    let element = obj.lessons[index];
    if (element.course === course) {
      findCourse = element;
      break;
    }
  }

  // Condição para exibir o resultado. Caso o findCourse seja undefined, significa que o curso não foi encontrado.
  if (findCourse !== undefined) {
    findCourse.shift = value;
    return findCourse;
  } else {
    return 'Curso não encontrado.';
  }
};

console.log(changeKey(school, 'Python', 'Noite'));
/*const order = {
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

const customerInfo = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
}

console.log(customerInfo(order));

const orderModifier = (fullOrder) => {
  // Adicione abaixo as informações necessárias.
}

console.log(orderModifier(order));

                                //Soluções
                                const customerInfo = (fullOrder) => {
                                  const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
                                  const costumerName = fullOrder.name;
                                  const phoneNumber = fullOrder.phoneNumber;
                                  const street = fullOrder.address.street;
                                  const addressNumber = fullOrder.address.number;
                                  const apartment = fullOrder.address.apartment;
                                
                                  return `Olá, ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${street}, Número: ${addressNumber}, AP: ${apartment}.`;
                                }
                                
                                console.log(customerInfo(order));

                                const orderModifier = (fullOrder) => {
                                  // Altera o nome
                                  fullOrder.name = 'Luiz Silva';
                                  fullOrder.payment.total = 50;
                                
                                  // Pega todos os nomes de pizzas em um array e junto os valores com uma vírgula mais um espaço. join(', ')
                                  const pizzas = Object.keys(fullOrder.order.pizza).join(', ');
                                
                                  // Retorna a string com o resultado
                                  return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total},00.`;
                                }
                                
                                console.log(orderModifier(order));

/*const reader = {
  name: 'Julia',
  lastName: 'Pessoa',
  age: 21,
  favoriteBooks: [
    {
      title: 'O Senhor dos Anéis - a Sociedade do Anel',
      author: 'J. R. R. Tolkien',
      publisher: 'Martins Fontes',
    },
  ],
};
let message = `O livro favorito de ${reader.name} ${reader.lastName} se chama "${reader.favoriteBooks[0].title}".`;
console.log(message);
reader.favoriteBooks.push(
  {
    title: 'Harry Potter e o Prisioneiro de Azkaban',
    author: 'JK Rowling',
    publisher: 'Rocco',
  },
);

console.log(reader);

// Nessa solução, temos duas saídas. Se o número de livros favoritos for maior que 1, escreve "livros favoritos", no plural. Se não for maior que 1, escreve no singular: "livro favorito".
const numFavoriteBooks = reader.favoriteBooks.length;

numFavoriteBooks > 1 
  ? console.log(`${reader.name} tem ${numFavoriteBooks} livros favoritos.`) 
  : console.log(`${reader.name} tem ${numFavoriteBooks} livro favorito.`);

/*const menu = {
  sandwiches: [
    {
      name: 'Big Mac',
      price: 26.90,
      ingredients: ['2 hambúrgueres', 'alface americana', 'queijo cheddar', 'molho especial', 'cebola', 'picles', 'pão com gergelim'],
      calories: 503,
    },
    {
      name: 'Duplo Quarterão',
      price: 39.90,
      ingredients: ['2 hambúrgueres', 'mostarda', 'ketchup', 'cebola', 'queijo cheddar', 'pão com gergelim'],
      calories: 762,
    },
    {
      name: 'Big Tasty',
      price: 39.90,
      ingredients: ['1 hambúrguer', 'queijo emental', 'tomate', 'alface americana', 'cebola', 'molho tasty', 'pão com gergelim'],
      calories: 944,
    },
  ],
  sideDishes: [
    {
      name: 'Chicken McNuggets - 10 unidades',
      price: 16.90,
      ingredients: ['frango empanado'],
      calories: 414,
    },
    {
      name: 'McFritas Kids',
      price: 8.90,
      ingredients: ['batata', 'sal'],
      calories: 90,
    },
    {
      name: 'McFritas Pequena',
      price: 11.90,
      ingredients: ['batata', 'sal'],
      calories: 211,
    },
    {
      name: 'McFritas Média',
      price: 13.90,
      ingredients: ['batata', 'sal'],
      calories: 295,
    },
    {
      name: 'McFritas Grande',
      price: 15.90,
      ingredients: ['batata', 'sal'],
      calories: 422,
    },
  ],
  desserts: [
    {
      name: 'McFlurry Ovomaltine Caramelo',
      price: 13.90,
      ingredients: ['bebida láctea sabor baunilha', 'flocos de ovomaltine', 'cobertura de caramelo'],
      calories: 462,
    },
    {
      name: 'Top Sundae Chocolate',
      price: 11.90,
      ingredients: ['bebida láctea sabor baunilha', 'cobertura de chocolate', 'farofa de paçoca', 'canudo'],
      calories: 377,
    },
    {
      name: 'Torta de Banana',
      price: 6.90,
      ingredients: ['banana', 'massa crocante'],
      calories: 222,
    },
  ],
  drinks: [
    {
      name: 'Coca-Cola 300ml',
      price: 13.90,
      calories: 129,
    },
    {
      name: 'Del Valle Uva 500ml',
      price: 11.90,
      calories: 200,
    }
  ],
}


1. Crie uma função que imprima o nome e o valor de todos os lanches disponíveis;


2.Crie uma função que ao passar o nome de um lanche, retorna o objeto completo dele.

3. Crie uma função que ao passar o valor que eu tenho na carteira, retorna um array com o nome dos lanches que posso comprar. Exemplo de retorno: [ 'Big Mac', 'Duplo Quarterão', 'Big Tasty' ]

4. Crie uma função que ao passar um nome de ingrediente, retorna um array com quais lanches tem aquele ingrediente

Exemplo: ao colocar queijo cheddar, retorna:
[
  {
    name: 'Big Mac',
    price: 26.9,
    ingredients: [
      '2 hambúrgueres',
      'alface americana',
      'queijo cheddar',
      'molho especial',
      'cebola',
      'picles',
      'pão com gergelim'
    ],
    calories: 503
  },
  {
    name: 'Duplo Quarterão',
    price: 39.9,
    ingredients: [
      '2 hambúrgueres',
      'mostarda',
      'ketchup',
      'cebola',
      'queijo cheddar',
      'pão com gergelim'
    ],
    calories: 762
  }
]

/*const mcDonalds ={
  bigMac: 45.90,
  bigTasty:39.99,
  mcFritasMedia: 9.90,
  city: 'Curitiba',
  unit: ['Shoppind de Curitiba', 'Shopping Estação'],

}
let message =  `O Bigtasty do ${mcDonalds['unit'][1]} que fica em ${mcDonalds.city} custa r${mcDonalds.bigTasty}`;
console.log(message);
                  ///Dia 4 objetos

///object.keys() retorna o valor do objeto  
//console.log(Object.keys(product)); // [ 'name', 'price', 'company', 'nutritionInfo' ]
///object.values() retorna os falores que tem dentro do objeto
//console.log(Object.values(product));
/*console.log(Object.entries(product));
[
  [ 'name', 'Ruffles Original - 76g' ],
  [ 'price', 8.59 ],
  [ 'company', 'Elma Chips' ],
  [ 'nutritionInfo', { carbohydrates: 12, sugar: 0, sodium: 129 } ]
]
*/
/*index < arrayNumeros.length; index += 1) {
    //for (let indexDeDe
[
  'Ruffles Original - 76g',
  8.59,

  'Elma Chips',

  { 

    carbohydrates: 12, 

    sugar: 0, 

    sodium: 129 

  }

]


const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Software Engineer',
};
const addProperty = (object, key, value) => {

  if (typeof object[key] === "undefined"){

    object[key] = value;

  }

};
addProperty(customer, 'email', 'roberto.varella@gmail.com');

addProperty(customer, 'fone', '99999-9999');

addProperty(customer, 'userGithub', 'rob-var');

addProperty(customer, 'linkedIn', 'https://linkedin.com/robs-varella-wow');

addProperty(customer, 'email', 'fone', 'userGithub', 'linkedIn')
console.log(customer)
//const user = {
  //id: 99,
  //email: 'jakeperalta@gmail.com',
  //info: {
   // name: 'Jake',
   // lastName: 'Peralta',
    //address: {
      //street: 'Rua Dalvo Trombeta, 357 - Fundos',
      //district: 'Xererê',
      //city: 'Santana do Livramento',
     // state: 'Rio Grande do Norte',
   // },
 // },
//};

//console.log(user['id']); // 99

//console.log(user.email); // jakeperalta@gmail.com

//console.log(user.info.address.street); // Rua Dalvo Trombeta, 357 - Fundos

//console.log(user['info']['address']['city']); // Santana do Livramento

//const sortNumber = (arrayNumeros) => {
  //let aux;
  //for (let index = 0; index < arrayNumeros.length; index += 1) {
    //for (let indexDeDentro = 1; indexDeDentro < arrayNumeros.length; indexDeDentro += 1) {
      //if (arrayNumeros[index] > arrayNumeros[indexDeDentro]) {
       //aux = arrayNumeros[index];
       //arrayNumeros[index] = arrayNumeros[indexDeDentro];
       //arrayNumeros[indexDeDentro] = aux;
      //}
    //}
  //}
//};
//sortNumber([99, 5, 6, 1, 0])

//const biggerSmallerNumber = (arrayNumber) => {
  //let bigger = arrayNumber[0];
  //let smaller = arrayNumber[0];

  //for  (letindex =0; index < arrayNumber.length; index += 1) {
    //if (arrayNumber[index]> bigger){
      //bigger = arrayNumber[index];
    //}  else if(arrayNumber[index] < smaller)
    //smaller = arrayNumber[index];
  //}
//};
 
  //return `Maior: ${bigger}
    //               Menor: ${smaller}`
  

///biggerSmallerNumber([0, 34, 56, 100, 2])

// const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

// function addCustomers(customers, newCustomers) {
//   for (let index = 0; index < newCustomers.length; index += 1) {
//     if (typeof newCustomers[index] === 'string') {
//       customers.push(newCustomers[index]);
//     } else {
//       return 'Todos os valores precisam ser strings.';
//     }
//   }
//return trybeBankCustomers;
// };

//console.log(addCustomers(trybeBankCustomers, ['Carolina', 'Adamastor'])); // [ 'Oliva', 'Nat', 'Gus', 'Carolina', 'Adamastor' ]
//console.log(addCustomers(trybeBankCustomers, ['Miranda', 78])); // Todos os valores precisam ser strings.

//const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
//function greetCustomer(customer) {
  //for (let index = 0; index < customer.length; index += 1) {  // "usando o for para fazer a repetição e falar qual é o proximo nome ou numero"
    //console.log(`Olá, ${customer[index]}. Essa é sua conta do TrybeBank.`);
  //}
//};
//greetCustomer(trybeBankCustomers);

//const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];
//function greetCustomer(customer) {
  //return `Olá, ${customer}. Essa é sua conta do TrybeBank.`;
//};
//console.log(greetCustomer(trybeBankCustomers));

//const balance = 100;
//function sumBalance(value) { 
  //return value + balance;     "o return não tem o = para fazer a comparação, é sem o ="
//}
//function subBalance(value) {
  //return balance - value;
//}
//function multBalance(value){
  //return value * balance;
//}
//function divBalance(value) {
  //return balance / value;
//}
//console.log(sumBalance(500))
//console.log(subBalance(40))
//console.log(multBalance(26))
//console.log(divBalance(35))

//function sum(num1, num2) { Mesmo caso do que o de baixo mais usado a função const para realizar a soma
  //return num1 + num2;
//};
//const result = sum(10, 8);
//console.log(result); // 18

//function sum(num1, num2) {  toda vez que precizar chamar uma soma usar o "sum"
  //return num1 + num2;
//};
//console.log(sum(10, 8)); // 18

//function giveGreeting() {
  //return `Olá, boas-vindas à Trybe!`;
//};
//console.log(giveGreeting()); // Olá, boas-vindas à Trybe!

               //Desafios5 JavaScript  Dia 1 de junho  2023///
//let n = 5;
//let symbol = '*';
//let inputLine = '';
//let inputPosition = n - 1;
//for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  //for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    //if (columnIndex < inputPosition) {
      //inputLine = inputLine + ' ';
    //} else {
      //inputLine = inputLine + symbol;
    //}
  //}
  //console.log(inputLine);
  //inputLine = '';
  //inputPosition -= 1;
//};

                       ///Desafios4///
//let size = 5;
//let symbol = '*';
//let inputLine = '';
//for (let lineIndex = 0; lineIndex <= size; lineIndex += 1) {
  //inputLine = inputLine + symbol;
  //console.log(inputLine);
//};

                       ///Desafios3///
//let n = 5;
//let symbol = '*';
//let inputLine = '';
//for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  //inputLine = inputLine + symbol;
//};
//for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  //console.log(inputLine);
//};

                       ///Desafios2///
//let word = 'tryber';
//let reverseWord = '';
//reverseWord = word.split('').reverse().join('');
//console.log(reverseWord);
//let word = 'tryber';
//let reverseWord = '';
//for (let index = word.length - 1; index >= 0; index -= 1) {
  //reverseWord += word[index];
//};
//console.log(reverseWord);

                       ///Desafios1///                       
//let fatorial = 1;
// Nesse caso vamos começar em 10 e decrementar 1 a cada loop
//for (let index = 10; index > 0; index -= 1) {
  //fatorial *= index;
//};
//console.log(fatorial);

                      /// Exercicíos6///
//const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let result = 0;
//for (let index = 0; index < numbers.length; index += 1) {
  //if (numbers[index] % 2 !== 0) {
    //result += 1;
  //}
//};
//if (result === 0) {
  //console.log('Nenhum valor ímpar encontrado');
//} else {
  //console.log(result);
//};

                      /// Exercicíos5///
//const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar o for com index = 1.
//let higherNumber = numbers[0];
//for (let index = 1; index < numbers.length; index += 1) {
  //if (numbers[index] > higherNumber) {
    //higherNumber = numbers[index];
  //}
//};

//console.log(higherNumber);

                      /// Exercicíos4///
//const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let result = 0;
//for (let index = 0; index < numbers.length; index += 1) {
  //result += numbers[index];
//};
//result = result / numbers.length;
//if (result > 20) {
  //console.log('O valor da média aritmética é maior que 20');
//} else {
  //console.log('O valor da média aritmética é menor ou igual a 20');
//};

                      /// Execicío 3 ///
//const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let sum = 0;
//for (let index = 0; index < numbers.length; index += 1) {
  //sum += numbers[index];
//};
//let average = sum / numbers.length;
//console.log(average);

                      /// Execicío2 ///

//const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let result = 0;
//for (let index = 0; index < numbers.length; index += 1) {
  //result += numbers[index];
//};
//console.log(result);


                      /// Execicío 1 ///

//const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//for (let index = 0; index < numbers.length; index += 1) {
  //console.log(numbers[index]);
//};

                      ///Final do exercicíos///

            //const shopping = ['Sabão em pó', 'Macarrão', 'Leite condesado', 'Refrigerante', 'Maça', 'Alface', 'Nescau']
            //for ( let index = 0;  index < shopping.length; index += 1){
            //console.log(index);
            //console.log(shopping[index]);
            //console.log(`${index} - ${shopping[index]}`);
            //};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////                            
            //const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];
            //for (let index = 0; index < groceryList.length; index += 1) {
            //const currentItem = groceryList[index];
            //console.log(currentItem);
            //};
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
            //const menuServices = '';
            //const menuServices = menu[1];
            //menu.push('Contato');
            //console.log(menu);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //console.log(shopping);
            //console.log(shopping[0]);
            //console.log(shopping[shopping.length - 1]);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //shopping.push('Estilete'); "ele é acrecentado no ultimo número"
            //console.log(shopping);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //shopping.unshift('Milho'); "ele é acrecentado no primeiro número"
            //console.log(shopping);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //shopping.pop(); "ele retira o ultimo número"
            //shopping.shift(); "ele retira o primeiro número"
            //console.log(shopping);