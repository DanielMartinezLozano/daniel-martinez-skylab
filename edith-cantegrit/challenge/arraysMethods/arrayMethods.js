// ARRAY
// let arr = [
//     "pedro",
//     "ed",
//     "carlos",
// ]

// let mapped = arr.map((item)=>{
//     return item = item + "_Mapped"
// });
// console.log(mapped) // ed_Mapped...

// let reduced = arr.reduce( function(total, amount){
//     return total + amount
// });

// let objname = {
//     propertyOne: "edith",
//     propertyTwo: "pedro",
//     propertyThree: "theo"
// }

// Object.prototype.map = function(fun) {
//     newObject = {};
//     for(const [key, value] of Object.entries(this)) {
//         newObject[key] = fun(value)
//     }
//     return newObject;
// }

// let mappedOBj = objname.map((item)=>{
//     return item + "_mapped"
// });
// console.log(mappedOBj) // ed_Mapped


Object.prototype.filter = function(obj, func) {
    newObject = {};
    debugger;
    for(const property in obj) {
        if(obj[property] === func(filterLessthanSix) { 
            newObject.property = func(item)
        }
    }
    return newObject;
}

let objtofilter = {
    propertyOne: 8,
    propertyTwo: 4,
    propertyThree: 5
}

let filterOBj = objtofilter.filter(objtofilter, filterLessthanSix)

const filterLessthanSix = num => num < 6;

console.log(filterOBj) // 4 and 5






// Object.prototype.reduce = function(func) {
//     newObject = {};
//     newObject.current = 0;
//     for(const property in this) {
//         console.log(newObject['current'])
//         newObject.current = func(newObject['current'], this[property])
//     }
//     return newObject;
// }

// let obj = {
//     propertyOne: 1,
//     propertyTwo: 4,
//     propertyThree: 5
// }

// let reduceOBj = obj.reduce((total, amount)=>{
//     let result = total + amount
//     return result
// });
// console.log(reduceOBj) // ed_Mapped


