// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [4, 5, 6];

// console.log([...arr1, ...arr2])
// console.log(typeof ([...arr1, ...arr2])) // object

// const obj1 = {
//     name: 'John',
//     age: 25,
//     address: 'USA'
// }

// const { name, address } = obj1;
// console.log(name)
// console.log(address)

const Obj1 = {
    name: 'Quyet bui',
    age: 21,
    address: 'Viet Nam'
}

const Obj2 = Obj1;
const Obj3= {...Obj1};
console.log(Obj2)
console.log(Obj3)