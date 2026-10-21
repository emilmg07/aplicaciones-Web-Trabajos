const personas = [
    {
        nombre: "andres",
        edad: 20
    },
    {
        nombre: "jose",
        edad: 21
    },
    {
        nombre: "camila",
        edad: 25
    },

]

//for each > no me devuelve nada
//(personas.forEach((persona)=>{
//    console.log(persona.edad)
//})
// map -> devuelve un nuevo arreglo
//const NuevoArregloPersonas = personas.map((elementodelarreglo, indice, arreglo)=>{
//    return elementodelarreglo
//})
//console,log(NuevoArregloPersonas)
// filter -> devuelve un nuevo arreglo
//const NuevoArregloPersonas = personas.filter((persona,indice,arreglo)=>{
//    return persona.edad > 20 //expresion que devuelve true o false
//})
//console.log(NuevoArregloPersonas)
// find -> devuelve el primer elemento que cumple la condicion
//const NuevoArregloPersonas = personas.find ((persona,indice,arreglo)=>{
//    return persona.edad > 20 //expresion que devuelve true o false
//})
//console.log(NuevoArregloPersonas)