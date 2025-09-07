//Primitive

//7 types: String , Number, Booelan , Null ,Undefined, Symbol, BigInt


// const id = Symbol('1235')

// const anotherId = Symbol('123')
// console.log(id === anotherId)

// //Refrences (Non-Primitve)
// // arrays, Object , Function

// let heros = ["SUperman, Batman, Ironman, Shaktiman"]

// const myObj = {
//     name: "Shahnawaz",
//     age: "26"
// }

// const myFunction = function(){
//     console.log("Shahnawaz")
// }
 

//  *****************************************************************

//Memory

// Stack(Primitve)          Heap(Non-Primitve)

let names = "shahnawaz"
let anotherNames = names

anotherNames = "Walker"

console.log(names)
console.log(anotherNames)


let userOne = {
     name:"Shah",
     sirname:"ahmad"    
}

let userTwo = userOne

userTwo.name = "nawaz"

console.log(userOne.name)
console.log(userTwo.name)
