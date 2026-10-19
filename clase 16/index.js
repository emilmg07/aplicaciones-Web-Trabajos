//operaciones con arreglos

//const numeros = [5,20,1,8,9]
//const numerosmasuno = []

//numeros.forEach((numero )->{
//    numerosmasuno.push(numero + 1)
//})
//console.log(numerosmasuno)

//
const numeros = [5,20,1,8,9]

const numerosmasuno = numeros.map((numero)=>{
    return numero + 1
})

console.log(numerosmasuno)

//filter y find