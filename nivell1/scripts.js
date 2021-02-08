// ===============  
// Exercicis ES6 
//   NIVELL 1 
// ===============


// Exercici 1 
// Converteix a funcions fletxa
// ============================

// 1
const multiply = (num1, num2) => num1 * num2;

console.log(`1: ${multiply(2,3)} `);

// 2
const toCelsius = (fahrenheit) => ((5/9)*(fahrenheit-32));

console.log(`2: ${toCelsius(50)} `);

// 3
const padZeros = (num,totalLen) => {
    let numStr = num.toString();
    let numZeros = totalLen - numStr.length;
    for (let i = 1; i <= numZeros; i++) {
       numStr="0" + numStr; 
       }
    return numStr;
}
 
console.log(`3: ${padZeros(3,4)} `);

// 4
 const power = (base, exponent) => {
	let result=1;
  for (let i=0; i < exponent; i++) { 
         result *=base; 
   } 
   return result;
}

console.log(`4: ${power(5,5)} `);

//5
const greet = who => console.log(`Hello ${who}`);

greet('Pablo');


// Exercici 2
// Arregla l'error del següent bloc de codi:
// =========================================

var users = 
[{ firstName: 'Homer', lastName: 'Simpson' },
{ firstName: 'Marge', lastName: 'Simpson' },
{ firstName: 'Bart', lastName: 'Simpson' },
{ firstName: 'Lisa', lastName: 'Simpson' },
{ firstName: 'Maggie', lastName: 'Simpson' }];

const fName= users.map((user) => user.firstName);

console.log(fName);

// Exercici 3
// Donat el següent array de strings, mostrar per consola la frase completa usant .reduce()
// ========================================================================================

var epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
let acc, el;
const frase = epic.reduce((acc, el) => `${acc} ${el}`);

console.log(frase);

// Exercici 4
// Crear una funció que accepti un string i retornada aquest string revertit. Nota: 
// Usar funció fletxa (arrow functions), l'operador de prograpación (spread operator) y el mètode .reverse()
// ========================================================================================
const bifronte = (string)  => {
	console.log([...string].reverse().join(" ").toString())
}

bifronte('la telev es');

// Exercici 5
// Reemplaça en el següent bloc de codi la promesa per aync/await:
// ===============================================================
function b() {
    // ...
 }
// Resposta
 async function a() {
    const datosFb = await b();
    doMoreWork();    
 }
 
// Exercici 6
// Tenim un array de tasques i volem aconseguir un array que contingui únicament els noms de les tasques. 
// ======================================================================================================

var tasks = [
    {
       'name' : 'Start React web',
       'duration' : 120
    },
    {
       'name' : 'Work out',
       'duration' : 60
    },
    {
       'name' : 'Procrastinate on facebook',
       'duration' : 240
    }
    ];

// Usar .forEach() per obtenir aquest array.

const nameTasks = [];

tasks.forEach((item) => {
    nameTasks.push(item.name)
});

console.log(nameTasks);

// Usar .map() per obtenir aquest array.

const nameTasksB = tasks.map((item) => item.name)
console.log(nameTasksB);