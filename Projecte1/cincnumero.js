var numeros = new Array(6);
for(var i=0; i<5; i++){
    numeros[i]= prompt("Introdueix un numero: ");
}

alert(Math.min(numeros[0],numeros[1],numeros[2],numeros[3],numeros[4]));
