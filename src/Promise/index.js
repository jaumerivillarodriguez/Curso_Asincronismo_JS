// tiene 3 estados: 
//1- Pendiente: cuando se esta ejecutando
//2- Cumplido: ha regresado la información deseada
//3- Rechazado

const promise = new Promise(function(resolve, reject){
    resolve('Hey!');
});


const cow = 15;

const countCows = new Promise(function(resolve,reject){
    if (cow > 10){
        resolve(`we have ${cow} cows`);
    }
    else{
        reject('There is no cows on the farm');
    }
});

countCows.then((result) =>{
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('Finally'));
