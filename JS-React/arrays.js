const numeros = [20,40,20,80,100]
let alumnos = [
    {nombre:"Kevin",n1:35,n2:15},
    {nombre:"Victor",n1:25,n2:20},
    {nombre:"Henry",n1:30,n2:20},
    {nombre:"Sergio",n1:10,n2:20},
    {nombre:"Joao",n1:15,n2:40},
    {nombre:"Andres",n1:50,n2:10}
]
console.clear()
//console.log(numeros,alumnos)

for (let index = 0; index < alumnos.length; index++)
    //console.log("alumnos -->",alumnos[index].nombre)

alumnos.forEach(alumno => {
    prom = alumno.n1+alumno.n2
    //console.log(alumno.nombre,prom)
});
alumnos.map(alumno => {
    prom = alumno.n1+alumno.n2
    //console.log(alumno.nombre,prom)
});

const item = alumnos.map(alumno => {
    prom = (alumno.n1+alumno.n2)/2
    return [alumno.nombre,prom]
});

//console.log(item)

const items = alumnos.filter(alumno => alumno.nombre!="Sergio");

alumnos=[...items]
console.log(items)