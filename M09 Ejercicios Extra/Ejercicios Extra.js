/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloDelObjeto=[];
   for (var prop in objeto){
      var arregloMini= [prop.toString(), objeto[prop]];
      arregloDelObjeto.push(arregloMini);
   };
   return arregloDelObjeto;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var letras=string.split("");
   letras.sort();
   var objetoLetras={};
   for (let i=0; i<letras.length; i++){
      if(objetoLetras.hasOwnProperty(letras[i])==false){
         var n=0;
         for (let j=0; j<letras.length; j++){
            if(letras[i]==letras[j]){
               n= n + 1;
            };
         };
         objetoLetras[letras[i]] = n;
      };
   };
   return objetoLetras;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var letras= string.split("");
   var arregloMayusculaAdelante=[];
   var letrasMinusculas=[];
   for (let i=0; i<letras.length; i++){
      if (letras[i] == letras[i].toUpperCase()){
         arregloMayusculaAdelante.push(letras[i]) 
      }else{
         letrasMinusculas.push(letras[i])
      }
   }
   arregloMayusculaAdelante= arregloMayusculaAdelante.join("");
   letrasMinusculas = letrasMinusculas.join("");
   var palabraFinal= arregloMayusculaAdelante + letrasMinusculas;
   return palabraFinal;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var fraseSeparada= frase.split(" ")
   var arregloFraseSeparada= fraseSeparada.map((num)=>{
      return num.split("")
   })
   var arregloFraseInvertida=[];
   for (let i=0; i<arregloFraseSeparada.length; i++){
      var palabraInvertida=[];
      for (let j=0; j<arregloFraseSeparada[i].length; j++){
         palabraInvertida.unshift(arregloFraseSeparada[i][j]);
      }
      arregloFraseInvertida.push(palabraInvertida);
   }
   var arregloFraseJunta= arregloFraseInvertida.map((num)=>{
      return num.join("");
   })
   var fraseAlReves= arregloFraseJunta.join(" ");
   return fraseAlReves; 
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numero= numero.toString().split("");
   var esElMismoNumero=0;
   for(let i=0; i<numero.length; i++){
      if(numero[i]== numero[numero.length-i-1]){
         esElMismoNumero= esElMismoNumero +1;
      };
   };
   if (esElMismoNumero == numero.length){
      return "Es capicua";
   }else{
      return "No es capicua";
   };
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var letras=string.split("");
   var valido=[];
   for (let i=0; i<letras.length; i++){
      if(letras[i]=="a" || letras[i]=="b" || letras[i]=="c"){
         continue
      }else{
         valido.push(letras[i]);
      };
   }
   var palabra= valido.join("");
   return palabra;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var huboCambios= false;
   do{
      huboCambios= false;
      for (let i=0; i<arrayOfStrings.length-1; i++){
         if (arrayOfStrings[i].length>arrayOfStrings[i+1].length){
            let mayor= arrayOfStrings[i];
            arrayOfStrings[i]= arrayOfStrings[i+1];
            arrayOfStrings[i+1]= mayor;
            huboCambios=true;
         }
      }
   } while (huboCambios==true);
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interseccion=[];
   for (let i=0; i<array1.length; i++){
      for (let j=0; j<array2.length; j++){
         if (array1[i]===array2[j]){
            interseccion.push(array2[j]);
         };
      };
   };
   return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
