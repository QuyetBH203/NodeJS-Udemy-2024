const arr1 = [1, 2, 3, 4, 5];
const arr2 = [4, 5, 6];

console.log([...arr1, ...arr2])
console.log(typeof ([...arr1, ...arr2])) // object

const obj1 = {
    name: 'John',
    age: 25,
    address: 'USA'
}

const { name, address } = obj1;
console.log(name)
console.log(address)