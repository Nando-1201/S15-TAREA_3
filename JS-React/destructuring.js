const datos = {
    imagen: 'https://www.uscurrency.gov/sites/default/files/styles/bill_version/public/denominations/100-front-2013-present.jpg?itok=pNWp6Fci',
    correo: 'fmartinezd@unemi.edu.ec'
}
console.log(datos)
//primera forma
const mostrarDatos = (avatar) =>
    `
        <img src=${avatar.imagen} alt=${avatar.correo}/>        
    `
//segunda forma
const mostrarDatos1 = (avatar) =>{
    const {imagen,correo} = avatar
    return(
        `
        <img src=${imagen} alt=${correo}/>        
        `
    )
}
//tercera forma
const mostrarDatos2 = ({imagen:img,correo}) =>
    `
    <img src=${img} alt=${correo}/>        
    `

const $root = document.getElementById("root")
$root.innerHTML = "<h3>Destructuring</h3>"
$root.innerHTML += "<h2>Para las colitas Profe</h2>"
$root.innerHTML += mostrarDatos2(datos)