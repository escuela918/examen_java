const numeros = [3, 7, 2, 9, 12, 5, 8];
numeros <= 5;
a = numeros / 2 
a == 0


//1º
console.log(numeros.filter(i => i > 5));

//2º
const pares = numeros.filter((n) => n % 2 === 0);
console.log(pares);


const estudiantes = [
  { nombre: "Ana", nota: 8 },
  { nombre: "Juan", nota: 5 },
  { nombre: "Lucía", nota: 9 },
  { nombre: "Pedro", nota: 4 }];

  //aº

const nombre= estudiantes.map(estudiantes => estudiantes.nombre);
   console.log(nombre);
//bº
const nota= estudiantes.filter(estudiantes => estudiantes.nota >= 6);
   console.log(nota)

//cº
const aprovados = estudiantes.map(estudiantes => {
if ( estudiantes.nota >= 6)
  console.log("aprobado")
else
  console.log("desaprobado")

});
console.log(aprovados)