//variables primitivas
let nombre = "Fernando"
let apellido = "Martinez"
let edad = 21
let estado = true
//constantes
//arreglos
const numeros = [2,45,60,85,10]
//objetos
const articulo = {
    descripcion:'Coca cola',
    precio:2,
    stock:1000
}
const notas = [
    {nombre:"Fernando", promedio:95,
        parciales:[
            {primer:[35,15]},
            {segundo:[45,25]}
        ]
    },
    {nombre:"Andre", promedio:80,
        parciales:[
            {primer:[25,45]},
            {segundo:[15,55]}
        ]
    },
    {nombre:"Pancho", promedio:100,
        parciales:[
            {primer:[25,25]},
            {segundo:[55,15]}
        ]
    }
]
//if (conditionals)
/*if (name)
    console.log("nombre:",nombre,"|","edad:",edad)
else
    console.log("No ha ingresado nombre:",nombre)*/

let respuesta = (nombre==undefined) ? "Variale not created" : nombre
//console.log(respuesta)

//camnbios, presentacion
articulo.precio=30
articulo.estado=true
/* console.log("Articulo:",articulo, "Descripcion:", articulo.descripcion, "Precio:", articulo.precio, "Estado:",articulo.estado)
console.log(notas[1])
console.log(notas[1].nombre)
console.log(notas[1].parciales)
console.log(notas[1].parciales[1].segundo)
console.log(notas[1].parciales[1].segundo[1]) */
//switch
dia = 2 
switch (dia){
    case 1:
        //console.log("Lunes")
        break
    case 2:
        //console.log("Martes")
        break
    default:
        //console.log("Dia no valido")
        break
}
// try and catch
let x=20, y=1
try {
    if (y == 0)
        throw("Division is not allowed for 0")
    let resp = x/y
    //console.log(resp)
}catch(error){
    //console.log(error)
}

//Ciclos
const numeross = [2,45,60,85,10,8]/*
let pos=0
while (pos < numeross.length){
    console.log(pos,numeross[pos])
    pos += 1
}
while (pos < numeross.length && numeross[pos]!=85){
    console.log(pos,numeross[pos])
    pos += 1
}*/
//console.log("everything")
for (let index = 0; index < numeross.length; index++) {
    //console.log(index, "[",numeross[index],"]")
}
//console.log("higher to lower")
for (let index = numeross.length-1; index >= 0; index--) {
    //console.log(index, "[",numeross[index],"]")
}

//funciones
function suma(){
    let n1 =15
    let n2 =10
    //console.log("La suma de",n1, "+",n2,"es igual a:" ,n1+n2)
}
//suma()
function Multiplicar(n1=5,n2=6){
    return n1*n2
}
//console.log(Multiplicar(5,8))


const sum = () => {
    let n1 =25
    let n2 =15
    //console.log(`La suma: ${n1} + ${n2} es igual a: ${n1+n2}`)
}
//sum()

const Mult = (n1=6,n2=8) => {
    n1 = (n1) ? n1 : 0
    n2 = (n2) ? n2 : 0
    return n1*n2
}
//console.log(Mult(5,8))

function resta(n1=4,n2=2){
    //console.log("La resta de",n1, "-",n2,"es igual a:" ,n1-n2)
}
//resta()
const rest =(n1=15,n2=25)=> n1 - n2

//console.log(rest())

function division(n1=8,n2=4){
    respp= n2 ? n1/n2 : 0
    return n1 / n2
}
const div = (n1=6,n2=3) => n2 ? n1/n2 : 0
//console.log(div(10,5))
//console.log(division(7,2)) 

const arreglo = [2,45,60,85,10,20]
for (let index = 0; index < numeross.length; index++) {
    console.log(`${index} [ ${numeross[index]} ]`)
}
