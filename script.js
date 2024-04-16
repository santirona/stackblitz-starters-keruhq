function mostrarElemento(elemento) {
  console.log('elemento ' + elemento);
}
let miArray = [3, 5, 7];
console.log(miArray.length);

miArray.push(20);
console.log(miArray);

miArray.pop();
console.log(miArray);

console.log(typeof miArray);

console.log(miArray.constructor.toString().indexOf('Array') > -1);

miArray.push(33);

miArray.forEach(mostrarElemento);

miArray.forEach((valor) => console.log('elemento: ' + valor));

let num = 8;
num.constructor.toString().indexOf('Array') > -1;

for (let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]);
}

miArray.splice(1, 1);
console.log(miArray);

miArray.splice(1, 1, 10);
console.log(miArray);

miArray.reverse();
console.log(miArray);
