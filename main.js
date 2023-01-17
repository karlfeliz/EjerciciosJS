/* 
    Dado el siguiente array, muestra por consola
    la suma de premios de los jugadores de uruguay
*/

const players = [
    {name: 'Cristiano Ronaldo', country: 'Portugal', goldenBall: 5 , goldenBoot: 6},
    {name: 'Lionel Messi', country: 'Argentina', goldenBall: 7, goldenBoot: 4},
    {name: 'Luis Suárez', country: 'Uruguay', goldenBall : 0, goldenBoot: 2},
    {name: 'Diego Forlan', country: 'Uruguay', goldenBall :0 , goldenBoot: 2},
    {name: 'Thierry Henry', country: 'Francia', goldenBall : 0, goldenBoot: 2},
]

let uruguayPlayers = players.filter((player) => {return player.country === 'Uruguay'});

let uruguayPlayersAwards = uruguayPlayers.map((player) => {
    return player.goldenBall + player.goldenBoot;
});

let uruguayTotalAwards = uruguayPlayersAwards.reduce((acc, player) =>  acc + player,0);

console.log('Ejercicio 0');
console.log('La suma de premios de los jugadores de uruguay es: ' + uruguayTotalAwards);



/* 
    Dado el siguiente array:
*/

const forbesList = [
    {name: 'Elon Musk', amount: 219, age: 50, country:'EEUU', company:'Tesla', industry: 'Automotive'},
    {name: 'Jeff Bezos', amount: 171, age: 58, country:'EEUU', company:'Amazon', industry: 'Technology'},
    {name: 'Bernard Arnault', amount: 158, age: 73, country:'France', company:'LVMH', industry: 'Fashion'},
    {name: 'Bill Gates', amount: 129, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Warren Buffet', amount: 118, age: 91, country:'EEUU', company:'Berkshire', industry: 'Finance'},
    {name: 'Larry Page', amount: 111, age: 49, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Sergey Brin', amount: 171, age: 58, country:'EEUU', company:'Google', industry: 'Technology'},
    {name: 'Larry Ellison', amount: 106, age: 77, country:'EEUU', company:'Software', industry: 'Technology'},
    {name: 'Steve Ballmer', amount: 91, age: 66, country:'EEUU', company:'Microsoft', industry: 'Technology'},
    {name: 'Mukesh Ambani', amount: 90, age: 64, country:'India', company:'Diversified', industry: 'Finance'},
]

/* 
    1) Muestra por consola el listado de nombres de los millonarios
    2) Muestra por consola (true/false) si está Amancio en la lista
    3) Muestra por consola un listado con el resultado de dividir su patrimonio patrimonio entre los años que tienen
    4) Muestra por consola la media de edad de los 10 billonarios de la lista forbes
    5) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología
    6) Muestra por consola el millonario más joven que no sea de EEUU
    7) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU
    8) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos
*/

//     1) Muestra por consola el listado de nombres de los millonarios

let forbesNameList = forbesList.map(millionaire => millionaire.name);

console.log('Ejercicio 1');
console.log(forbesNameList);

//    2) Muestra por consola (true/false) si está Amancio en la lista


let isMillionaire = forbesList.find( elemento => elemento.name === 'Amancio') ? true: false;

console.log('Ejercicio 2');
console.log('¿Está Amancio Ortega en la lista?: ' + isMillionaire);

//    3) Muestra por consola un listado con el resultado de dividir su patrimonio patrimonio entre los años que tienen

let forbesWorthList = forbesList.map(elemento => elemento.amount / elemento.age);

console.log('Ejercicio 3');
console.log(forbesWorthList);

//    4) Muestra por consola la media de edad de los 10 billonarios de la lista forbes

let millionaireAverageAge = forbesList.reduce((acc, millionaire) => acc + millionaire.age / forbesList.length,0);

console.log('Ejercicio 4');
console.log('La media de edad de la lista de los 10 billonarios es: ' + millionaireAverageAge);

//    5) Muestra por consola la suma de dinero de los millonarios de EEUU que están relacionados con technología

let techMillionaire = forbesList.filter((millionaire) => {return millionaire.industry === 'Technology'});
let techMillionaireFortuneSum = techMillionaire.reduce((acc, millionaire) =>  acc + millionaire.amount,0);

console.log('Ejercicio 5');
console.log('La suma de dinero de los millonarios de EEUU que están relacionados con technología es: ' + techMillionaireFortuneSum);

//    6) Muestra por consola el millonario más joven que no sea de EEUU

let foreignMillionaires = forbesList.filter((millionaire) => {return millionaire.country !== 'EEUU'});

let youngestMillionaire = foreignMillionaires.reduce( function(youngest, millionaire){
    return (youngest.age === undefined || youngest.age >= millionaire.age) ? millionaire : youngest;
},{});

console.log('Ejercicio 6');
console.log(youngestMillionaire); 

//     7) Muestra por consola el millonario más mayor del top 5 de millonarios de EEUU

let usMillionaires = forbesList.filter((millionaire) => {return millionaire.country === 'EEUU'});

let orderUsMillionaires = usMillionaires.sort((youngest, oldest) => oldest.age - youngest.age);

let top5UsMillionaires = orderUsMillionaires.slice(0,1);

console.log('Ejercicio 7');
console.log(top5UsMillionaires);

//     8) Muestra por consola la media de edad y media de dinero de los millonarios de Google y Microsoft juntos

let combinedGoogleMicrosoft = forbesList.filter((millionaire) => {return (millionaire.company === 'Google' || millionaire.company === 'Microsoft')});

let totalAverageAge = combinedGoogleMicrosoft.reduce((acc, millionaire) => acc + millionaire.age / combinedGoogleMicrosoft.length, 0);

let totalAverageWorth = combinedGoogleMicrosoft.reduce((acc, millionaire) => acc + millionaire.amount / combinedGoogleMicrosoft.length, 0);


console.log('Ejercicio 8');
console.log('La media de edad es: ' + totalAverageAge);
console.log('La media de dinero es: ' + totalAverageWorth);