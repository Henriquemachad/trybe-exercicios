                       ///Desafios5///
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