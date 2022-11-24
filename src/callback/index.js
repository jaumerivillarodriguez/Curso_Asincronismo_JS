function sum(num1,num2) {
    return num1 + num2;
}

function calc(num1,num2,callback){
    return callback(num1,num2); //pasas el argumento de la funcion sum
}

console.log(calc(2,2,sum)); 

setTimeout(function() {
    console.log('Hola');
},5000)

function greeting(name){
    console.log(`Hola ${name}`);
}

setTimeout(function(){
    greeting('Jaume');
},2000);